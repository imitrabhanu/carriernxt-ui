import { useAuth } from "@/hooks/use-auth";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2, LogOut, RefreshCw } from "lucide-react";
import { formatDistance } from "date-fns";
import { Lead, ContactMessage, leadsService, contactService } from "@/lib/services";
import { useToast } from "@/hooks/use-toast";

// Mock data for contact messages (to be used until the backend API is fixed)
const mockContactMessages: ContactMessage[] = [
  {
    id: 1,
    name: "Robert Brown",
    email: "robert@example.com",
    subject: "Service Inquiry",
    message: "I would like to know more about your services and pricing.",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    subject: "Technical Support",
    message: "I'm having trouble with your product. Can you help me resolve this issue?",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export default function AdminPage() {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(mockContactMessages);
  const [isContactsLoading, setIsContactsLoading] = useState(false);

  // Fetch leads from the backend
  const { 
    data: leads = [], 
    isLoading: isLeadsLoading,
    error: leadsError,
    refetch: refetchLeads,
    isRefetching: isRefetchingLeads
  } = useQuery({
    queryKey: ['leads'],
    queryFn: leadsService.getLeads,
  });

  // Show error toast if leads fetch fails
  useEffect(() => {
    if (leadsError) {
      toast({
        title: "Error loading leads",
        description: "There was a problem loading the leads data.",
        variant: "destructive",
      });
    }
  }, [leadsError, toast]);

  const handleRefreshLeads = async () => {
    try {
      await refetchLeads();
      toast({
        title: "Data refreshed",
        description: "The leads data has been refreshed.",
      });
    } catch (error) {
      toast({
        title: "Refresh failed",
        description: "Failed to refresh the leads data.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <p className="text-muted-foreground">Welcome, {user?.name}</p>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="leads" className="w-full">
        <TabsList>
          <TabsTrigger value="leads">Leads ({leads.length})</TabsTrigger>
          <TabsTrigger value="contacts">Contact Messages ({contactMessages.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="leads">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Leads</CardTitle>
                <CardDescription>
                  View all potential customers who have expressed interest
                </CardDescription>
              </div>
              <Button 
                size="sm" 
                onClick={handleRefreshLeads} 
                disabled={isLeadsLoading || isRefetchingLeads}
              >
                {isRefetchingLeads ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="h-4 w-4 mr-2" />
                )}
                Refresh
              </Button>
            </CardHeader>
            <CardContent>
              {isLeadsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : leads.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No leads found
                </div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Education</TableHead>
                        <TableHead>Created</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leads.map((lead) => (
                        <TableRow key={lead.id}>
                          <TableCell className="font-medium">{lead.name}</TableCell>
                          <TableCell>{lead.email}</TableCell>
                          <TableCell>{lead.phone}</TableCell>
                          <TableCell>{lead.education || "Not specified"}</TableCell>
                          <TableCell>
                            {lead.createdAt && formatDistance(new Date(lead.createdAt), new Date(), { addSuffix: true })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Contact Messages</CardTitle>
              <CardDescription>
                Messages sent through the contact form
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isContactsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : contactMessages.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No contact messages found
                </div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Created</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contactMessages.map((message) => (
                        <TableRow key={message.id}>
                          <TableCell className="font-medium">{message.name}</TableCell>
                          <TableCell>{message.email}</TableCell>
                          <TableCell>{message.subject || "No subject"}</TableCell>
                          <TableCell>
                            <div className="max-w-xs truncate" title={message.message}>
                              {message.message}
                            </div>
                          </TableCell>
                          <TableCell>
                            {message.createdAt && formatDistance(new Date(message.createdAt), new Date(), { addSuffix: true })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}