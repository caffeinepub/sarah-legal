import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle } from 'lucide-react';
import { useCreateFreeCaseReview } from '@/hooks/useCreateFreeCaseReview';
import FreeCaseReviewSuccess from './FreeCaseReviewSuccess';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { primaryCtaClasses } from './ctaButtonClasses';

const caseTypes = [
  'Personal Injury',
  'Product Liability',
  'Dangerous Drugs',
  'Medical Devices',
  'Sexual Abuse',
];

export default function FreeCaseReviewSection() {
  const { ref, isRevealed } = useScrollReveal();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    caseType: '',
    description: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: createReview, isPending, isSuccess, isError, error, data: submissionId } = useCreateFreeCaseReview();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.caseType) {
      newErrors.caseType = 'Please select a case type';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your case';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms to submit';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    createReview(formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (isSuccess) {
    return <FreeCaseReviewSuccess submissionId={submissionId} />;
  }

  return (
    <div className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Free Case Review
            </h2>
            <p className="text-lg text-muted-foreground">
              Take the first step toward justice. Complete this short form and our team will 
              review your case to determine if you may qualify for compensation.
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Tell Us About Your Case</CardTitle>
              <CardDescription>
                All information is confidential and protected. Fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {isError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      {error instanceof Error ? error.message : 'An error occurred while submitting your case review. Please try again.'}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={errors.fullName ? 'border-destructive' : ''}
                    disabled={isPending}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-destructive' : ''}
                      disabled={isPending}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={errors.phone ? 'border-destructive' : ''}
                      disabled={isPending}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="caseType">Case Type *</Label>
                  <Select
                    value={formData.caseType}
                    onValueChange={(value) => handleInputChange('caseType', value)}
                    disabled={isPending}
                  >
                    <SelectTrigger id="caseType" className={errors.caseType ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select the type of case" />
                    </SelectTrigger>
                    <SelectContent>
                      {caseTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.caseType && (
                    <p className="text-sm text-destructive">{errors.caseType}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Brief Description of Your Case *</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide a brief description of what happened and any injuries or damages you suffered..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className={errors.description ? 'border-destructive' : ''}
                    rows={5}
                    disabled={isPending}
                  />
                  {errors.description && (
                    <p className="text-sm text-destructive">{errors.description}</p>
                  )}
                </div>

                <div className="space-y-4 p-4 bg-muted/50 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange('consent', checked === true)}
                      disabled={isPending}
                      className={errors.consent ? 'border-destructive' : ''}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                        I agree to the terms and conditions *
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        By submitting this form, you agree to be contacted by Sarah Legal regarding your case. 
                        Your information will be kept confidential and used solely for case evaluation purposes.
                      </p>
                    </div>
                  </div>
                  {errors.consent && (
                    <p className="text-sm text-destructive">{errors.consent}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className={`w-full ${primaryCtaClasses}`}
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Free Case Review'
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Your information is secure and will never be shared with third parties without your consent.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
