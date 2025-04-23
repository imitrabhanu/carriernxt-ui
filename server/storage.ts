import { 
  users, type User, type InsertUser,
  leads, type Lead, type InsertLead,
  contactMessages, type ContactMessage, type InsertContactMessage
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  async createLead(insertLead: InsertLead): Promise<Lead> {
    // Ensure education is null when undefined to match the database schema
    const leadData = {
      ...insertLead,
      education: insertLead.education ?? null
    };
    const result = await db.insert(leads).values(leadData).returning();
    return result[0];
  }
  
  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(leads.createdAt);
  }
  
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    // Ensure subject is null when undefined to match the database schema
    const messageData = {
      ...insertMessage,
      subject: insertMessage.subject ?? null
    };
    const result = await db.insert(contactMessages).values(messageData).returning();
    return result[0];
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages).orderBy(contactMessages.createdAt);
  }
}

// Replace MemStorage with DatabaseStorage
export const storage = new DatabaseStorage();
