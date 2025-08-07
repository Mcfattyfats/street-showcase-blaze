
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'visitor' | 'exhibitor';
  onSwitchType: (type: 'visitor' | 'exhibitor') => void;
}

const RegistrationModal = ({ isOpen, onClose, type, onSwitchType }: RegistrationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    company: '',
    description: '',
    instagram: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';

    if (type === 'exhibitor') {
      if (!formData.company.trim()) newErrors.company = 'Company name is required';
      if (!formData.description.trim()) newErrors.description = 'Product description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', { type, formData });
      // Here you would typically send the data to your backend
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        company: '',
        description: '',
        instagram: ''
      });
      setErrors({});
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-semibold heading">
            {type === 'visitor' ? 'Register as Visitor' : 'Exhibitor Application'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-muted transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Type Toggle */}
        <div className="p-6 pb-0">
          <div className="flex rounded-lg bg-muted p-1 mb-6">
            <button
              onClick={() => onSwitchType('visitor')}
              className={`flex-1 py-2 px-4 rounded-md transition-all ${
                type === 'visitor' 
                  ? 'bg-background shadow-sm' 
                  : 'hover:bg-background/50'
              }`}
            >
              Visitor
            </button>
            <button
              onClick={() => onSwitchType('exhibitor')}
              className={`flex-1 py-2 px-4 rounded-md transition-all ${
                type === 'exhibitor' 
                  ? 'bg-background shadow-sm' 
                  : 'hover:bg-background/50'
              }`}
            >
              Exhibitor
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Common Fields */}
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
            />
          </div>

          {/* Visitor Specific Fields */}
          {type === 'visitor' && (
            <div className="space-y-2">
              <Label htmlFor="interest">Interest</Label>
              <Select value={formData.interest} onValueChange={(value) => updateField('interest', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your main interest" />
                </SelectTrigger>
                <SelectContent className="bg-background border z-50">
                  <SelectItem value="food">Food & Tasting</SelectItem>
                  <SelectItem value="shopping">Shopping & Artisans</SelectItem>
                  <SelectItem value="learning">Learning & Workshops</SelectItem>
                  <SelectItem value="networking">Networking</SelectItem>
                  <SelectItem value="all">All of the above</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Exhibitor Specific Fields */}
          {type === 'exhibitor' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  className={errors.company ? 'border-destructive' : ''}
                />
                {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Product Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  placeholder="Describe your products or services..."
                  className={`min-h-[100px] ${errors.description ? 'border-destructive' : ''}`}
                />
                {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram Handle</Label>
                <Input
                  id="instagram"
                  value={formData.instagram}
                  onChange={(e) => updateField('instagram', e.target.value)}
                  placeholder="@yourhandle"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full btn-primary">
            {type === 'visitor' ? 'Register' : 'Submit Application'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
