import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Phone, Mail } from 'lucide-react';

interface FreeCaseReviewSuccessProps {
  submissionId?: string;
}

export default function FreeCaseReviewSuccess({ submissionId }: FreeCaseReviewSuccessProps) {
  return (
    <div className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-primary" size={32} />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Thank You for Reaching Out!</CardTitle>
              <CardDescription className="text-base">
                Your case review has been successfully submitted.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-lg">What Happens Next?</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      1
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our legal team will carefully review your case information within the next 24-48 hours.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      2
                    </div>
                    <p className="text-sm text-muted-foreground">
                      One of our experienced agents will reach out to you directly to confirm your eligibility 
                      and discuss your case in detail.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      3
                    </div>
                    <p className="text-sm text-muted-foreground">
                      If your case qualifies, we'll send you the necessary documents and begin fighting for 
                      your maximum compensation—with no upfront costs.
                    </p>
                  </div>
                </div>
              </div>

              {submissionId && (
                <div className="text-center p-4 bg-background rounded-lg border">
                  <p className="text-xs text-muted-foreground mb-1">Reference Number</p>
                  <p className="font-mono text-sm font-semibold">{submissionId}</p>
                </div>
              )}

              <div className="space-y-3 pt-4">
                <p className="text-sm font-medium text-center">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="tel:+1-555-123-4567">
                      <Phone size={16} className="mr-2" />
                      Call Us
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="mailto:contact@sarahlegal.com">
                      <Mail size={16} className="mr-2" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button
                  variant="ghost"
                  onClick={() => window.location.reload()}
                >
                  Submit Another Case Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
