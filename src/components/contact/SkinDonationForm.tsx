import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { toast } from 'sonner';

export function SkinDonationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    date: '',
    address: '',
    tel: '',
    mob: '',
    nextOfKinName: '',
    nextOfKinAddress: '',
    nextOfKinTel: '',
    nextOfKinMob: '',
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      toast.error('Please agree to the pledge terms');
      return;
    }
    toast.success('Skin Donation Pledge Form submitted successfully!');
    console.log('Skin Donation Form:', formData);
  };

  return (
    <div className="bg-[#111111] p-8 rounded-lg border border-white/10">
      <h2 className="text-white mb-6">Skin Donation Pledge Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white/70">
            Name <span className="text-orange-500">*</span>
          </Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/70">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="flex items-start space-x-2 p-4 bg-orange-500/10 rounded-md border border-orange-500/20">
          <Checkbox
            id="agree"
            checked={formData.agreed}
            onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
            className="border-orange-500 data-[state=checked]:bg-orange-500"
          />
          <Label htmlFor="agree" className="text-gray-800 cursor-pointer">
            I agree to PLEDGE my SKIN, by Donating my SKIN after my Death. I grant permission for the recovery of my SKIN for purposes of Transplantation and Research. <span className="text-orange-500">*</span>
          </Label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="age" className="text-white/70">
              Age <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="age"
              type="number"
              required
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-white/70">
              Date <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="date"
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address" className="text-white/70">
            Address <span className="text-orange-500">*</span>
          </Label>
          <Input
            id="address"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="tel" className="text-white/70">Tel</Label>
            <Input
              id="tel"
              type="tel"
              value={formData.tel}
              onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
              className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mob" className="text-white/70">
              Mobile <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="mob"
              type="tel"
              required
              value={formData.mob}
              onChange={(e) => setFormData({ ...formData, mob: e.target.value })}
              className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <h3 className="text-white mb-4">Next of Kin Information</h3>
          <p className="text-sm text-white/50 mb-4">
            * Next of kin need to be a close relative, over 18 years of age
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nextOfKinName" className="text-white/70">
                Name of next of Kin <span className="text-orange-500">*</span>
              </Label>
              <Input
                id="nextOfKinName"
                required
                value={formData.nextOfKinName}
                onChange={(e) => setFormData({ ...formData, nextOfKinName: e.target.value })}
                className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nextOfKinAddress" className="text-white/70">
                Address of next of Kin <span className="text-orange-500">*</span>
              </Label>
              <Input
                id="nextOfKinAddress"
                required
                value={formData.nextOfKinAddress}
                onChange={(e) => setFormData({ ...formData, nextOfKinAddress: e.target.value })}
                className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nextOfKinTel" className="text-white/70">
                  Tel <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="nextOfKinTel"
                  type="tel"
                  required
                  value={formData.nextOfKinTel}
                  onChange={(e) => setFormData({ ...formData, nextOfKinTel: e.target.value })}
                  className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nextOfKinMob" className="text-white/70">
                  Mobile <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="nextOfKinMob"
                  type="tel"
                  required
                  value={formData.nextOfKinMob}
                  onChange={(e) => setFormData({ ...formData, nextOfKinMob: e.target.value })}
                  className="border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        >
          Submit Pledge
        </Button>
      </form>
    </div>
  );
}
