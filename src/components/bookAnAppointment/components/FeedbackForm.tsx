import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { toast } from "sonner";

export function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast.success("Feedback submitted successfully!");
    console.log("Feedback form data:", formData);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      subject: "",
      message: "",
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
            <CardTitle>Feedback Form</CardTitle>
            <CardDescription>
              We value your feedback. Please share your thoughts, suggestions, or concerns with us.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Feedback Category *</Label>
                <Select
                  required
                  value={formData.category}
                  onValueChange={(value) => handleChange("category", value)}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Feedback</SelectItem>
                    <SelectItem value="service">Service Quality</SelectItem>
                    <SelectItem value="facility">Facility Feedback</SelectItem>
                    <SelectItem value="staff">Staff Interaction</SelectItem>
                    <SelectItem value="suggestion">Suggestion</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  placeholder="Brief subject of your feedback"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Feedback *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Please provide detailed feedback..."
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full mb-10">
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
