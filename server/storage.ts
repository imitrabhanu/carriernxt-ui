import { 
  users, type User, type InsertUser,
  leads, type Lead, type InsertLead,
  contactMessages, type ContactMessage, type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private leadsData: Map<number, Lead>;
  private contactMessagesData: Map<number, ContactMessage>;
  
  private userId: number;
  private leadId: number;
  private contactMessageId: number;

  constructor() {
    this.users = new Map();
    this.leadsData = new Map();
    this.contactMessagesData = new Map();
    
    this.userId = 1;
    this.leadId = 1;
    this.contactMessageId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.leadId++;
    const createdAt = new Date();
    const lead: Lead = { ...insertLead, id, createdAt };
    this.leadsData.set(id, lead);
    return lead;
  }
  
  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leadsData.values());
  }
  
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageId++;
    const createdAt = new Date();
    const message: ContactMessage = { ...insertMessage, id, createdAt };
    this.contactMessagesData.set(id, message);
    return message;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessagesData.values());
  }
}

export const storage = new MemStorage();
