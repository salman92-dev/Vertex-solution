
import { Link } from "react-router-dom";
import { Search, Code, TrendingUp, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      id: "seo-optimization",
      icon: Search,
      title: "SEO Optimization",
      subtitle: "Dominate Search Results",
      description: "Our comprehensive SEO strategies help your website rank higher in search engines, driving more organic traffic and qualified leads to your business.",
      features: [
        "Complete SEO Audit & Analysis",
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Implementation",
        "Content Optimization",
        "Link Building & Authority Building",
        "Local SEO (if applicable)",
        "Monthly Performance Reports"
      ],
      benefits: [
        "Increase organic website traffic",
        "Improve search engine rankings",
        "Generate more qualified leads",
        "Build brand authority and trust",
        "Long-term sustainable growth"
      ],
      pricing: "Starting from $99/month"
    },
    {
      id: "web-development",
      icon: Code,
      title: "Website Design & Development",
      subtitle: "Beautiful, Functional Websites",
      description: "We create stunning, responsive websites that not only look amazing but also convert visitors into customers with optimized user experience and performance.",
      features: [
        "Custom Website Design",
        "Responsive Mobile-First Development",
        "Content Management System (CMS)",
        "E-commerce Integration",
        "Payment Gateway Setup",
        "SEO-Optimized Code Structure",
        "Speed & Performance Optimization",
        "SSL Certificate & Security Setup"
      ],
      benefits: [
        "Professional brand representation",
        "Improved user engagement",
        "Higher conversion rates",
        "Mobile-friendly experience",
        "Fast loading speeds"
      ],
      pricing: "Starting from $299 one-time"
    },
    {
      id: "digital-marketing",
      icon: TrendingUp,
      title: "Online Marketing",
      subtitle: "Comprehensive Digital Strategy",
      description: "Our full-service digital marketing approach combines multiple channels to maximize your online presence, reach your target audience, and grow your business.",
      features: [
        "Social Media Marketing & Management",
        "Pay-Per-Click (PPC) Advertising",
        "Email Marketing Campaigns",
        "Content Marketing Strategy",
        "Conversion Rate Optimization",
        "Analytics & Performance Tracking",
        "Brand Strategy & Positioning",
        "Marketing Automation Setup"
      ],
      benefits: [
        "Increased brand awareness",
        "Better customer engagement",
        "Higher ROI on marketing spend",
        "Targeted audience reach",
        "Data-driven decision making"
      ],
      pricing: "Starting from $199/month"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to help your business succeed online
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={service.id} className={`mb-20 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
              <div className={`${index % 2 === 1 ? 'py-16' : ''}`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mr-4">
                        <service.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                        <p className="text-lg text-blue-600 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="text-2xl font-bold text-gray-900 mb-4">{service.pricing}</div>
                      <Link to={`/checkout/${service.id}`}>
                        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Buy Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Benefits Card */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="shadow-xl border-0">
                      <CardHeader>
                        <CardTitle className="text-2xl text-center">Key Benefits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                              <span className="text-gray-700 text-lg">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your goals and create a custom strategy that fits your business
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
