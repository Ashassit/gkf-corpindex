import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Heart, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const API_BASE = "https://chatbot2025gkf.onrender.com/api/adoption"; // <— CHANGE WHEN DEPLOYED

export function AdoptionEnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit enquiry");
      }

      setSuccess(true);
      toast.success("Enquiry submitted successfully!");

      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        setSuccess(false);
      }, 3000);

    } catch (error: any) {
      toast.error("Submission failed", {
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
        <Card className="p-20 max-w-2xl w-full bg-[#111111] border-white/10">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
              <h3 className="text-2xl text-white">Enquiry Submitted Successfully!</h3>
              <p className="text-white/60">
                Thank you for your interest in child adoption. Our team will contact you soon.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] flex items-start justify-center pt-32 pb-12 px-4">
      <Card className="p-8 md:p-16 max-w-2xl w-full bg-[#111111] border-white/10">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-orange-500" />
            <CardTitle className="text-white">Child Adoption Enquiry</CardTitle>
          </div>
          <CardDescription className="text-white/50">Start your journey to provide a loving home</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* GRID INPUTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/70">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/70">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500/50"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email" className="text-white/70">Email *</Label>
                <Input
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500/50"
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div className="space-y-2">
              <Label htmlFor="address" className="text-white/70">Address (optional)</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500/50"
              />
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white/70">Why do you want to adopt? *</Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500/50"
              />
            </div>

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Enquiry"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
