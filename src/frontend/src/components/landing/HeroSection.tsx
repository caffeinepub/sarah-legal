import { Button } from '@/components/ui/button';
import { Scale } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { primaryCtaClasses } from './ctaButtonClasses';

export default function HeroSection() {
  const { ref, isRevealed } = useScrollReveal();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={`space-y-8 transition-all duration-700 ease-out ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Scale size={16} />
              <span>Free Legal Consultation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Fighting for Your Rights,{' '}
              <span className="text-primary">No Upfront Costs</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Sarah Legal provides compassionate, expert legal representation for victims of personal injury, 
              dangerous drugs, defective medical devices, and more. Contact us today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact} className={`text-base ${primaryCtaClasses}`}>
                Get Your Free Consultation
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('how-it-works');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Learn How It Works
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Free Consultation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$0</div>
                <div className="text-sm text-muted-foreground">Upfront Costs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Available Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/5 to-primary/10">
                <img
                  src="/assets/9ebf09c1-b434-4d8c-8434-de5510ac1a0f.png"
                  alt="Sarah Justice"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
