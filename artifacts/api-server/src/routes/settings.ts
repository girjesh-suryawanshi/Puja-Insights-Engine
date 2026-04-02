import { Router } from "express";
import { db } from "@workspace/db";
import { settingsTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/public", async (req, res) => {
  try {
    const settings = await db.select().from(settingsTable).where(eq(settingsTable.isActive, true));
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch settings" });
  }
});

export default router;
