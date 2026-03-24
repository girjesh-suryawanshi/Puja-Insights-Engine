import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { bookingsTable } from "@workspace/db/schema";
import { CreateBookingBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/bookings", async (req, res) => {
  const parsed = CreateBookingBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, phone, pujaType, date, address, city, message } = parsed.data;

  const [booking] = await db
    .insert(bookingsTable)
    .values({ name, email, phone, pujaType, date, address, city, message: message ?? null })
    .returning();

  res.status(201).json({
    ...booking,
    createdAt: booking.createdAt.toISOString(),
  });
});

router.get("/bookings", async (_req, res) => {
  const bookings = await db.select().from(bookingsTable).orderBy(bookingsTable.createdAt);
  res.json(bookings.map((b) => ({ ...b, createdAt: b.createdAt.toISOString() })));
});

export default router;
