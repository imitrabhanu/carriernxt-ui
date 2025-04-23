import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last Updated: January 1, 2023
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto prose prose-headings:font-heading prose-headings:font-semibold">
            <p>
              At AI Career Architect, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect information about you in various ways:
            </p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, and education details that you voluntarily provide when registering or signing up for our services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information on how you access and use our services, including your device type, browser type, IP address, and pages visited.
              </li>
              <li>
                <strong>Assessment Data:</strong> Responses to career assessments, surveys, and questionnaires that help us provide personalized recommendations.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>The information we collect may be used for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To personalize your experience and deliver content relevant to your interests</li>
              <li>To improve our website and app</li>
              <li>To communicate with you about updates, promotions, and news</li>
              <li>To analyze usage patterns and improve our algorithms</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as described below:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information where required by law or if we believe that disclosure is necessary to protect our rights or comply with a judicial proceeding.
              </li>
            </ul>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul>
              <li>The right to access the personal data we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to restrict or object to our processing of your data</li>
              <li>The right to data portability</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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
            Have Questions About Our Privacy Practices?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you have any concerns or questions about how we handle your data, we're here to help.
          </p>
          <Link href="/contact">
            <Button variant="default">Contact Us</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
