import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupSEORoutes } from "./seo";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup SEO routes (sitemap, robots.txt, etc.)
  setupSEORoutes(app);
  
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
