import ContactForm from "@/components/ContactForm";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/constants";

const Contact = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Have questions or feedback? Reach out to our team and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600">{contactInfo.email}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-4">
                  <MessageSquare size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="text-gray-600">{contactInfo.whatsapp}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Location</h3>
                <p className="text-gray-600">{contactInfo.location}</p>
              </div>
            </div>

            <div className="bg-light rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="font-heading font-semibold text-xl mb-6 text-center">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  When will the AI Career Architect app be launched?
                </h3>
                <p className="text-gray-600">
                  We're planning to launch the early access version in Q1 2024. Join our waitlist to be notified when it's available.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Will the app be available in my regional language?
                </h3>
                <p className="text-gray-600">
                  Yes! We're launching with Hindi and English support, with plans to add Tamil, Telugu, Bengali, and other regional languages soon after.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Is the app free to use?
                </h3>
                <p className="text-gray-600">
                  The basic features of AI Career Architect will be free for all users. We'll also offer premium features for advanced career planning and personalized guidance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  How accurate are the AI recommendations?
                </h3>
                <p className="text-gray-600">
                  Our AI model is trained on comprehensive career data specific to the Indian context. While no AI is perfect, our recommendations are designed to provide valuable insights based on your unique profile and are continually improving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
