import { Router } from "express";
import { db } from "@workspace/db";
import { settingsTable, blogsTable, usersTable, bookingsTable, contactsTable } from "@workspace/db/schema";
import { eq, desc, gte, lte, sql, and } from "drizzle-orm";
import bcrypt from "bcryptjs";

const router = Router();

// Settings
router.get("/settings", async (req, res) => {
  const settings = await db.select().from(settingsTable);
  res.json(settings);
});

router.post("/settings", async (req, res) => {
  const newSetting = await db.insert(settingsTable).values(req.body).returning();
  res.json(newSetting[0]);
});

router.put("/settings/:id", async (req, res) => {
  const { id } = req.params;
  const updated = await db.update(settingsTable).set(req.body).where(eq(settingsTable.id, Number(id))).returning();
  res.json(updated[0]);
});

router.delete("/settings/:id", async (req, res) => {
  const { id } = req.params;
  await db.delete(settingsTable).where(eq(settingsTable.id, Number(id)));
  res.json({ success: true });
});

// Blogs
router.get("/blogs", async (req, res) => {
  const blogs = await db.select().from(blogsTable).orderBy(desc(blogsTable.createdAt));
  res.json(blogs);
});

const getSafeBlogData = (body: any) => {
  return {
    slug: body.slug,
    title: body.title,
    content: body.content,
    excerpt: body.excerpt,
    image: body.image,
    category: body.category,
    readTime: body.readTime,
    primaryKeyword: body.primaryKeyword,
    metaTitle: body.metaTitle,
    metaDescription: body.metaDescription,
    status: body.status,
    tags: body.tags,
    authorId: body.authorId ? Number(body.authorId) : null,
  };
};

router.post("/blogs", async (req, res) => {
  try {
    const data = getSafeBlogData(req.body);
    const publishedAt = req.body.status === 'published' ? new Date() : null;
    
    const newBlog = await db.insert(blogsTable)
      .values({ ...data, publishedAt } as any)
      .returning();
    return res.json(newBlog[0]);
  } catch (err) {
    console.error("Failed to create blog:", err);
    return res.status(500).json({ error: "Failed to create blog post" });
  }
});

router.put("/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = getSafeBlogData(req.body);
    
    const existing = await db.select().from(blogsTable).where(eq(blogsTable.id, Number(id))).limit(1);
    if (existing.length === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }

    let publishedAt = existing[0].publishedAt;
    if (req.body.status === 'published' && !publishedAt) {
      publishedAt = new Date();
    } else if (req.body.status === 'draft') {
      publishedAt = null;
    }

    const updated = await db.update(blogsTable)
      .set({ 
        ...data, 
        publishedAt,
        updatedAt: new Date() 
      })
      .where(eq(blogsTable.id, Number(id)))
      .returning();
    return res.json(updated[0]);
  } catch (err) {
    console.error("Failed to update blog:", err);
    return res.status(500).json({ error: "Failed to update blog post" });
  }
});

router.delete("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  await db.delete(blogsTable).where(eq(blogsTable.id, Number(id)));
  res.json({ success: true });
});

// Users (Admin only)
router.get("/users", async (req, res) => {
  const users = await db.select({
    id: usersTable.id,
    email: usersTable.email,
    role: usersTable.role,
    createdAt: usersTable.createdAt
  }).from(usersTable);
  res.json(users);
});

router.post("/users", async (req, res) => {
  const { email, password, role } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await db.insert(usersTable).values({ email, passwordHash, role }).returning();
  res.json({ id: newUser[0].id, email: newUser[0].email, role: newUser[0].role });
});

// Bookings (Admin only) with pagination and date filter
router.get("/bookings", async (req, res) => {
  const { start, end, page = "1", size = "10" } = req.query as any;
  const pageNum = Number(page);
  const pageSize = Number(size);

  let conditions: any[] = [];
  if (start && !isNaN(Date.parse(start))) {
    conditions.push(gte(bookingsTable.createdAt, new Date(start)));
  }
  if (end && !isNaN(Date.parse(end))) {
    const endOfDay = new Date(end);
    endOfDay.setHours(23, 59, 59, 999);
    conditions.push(lte(bookingsTable.createdAt, endOfDay));
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  // Count query
  const totalResult = await db.select({ total: sql<number>`count(*)` })
    .from(bookingsTable)
    .where(whereClause);
  const total = totalResult[0].total;

  // Data query
  const data = await db.select()
    .from(bookingsTable)
    .where(whereClause)
    .orderBy(desc(bookingsTable.createdAt))
    .limit(pageSize)
    .offset((pageNum - 1) * pageSize);

  res.json({ data, total });
});

// Contacts (Admin only) with pagination and date filter
router.get("/contacts", async (req, res) => {
  const { start, end, page = "1", size = "10" } = req.query as any;
  const pageNum = Number(page);
  const pageSize = Number(size);

  let conditions: any[] = [];
  if (start && !isNaN(Date.parse(start))) {
    conditions.push(gte(contactsTable.createdAt, new Date(start)));
  }
  if (end && !isNaN(Date.parse(end))) {
    const endOfDay = new Date(end);
    endOfDay.setHours(23, 59, 59, 999);
    conditions.push(lte(contactsTable.createdAt, endOfDay));
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  // Count query
  const totalResult = await db.select({ total: sql<number>`count(*)` })
    .from(contactsTable)
    .where(whereClause);
  const total = totalResult[0].total;

  // Data query
  const data = await db.select()
    .from(contactsTable)
    .where(whereClause)
    .orderBy(desc(contactsTable.createdAt))
    .limit(pageSize)
    .offset((pageNum - 1) * pageSize);

  res.json({ data, total });
});

export default router;
