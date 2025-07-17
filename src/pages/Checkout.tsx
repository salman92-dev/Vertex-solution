
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { service } = useParams();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const serviceInfo = {
    "seo-optimization": {
      title: "SEO Optimization",
      description: "Comprehensive SEO strategy to improve your search rankings",
      suggestedPrice: "99"
    },
    "web-development": {
      title: "Website Design & Development",
      description: "Custom website design and development services",
      suggestedPrice: "299"
    },
    "digital-marketing": {
      title: "Online Marketing",
      description: "Full-service digital marketing campaigns",
      suggestedPrice: "199"
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
    if (!amount || parseFloat(amount) < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please enter an amount of at least $1",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, this would integrate with Stripe
      const baseStripeUrl = "https://checkout.stripe.com/pay/cs_test_example#fidkdWxOYHwnPyd1blpxYHZxWjA0S0NKZmZeRz1rTFRUZ212bGp2TVhAfzRnNjxqTkl2czVPazFmYT00YlxUUURdUTRHTmB%2FXUJVNFBRbGNcUUF0T0RkYGN3fjw%2FQnN0YDUxck1MTDU2TUIxbmBibDMzcjRpY18wPGBhfScpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVdeUkk1SXRFWk9xNnZgZGp1Y2UzQFtOPWByTEtgbDU3VE1XaE5%2FYW1NNm1HJyknaWpmYmlgYURkfml2fWxnYGVmdWFhKSdkcGl6K2dkcTZkamxqdWl2fWpsK2BhZ2dkcExuJ21gZ2dkZnFrZytkYWJhZml0fGdsZGFnZGR8aGpsZCdqK2RoZ2BgZGdkZmlwZGxnfGpsZGlsZGNqZ3NoZydeZmYndWJnKSN6YGRfanN2YXdofGQ9YmxjYWxnYStkamJpYWZgKCdkZWp2amV8Z2dqZGlsZycpaWdkdWNiaGZ8dWZsYWNhZ2RpYGBhYWdn";
      const stripeCheckoutUrl = `${baseStripeUrl}?amount=${Math.round(parseFloat(amount) * 100)}`;
      
      // Open Stripe checkout in a new tab
      window.open(stripeCheckoutUrl, '_blank');
      
      toast({
        title: "Redirecting to Payment",
        description: "Opening secure checkout in a new tab...",
      });
      
    } catch (error) {
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
                    <span className="text-gray-700">Suggested Price:</span>
                    <span className="text-2xl font-bold text-green-600">${currentService.suggestedPrice}</span>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Pay What You Want</h4>
                    <p className="text-blue-700 text-sm">
                      We believe in fair pricing. Pay what you think our service is worth to you. 
                      Minimum payment is $1.
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
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="amount" className="text-base font-medium">
                    How much would you like to pay? (USD)
                  </Label>
                  <div className="mt-2 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-lg">$</span>
                    </div>
                    <Input
                      id="amount"
                      type="number"
                      min="1"
                      step="0.01"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-8 text-lg h-12"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Minimum amount is $1.00
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    onClick={() => setAmount(currentService.suggestedPrice)}
                    className="w-full"
                  >
                    Use Suggested Price (${currentService.suggestedPrice})
                  </Button>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" onClick={() => setAmount("50")} size="sm">
                      $50
                    </Button>
                    <Button variant="outline" onClick={() => setAmount("100")} size="sm">
                      $100
                    </Button>
                    <Button variant="outline" onClick={() => setAmount("200")} size="sm">
                      $200
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={!amount || parseFloat(amount) < 1 || isLoading}
                  className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isLoading ? "Processing..." : `Pay $${amount || "0.00"} Now`}
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <p>Secure payment powered by Stripe</p>
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
