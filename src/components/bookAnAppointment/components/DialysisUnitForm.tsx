import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { toast } from "sonner";

export function DialysisUnitForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    referringPhysician: "",
    currentlyOnDialysis: "",
    preferredContactTime: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received! Our team will contact you within 24 hours.");
    console.log("Patient dialysis application:", formData);
    
    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      city: "",
      referringPhysician: "",
      currentlyOnDialysis: "",
      preferredContactTime: "",
      additionalInfo: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pl-20 pr-20  pt-40 bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Dialysis Services - Patient Registration</CardTitle>
            <CardDescription>
              Register for dialysis services. Our team will call you to discuss your needs and guide you through the process.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  placeholder="Your city"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="referringPhysician">Referring Physician Name</Label>
                <Input
                  id="referringPhysician"
                  type="text"
                  value={formData.referringPhysician}
                  onChange={(e) => handleChange("referringPhysician", e.target.value)}
                  placeholder="Dr. John Smith (optional)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentlyOnDialysis">Are you currently on dialysis? *</Label>
                <Select
                  required
                  value={formData.currentlyOnDialysis}
                  onValueChange={(value) => handleChange("currentlyOnDialysis", value)}
                >
                  <SelectTrigger id="currentlyOnDialysis">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No - New to dialysis</SelectItem>
                    <SelectItem value="scheduled">Scheduled to start soon</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredContactTime">Preferred Time to Contact You *</Label>
                <Select
                  required
                  value={formData.preferredContactTime}
                  onValueChange={(value) => handleChange("preferredContactTime", value)}
                >
                  <SelectTrigger id="preferredContactTime">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleChange("additionalInfo", e.target.value)}
                  placeholder="Any questions or additional information you'd like to share..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full mb-10">
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
