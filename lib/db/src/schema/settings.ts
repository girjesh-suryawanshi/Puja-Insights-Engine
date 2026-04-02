import { pgTable, serial, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const settingsTable = pgTable("settings", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 50 }).notNull(), // 'contact' or 'tracking_script'
  key: varchar("key", { length: 255 }).notNull().unique(), // e.g. 'company_name', 'google_analytics'
  value: text("value").notNull(),
  injectionLocation: varchar("injection_location", { length: 50 }), // 'head' or 'body'
  isActive: boolean("is_active").default(true).notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertSettingSchema = createInsertSchema(settingsTable).omit({ id: true, updatedAt: true });
export type InsertSetting = z.infer<typeof insertSettingSchema>;
export type Setting = typeof settingsTable.$inferSelect;
