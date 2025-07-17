
import { ExternalLink, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Fashion Store",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete e-commerce solution with custom design, payment integration, and inventory management.",
      results: [
        { metric: "Conversion Rate", value: "+150%" },
        { metric: "Page Speed", value: "95/100" },
        { metric: "Mobile Users", value: "+200%" }
      ],
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Local Restaurant Chain",
      category: "SEO + Marketing",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "SEO optimization and local marketing campaign for a restaurant chain with 5 locations.",
      results: [
        { metric: "Organic Traffic", value: "+300%" },
        { metric: "Local Rankings", value: "#1 Position" },
        { metric: "Online Orders", value: "+250%" }
      ],
      technologies: ["SEO", "Google Ads", "Social Media", "Local SEO"],
      link: "#"
    },
    {
      id: 3,
      title: "Tech Startup Platform",
      category: "Full Stack Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "SaaS platform development with user authentication, payment processing, and analytics dashboard.",
      results: [
        { metric: "User Growth", value: "+500%" },
        { metric: "App Performance", value: "99.9% Uptime" },
        { metric: "User Engagement", value: "+180%" }
      ],
      technologies: ["Next.js", "Python", "PostgreSQL", "AWS"],
      link: "#"
    },
    {
      id: 4,
      title: "Healthcare Practice",
      category: "SEO + Web Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional website redesign and SEO campaign for a medical practice.",
      results: [
        { metric: "Patient Inquiries", value: "+400%" },
        { metric: "Search Rankings", value: "Top 3" },
        { metric: "Website Speed", value: "+300%" }
      ],
      technologies: ["WordPress", "SEO", "HIPAA Compliance", "Analytics"],
      link: "#"
    },
    {
      id: 5,
      title: "B2B Software Company",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive digital marketing strategy including content marketing, PPC, and lead generation.",
      results: [
        { metric: "Qualified Leads", value: "+350%" },
        { metric: "Cost Per Lead", value: "-60%" },
        { metric: "Revenue Growth", value: "+200%" }
      ],
      technologies: ["Google Ads", "LinkedIn Ads", "HubSpot", "Content Marketing"],
      link: "#"
    },
    {
      id: 6,
      title: "Real Estate Agency",
      category: "Web Development + SEO",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Custom property listing website with advanced search functionality and lead capture.",
      results: [
        { metric: "Property Views", value: "+280%" },
        { metric: "Lead Generation", value: "+320%" },
        { metric: "Search Visibility", value: "+250%" }
      ],
      technologies: ["React", "Node.js", "MLS Integration", "Google Maps API"],
      link: "#"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Projects Completed" },
    { icon: TrendingUp, number: "250%", label: "Average Growth" },
    { icon: Clock, number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses like yours achieve remarkable digital success
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results for real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 hover:bg-blue-700">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Results:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{result.metric}:</span>
                          <span className="font-semibold text-green-600">{result.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <Button 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all"
                    variant="outline"
                  >
                    View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "The results exceeded our expectations. Our online sales increased by 300% within 6 months."
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-500">CEO, Fashion Boutique</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Professional team, excellent communication, and delivered on time. Highly recommended!"
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                  <div className="text-gray-500">Owner, Local Restaurant</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Their SEO expertise helped us dominate our local market. We're now the #1 choice in our area."
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Emily Chen</div>
                  <div className="text-gray-500">Healthcare Practice</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve similar results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
