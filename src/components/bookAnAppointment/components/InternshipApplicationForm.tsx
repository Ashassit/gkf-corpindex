import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { GraduationCap, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const API_BASE = "https://chatbot2025gkf.onrender.com/api/internship"; // <— UPDATE WHEN DEPLOYING

export function InternshipApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    programType: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
        throw new Error(data.message || "Unable to submit application");
      }

      setSuccess(true);
      toast.success("Application submitted successfully!");

      setTimeout(() => {
        setFormData({
          name: "",
          age: "",
          phone: "",
          programType: "",
        });
        setSuccess(false);
      }, 3000);
    } catch (error: any) {
      toast.error("Failed to submit application", {
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
              <h3 className="text-2xl text-white">Application Submitted Successfully!</h3>
              <p className="text-white/60">
                Thank you for your interest! Our team will contact you soon.
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
            <GraduationCap className="w-6 h-6 text-orange-500" />
            <CardTitle className="text-white">Internship / Volunteering Application</CardTitle>
          </div>
          <CardDescription className="text-white/50">
            Apply for opportunities at our hospital
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

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
                <Label htmlFor="age" className="text-white/70">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
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
                <Label className="text-white/70">Applying For *</Label>
                <Select
                  value={formData.programType}
                  onValueChange={(value) => handleChange("programType", value)}
                  required
                >
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select Program Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                    <SelectItem value="internship" className="text-white focus:bg-white/10 focus:text-white">Internship</SelectItem>
                    <SelectItem value="volunteering" className="text-white focus:bg-white/10 focus:text-white">Volunteering</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
