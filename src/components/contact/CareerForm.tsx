import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Upload } from 'lucide-react';

export function CareerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    country: '',
    message: '',
  });
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Training and Career form submitted successfully!');
    console.log('Career Form:', formData);
  };

  return (
    <div className="bg-[#111111] p-8 rounded-lg border border-white/10">
      <h2 className="text-white mb-2">Training and Career</h2>
      <p className="text-white/50 mb-6">Build Your Career With Us!</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="career-name" className="text-white/70">
            Name <span className="text-orange-500">*</span>
          </Label>
          <Input
            id="career-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="career-email" className="text-white/70">
            Email <span className="text-orange-500">*</span>
          </Label>
          <Input
            id="career-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="career-phone" className="text-white/70">
            Phone Number <span className="text-orange-500">*</span>
          </Label>
          <Input
            id="career-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="career-address" className="text-white/70">
            Address <span className="text-orange-500">*</span>
          </Label>
          <Input
            id="career-address"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="career-state" className="text-white/70">
              State <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="career-state"
              required
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="career-country" className="text-white/70">
              Country <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="career-country"
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="resume" className="text-white/70">Upload Resume</Label>
          <div className="flex items-center gap-4">
            <label 
              htmlFor="resume" 
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 cursor-pointer transition-colors"
            >
              <Upload className="w-4 h-4" />
              Choose File
            </label>
            <span className="text-sm text-white/50">
              {fileName || 'No file chosen'}
            </span>
            <input
              id="resume"
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
          </div>
          <p className="text-sm text-white/40">Max. file size: 256 MB.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="career-message" className="text-white/70">Message</Label>
          <Textarea
            id="career-message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 min-h-[120px]"
          />
        </div>

        <div className="p-4 bg-white/5 rounded-md border border-white/10">
          <p className="text-sm text-white/40">hCaptcha verification would appear here</p>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        >
          Submit Application
        </Button>
      </form>
    </div>
  );
}
