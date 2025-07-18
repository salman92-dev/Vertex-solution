import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import jsPDF from "jspdf";
import { useState, useEffect } from "react";

type StripeSession = {
  status: string;
  amount_total: number;
  customer_email?: string;
  id: string;
};

const PaymentSuccess = () => {
  const [session, setSession] = useState<StripeSession | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    console.log("🔍 Session ID:", sessionId);

    if (sessionId) {
      fetch(
        `https://zuxbimazfoyuikecuqtp.supabase.co/functions/v1/smart-worker?session_id=${sessionId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1eGJpbWF6Zm95dWlrZWN1cXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3ODIyNzcsImV4cCI6MjA2ODM1ODI3N30.DsiGRTjFmX3hduZBw-8tWFAQg8gWEdcqza7-GS3pGGU`
          }
        }
      )
        .then((res) => {
          console.log("🔍 Raw response:", res);
          return res.json();
        })
        .then((data) => {
          console.log("✅ Session JSON:", data);
          setSession(data);
        })
        .catch((err) => console.error("❌ Fetch error:", err));
    } else {
      console.warn("⚠️ No session_id found in URL");
    }
  }, []);

const handleDownloadReceipt = () => {
  if (!session) return;

  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Receipt for Payment", 20, 20);
  doc.setFontSize(12);
  doc.text(`Session ID: ${session.id}`, 20, 40);
  doc.text(`Status: ${session.status}`, 20, 50);
  doc.text(`Amount Paid: $${(session.amount_total / 100).toFixed(2)}`, 20, 60);

  doc.save(`receipt_${session.id}.pdf`);
};

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading payment details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Payment {session.status}d
            </h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Amount Paid: ${(session.amount_total / 100).toFixed(2)}
            </h2>
              <p className="text-lg text-gray-700 mb-4">
                Customer Name: {session.customer_details.name }
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Customer Email: {session.customer_details.email }
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Country: {session.customer_details.address.country }
              </p>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for choosing DigitalPro. Your payment has been processed successfully.
            </p>

            <Card className="max-w-2xl mx-auto mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  What Happens Next?
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Confirmation Email</h3>
                      <p className="text-gray-600">
                        You'll receive a confirmation email with your receipt and project details.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Project Kickoff</h3>
                      <p className="text-gray-600">
                        Our team will contact you within 24 hours to schedule your project discussion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Project Delivery</h3>
                      <p className="text-gray-600">
                        We'll keep you updated throughout the process and deliver exceptional results.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleDownloadReceipt}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Receipt
              </Button>
              <Link to="/">
                <Button size="lg" variant="outline">
                  Back to Home <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help or Have Questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Our support team is here to help you with any questions about your purchase or project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="outline">Contact Support</Button>
                </Link>
                <Button variant="outline">Call +1 (555) 123-4567</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
