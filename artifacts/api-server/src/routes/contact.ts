import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { contactsTable } from "@workspace/db/schema";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, phone, subject, message } = parsed.data;

  await db.insert(contactsTable).values({ name, email, phone, subject, message });

  res.status(201).json({ success: true, message: "Thank you for contacting us! We will get back to you shortly." });
});

export default router;
