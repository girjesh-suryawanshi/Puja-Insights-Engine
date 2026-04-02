import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-unsafe-secret";

export interface AuthRequest extends Request {
  user?: { id: number; email: string; role: string };
}

export function authMiddleware(roles: string[] = []) {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    try {
      const token = req.cookies?.token;
      if (!token) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }

      const decoded = jwt.verify(token, JWT_SECRET) as { id: number; email: string; role: string };
      req.user = decoded;

      if (roles.length > 0 && !roles.includes(decoded.role)) {
        res.status(403).json({ error: "Forbidden: insufficient permissions" });
        return;
      }

      next();
    } catch (err) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }
  };
}
