import { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { leadsService, LeadFormData } from '@/lib/services';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";

// Form validation schema
const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  education: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

const EarlyAccessForm = () => {
  const { toast } = useToast();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      education: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: LeadFormData) => {
      return leadsService.createLead(values);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for signing up! We will notify you when early access is available.",
      });
      form.reset();
      setIsSubmitSuccessful(true);
    },
    onError: (error) => {
      toast({
        title: "Something went wrong.",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    },
  });

  function onSubmit(values: LeadFormValues) {
    mutation.mutate(values);
  }

  if (isSubmitSuccessful) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You for Signing Up!</h3>
        <p className="text-gray-600 mb-4">We'll notify you when early access becomes available.</p>
        <Button onClick={() => setIsSubmitSuccessful(false)} variant="outline">
          Sign Up Another Person
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} className="text-gray-900" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="10-digit mobile number" {...field} className="text-gray-900" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} className="text-gray-900" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Education Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                <FormControl>
                  <SelectTrigger className="text-gray-900">
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="class9-10">Class 9-10</SelectItem>
                  <SelectItem value="class11-12">Class 11-12</SelectItem>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="parent">I'm a parent</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="pt-2">
          <Button 
            type="submit" 
            className="w-full" 
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Join the Waitlist"
            )}
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 text-center">
          By signing up, you agree to our{" "}
          <a href="/terms" className="text-primary hover:underline">Terms</a>{" "}
          and{" "}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
        </p>
      </form>
    </Form>
  );
};

export default EarlyAccessForm;
