import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/leads", async (req: Request, res: Response) => {
    try {
      const result = insertLeadSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      const lead = await storage.createLead(result.data);
      return res.status(201).json(lead);
    } catch (error) {
      console.error("Error creating lead:", error);
      return res.status(500).json({ message: "Failed to save lead information" });
    }
  });
  
  app.get("/api/leads", async (req: Request, res: Response) => {
    try {
      const leads = await storage.getLeads();
      return res.status(200).json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      return res.status(500).json({ message: "Failed to fetch leads" });
    }
  });
  
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      const message = await storage.createContactMessage(result.data);
      return res.status(201).json(message);
    } catch (error) {
      console.error("Error creating contact message:", error);
      return res.status(500).json({ message: "Failed to save contact message" });
    }
  });
  
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ message: "Failed to fetch contact messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
