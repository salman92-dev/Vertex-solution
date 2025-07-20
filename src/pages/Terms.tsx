import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const getCurrentDate = (): string => {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const Terms = () => {
  const termsSections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using DigitalPro services, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "Service Description",
      content: "DigitalPro provides digital marketing services including but not limited to website development, social media management, SEO optimization, and digital advertising solutions."
    },
    {
      title: "User Obligations",
      content: "Users must provide accurate information, comply with applicable laws, and not engage in any activity that could harm our services or other users."
    },
    {
      title: "Payment Terms",
      content: "Payment for services is due according to the agreed schedule. Late payments may result in service suspension. All fees are non-refundable unless otherwise specified."
    },
    {
      title: "Intellectual Property",
      content: "All content, trademarks, and intellectual property on this website remain the property of DigitalPro unless otherwise specified. Users retain rights to their own content."
    },
    {
      title: "Service Availability",
      content: "We strive to maintain service availability but cannot guarantee uninterrupted access. Scheduled maintenance will be communicated in advance when possible."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Please read these terms carefully before using our services
          </p>
          <p className="text-white/80">
            Last updated: {getCurrentDate()}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {termsSections.map((section, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Important Terms */}
          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DigitalPro shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our total liability shall not exceed the amount paid by the client for the specific service in question.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate services with appropriate notice as specified in individual service agreements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination, all rights and obligations shall cease except those which by their nature should survive termination.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes will be resolved through appropriate legal channels.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or website notification.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: Brandonshawnwheatt@gmail.com</p>
                <p>Phone: +1 (606) 6588085</p>
                <p>3118 SW 15TH AVE APT 44 AMARILLO ,TX 79108</p>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;