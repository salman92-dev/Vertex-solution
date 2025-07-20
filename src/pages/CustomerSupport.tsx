import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, Clock, Users, Shield } from "lucide-react";

const CustomerSupport = () => {
  const supportChannels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email within 24 hours",
      contact: "support@vertexsolutions.com",
      availability: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+1 (606) 658-8085",
      availability: "Mon-Fri, 9AM-6PM CST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Real-time assistance for immediate help",
      contact: "Available on our website",
      availability: "Mon-Fri, 9AM-6PM CST"
    }
  ];

  const faqItems = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Most websites take 2-4 weeks, while comprehensive SEO campaigns show results in 3-6 months."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer maintenance packages to keep your website updated, secure, and performing optimally."
    },
    {
      question: "What's included in your SEO services?",
      answer: "Our SEO services include keyword research, on-page optimization, technical SEO, content strategy, and monthly performance reports."
    },
    {
      question: "Can you help with e-commerce websites?",
      answer: "Absolutely! We specialize in creating custom e-commerce solutions that drive sales and provide excellent user experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Customer Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help you succeed. Get expert assistance with your digital marketing needs.
            </p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Choose the support channel that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <channel.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>{channel.title}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-primary mb-2">{channel.contact}</p>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {channel.availability}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-8">
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Promise */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Support Promise</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're committed to your success. Our team provides expert guidance, 
              timely responses, and ongoing support to help your business thrive online.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Contact Support Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CustomerSupport;