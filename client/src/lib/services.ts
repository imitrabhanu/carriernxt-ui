import { apiRequest } from './api';

// Type definitions
export interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  education?: string;
  createdAt: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  education?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Lead services
export const leadsService = {
  async getLeads(): Promise<Lead[]> {
    const response = await apiRequest('GET', '/leads');
    return response.json();
  },
  
  async createLead(data: LeadFormData): Promise<Lead> {
    const response = await apiRequest('POST', '/leads', data);
    return response.json();
  }
};

// Contact services
export const contactService = {
  async getMessages(): Promise<ContactMessage[]> {
    const response = await apiRequest('GET', '/contact');
    return response.json();
  },
  
  async sendMessage(data: ContactFormData): Promise<ContactMessage> {
    const response = await apiRequest('POST', '/contact', data);
    return response.json();
  }
}; 