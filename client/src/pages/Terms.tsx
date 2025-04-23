import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last Updated: January 1, 2023
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto prose prose-headings:font-heading prose-headings:font-semibold">
            <p>
              Please read these Terms of Service ("Terms") carefully before using the AI Career Architect website or mobile application operated by AI Career Architect ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the service.
            </p>
            <p>
              By accessing or using the service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
            </p>

            <h2>Use of Service</h2>
            <p>
              AI Career Architect provides an AI-powered career guidance platform that offers personalized recommendations based on user inputs. By using our service, you understand and agree that:
            </p>
            <ul>
              <li>The recommendations provided are for informational purposes only and should not be considered as professional career counseling.</li>
              <li>We do not guarantee specific career outcomes or job placements.</li>
              <li>You are responsible for verifying the accuracy of information provided through our platform with appropriate educational institutions and professional organizations.</li>
            </ul>

            <h2>Account Registration</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive property of AI Career Architect and its licensors. The service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AI Career Architect.
            </p>

            <h2>User Content</h2>
            <p>
              Our service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, or other material. You are responsible for the content you post, and you grant AI Career Architect a license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall AI Career Architect, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the service;</li>
              <li>Any conduct or content of any third party on the service;</li>
              <li>Any content obtained from the service; and</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
            </ul>

            <h2>Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: support@aicareerarchitect.com<br />
              Phone: +91 9876543210
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-light">
        <div className="container mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join AI Career Architect and discover the perfect career path with personalized AI-powered guidance.
          </p>
          <Link href="/#early-access">
            <Button variant="default">Get Early Access</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Terms;
