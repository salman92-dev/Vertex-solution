
import { Link } from "react-router-dom";
import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PaymentCanceled = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Payment Canceled
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your payment was canceled and no charges were made to your account.
            </p>

            <Card className="max-w-2xl mx-auto mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  What Would You Like to Do?
                </h2>
                
                <div className="space-y-6">
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-2">Try Again</h3>
                    <p className="text-gray-600 mb-4">
                      Ready to continue with your purchase? You can try the payment process again.
                    </p>
                    <Link to="/services">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Try Payment Again
                      </Button>
                    </Link>
                  </div>

                  <div className="border-t pt-6 text-left">
                    <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                    <p className="text-gray-600 mb-4">
                      If you're experiencing issues with the payment process, our support team is here to help.
                    </p>
                    <Link to="/contact">
                      <Button variant="outline">
                        Contact Support
                      </Button>
                    </Link>
                  </div>

                  <div className="border-t pt-6 text-left">
                    <h3 className="font-semibold text-gray-900 mb-2">Have Questions?</h3>
                    <p className="text-gray-600 mb-4">
                      Want to learn more about our services before making a purchase? We'd be happy to discuss your needs.
                    </p>
                    <Button variant="outline">
                      Schedule Free Consultation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/services">
                <Button size="lg" variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline">
                  Go to Homepage
                </Button>
              </Link>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Common Payment Issues
              </h3>
              <div className="text-left space-y-2 text-gray-600">
                <p>• Check if your payment method has sufficient funds</p>
                <p>• Ensure your billing information matches your card details</p>
                <p>• Try using a different payment method</p>
                <p>• Contact your bank if the issue persists</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentCanceled;
