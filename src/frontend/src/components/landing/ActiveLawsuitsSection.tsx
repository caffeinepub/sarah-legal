import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { primaryCtaClasses } from './ctaButtonClasses';

const activeLawsuits = [
  'Paraquat Lawsuit',
  'Bard Powerport Lawsuit',
  'Rideshare Lawsuit',
  'Social Media Addiction Lawsuit',
  'Online Gambling Addiction Lawsuit',
  'LDS Church Abuse Lawsuit',
  'Depo Provera Lawsuit',
];

export default function ActiveLawsuitsSection() {
  const { ref, isRevealed } = useScrollReveal();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              Active Lawsuits
            </h2>
            <p className="text-lg text-muted-foreground">
              We are currently accepting cases for the following active lawsuits. 
              If you or a loved one has been affected, contact us today for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activeLawsuits.map((lawsuit, index) => (
              <Card
                key={lawsuit}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg"
                style={{
                  transitionDelay: isRevealed ? `${index * 50}ms` : '0ms',
                }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Scale className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{lawsuit}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button onClick={scrollToContact} className={`w-full ${primaryCtaClasses}`}>
                    Get Your Free Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
