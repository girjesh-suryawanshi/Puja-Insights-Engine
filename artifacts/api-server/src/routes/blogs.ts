import { Router } from "express";
import { db } from "@workspace/db";
import { blogsTable } from "@workspace/db/schema";
import { eq, desc, sql } from "drizzle-orm";

const router = Router();

// Self-healing: Ensure tags column exists
async function ensureTagsColumn() {
  try {
    await db.execute(sql`ALTER TABLE blogs ADD COLUMN IF NOT EXISTS tags TEXT;`);
  } catch (err) {
    // Ignore error if it already exists or if it's a different DB issue
    console.warn("Self-healing: Could not ensure tags column (might already exist):", err);
  }
}

// Get all published blogs
router.get("/", async (req, res) => {
  try {
    await ensureTagsColumn();
    const blogs = await db.select()
      .from(blogsTable)
      .where(eq(blogsTable.status, "published"))
      .orderBy(desc(blogsTable.publishedAt), desc(blogsTable.createdAt));
    res.json(blogs);
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// Get single blog by slug
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    await ensureTagsColumn();
    const blog = await db.select()
      .from(blogsTable)
      .where(eq(blogsTable.slug, slug))
      .limit(1);
    
    if (blog.length === 0) {
      res.status(404).json({ error: "Blog not found" });
      return;
    }
    
    res.json(blog[0]);
  } catch (err) {
    console.error("Failed to fetch blog by slug:", err);
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

export default router;
