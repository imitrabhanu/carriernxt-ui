import { useAuth } from "@/hooks/use-auth";
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
import { Loader2, LogOut } from "lucide-react";
import { formatDistance } from "date-fns";
import { Lead, ContactMessage } from "@/lib/services";

export default function AdminPage() {
  const { user, logoutMutation } = useAuth();
  
  const { data: leads = [], isLoading: isLeadsLoading } = useQuery<Lead[]>({
    queryKey: ["/leads"],
    enabled: !!user,
  });
  
  const { data: contactMessages = [], isLoading: isContactsLoading } = useQuery<ContactMessage[]>({
    queryKey: ["/contact"],
    enabled: !!user,
  });
  
  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <p className="text-muted-foreground">Welcome, {user?.name}</p>
          <Button variant="outline" size="sm" onClick={handleLogout} disabled={logoutMutation.isPending}>
            {logoutMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4 mr-2" />}
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
            <CardHeader>
              <CardTitle>Leads</CardTitle>
              <CardDescription>
                View all potential customers who have expressed interest
              </CardDescription>
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