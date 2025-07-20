import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Users, FileText } from "lucide-react";

const Privacy = () => {
  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const privacySections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, phone number)",
        "Website usage data and analytics",
        "Communication preferences and history",
        "Technical information (IP address, browser type, device information)"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our services",
        "Communicate with you about projects and updates",
        "Send marketing materials (with your consent)",
        "Analyze website performance and user experience"
      ]
    },
    {
      icon: Lock,
      title: "Information Security",
      content: [
        "Industry-standard encryption for data transmission",
        "Secure servers and regular security audits",
        "Access controls and employee confidentiality agreements",
        "Regular backups and disaster recovery procedures"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Limited sharing with trusted service providers",
        "Legal compliance when required by law",
        "Business transfers (mergers, acquisitions) with notice"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {getCurrentDate()}
            </p>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {privacySections.map((section, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <section.icon className="h-8 w-8 text-primary mr-3" />
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Detailed Privacy Information</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-primary" />
                    Cookies and Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We use cookies and similar technologies to enhance your browsing experience, 
                    analyze site traffic, and understand where our audience is coming from. You can 
                    control cookie settings through your browser preferences.
                  </p>
                  <p className="text-muted-foreground">
                    We may use Google Analytics and other analytics services to understand how 
                    visitors interact with our website. This helps us improve our services and 
                    provide better user experiences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-3 text-primary" />
                    Your Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">You have the right to:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Access and update your personal information
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Request deletion of your data
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Opt-out of marketing communications
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Request a copy of your data
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="h-6 w-6 mr-3 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about this Privacy Policy or want to exercise your rights, 
                    please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> privacy@vertexsolutions.com</p>
                    <p><strong>Phone:</strong> +1 (606) 658-8085</p>
                    <p><strong>Address:</strong> 3118 SW 15TH AVE APT 44 AMARILLO ,TX 79108</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Policy Updates</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the new policy on this page and updating the 
              "Last updated" date above.
            </p>
            <p className="text-muted-foreground">
              We encourage you to review this Privacy Policy periodically to stay informed 
              about how we protect your information.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;