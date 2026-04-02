import { Router } from "express";
import { db } from "@workspace/db";
import { settingsTable, blogsTable, usersTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
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
  const blogs = await db.select().from(blogsTable);
  res.json(blogs);
});

router.post("/blogs", async (req, res) => {
  const newBlog = await db.insert(blogsTable).values(req.body).returning();
  res.json(newBlog[0]);
});

router.put("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const updated = await db.update(blogsTable).set({ ...req.body, updatedAt: new Date() }).where(eq(blogsTable.id, Number(id))).returning();
  res.json(updated[0]);
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

export default router;
