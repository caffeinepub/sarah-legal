import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Phone, FileSignature } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Contact Us',
    description: 'Reach out to us to help us understand your situation. We\'ll review your information to determine if your case could qualify for possible compensation. This initial consultation is completely free with no obligation.',
  },
  {
    number: 2,
    icon: Phone,
    title: 'Eligibility Confirmation',
    description: 'One of our experienced legal agents will reach out to you directly to discuss your case in detail and confirm your eligibility. We\'ll answer any questions you have about the process and next steps.',
  },
  {
    number: 3,
    icon: FileSignature,
    title: 'We Fight For You',
    description: 'After you sign the necessary documents from our firm, we immediately begin fighting for maximum compensation on your behalf. Remember, there are no upfront costs—we only get paid if you win your case.',
  },
];

export default function HowItWorksSection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Getting started is simple. Our streamlined three-step process makes it easy 
              to begin your journey toward justice and compensation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="text-primary" size={28} />
                        </div>
                        <Badge variant="outline" className="text-lg font-bold px-3 py-1">
                          {step.number}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 -translate-y-1/2 z-10" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
              <span className="text-2xl">💰</span>
              <span>No Upfront Costs • No Fees Unless We Win</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
