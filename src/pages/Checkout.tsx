
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Checkout = () => {
  const { service } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const serviceInfo = {
    "seo-optimization": {
      title: "SEO Optimization",
      description: "Comprehensive SEO strategy to improve your search rankings",
      priceId: "price_1Rlx64EPJAFaH4xwGYVorI2d",
      displayPrice: "Custom Pricing"
    },
    "web-development": {
      title: "Website Design & Development", 
      description: "Custom website design and development services",
      priceId: "price_1Rlx64EPJAFaH4xwGYVorI2d",
      displayPrice: "Custom Pricing"
    },
    "digital-marketing": {
      title: "Online Marketing",
      description: "Full-service digital marketing campaigns", 
      priceId: "price_1Rlx64EPJAFaH4xwGYVorI2d",
      displayPrice: "Custom Pricing"
    }
  };

  const currentService = serviceInfo[service as keyof typeof serviceInfo];

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          priceId: currentService.priceId,
          successUrl: `${window.location.origin}/payment-success`,
          cancelUrl: `${window.location.origin}/payment-canceled`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
        
        toast({
          title: "Redirecting to Payment",
          description: "Opening secure checkout in a new tab...",
        });
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Details */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">{currentService.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{currentService.description}</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Price:</span>
                    <span className="text-2xl font-bold text-green-600">{currentService.displayPrice}</span>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Professional Service</h4>
                    <p className="text-blue-700 text-sm">
                      Get expert help with your {currentService.title.toLowerCase()} needs. 
                      Secure payment processed through Stripe.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Secure Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">Ready to get started?</h3>
                  <p className="text-gray-600 mb-6">
                    Click below to proceed with secure payment through Stripe.
                  </p>
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={isLoading}
                  className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isLoading ? "Processing..." : `Proceed to Payment`}
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <p>🔒 Secure payment powered by Stripe</p>
                  <p>Your payment information is encrypted and secure</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
