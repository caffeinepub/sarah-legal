import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, AlertTriangle, Pill, Stethoscope, Shield } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const practiceAreas = [
  {
    icon: Heart,
    title: 'Personal Injury',
    description: 'If you\'ve been injured due to someone else\'s negligence, you may be entitled to compensation for medical bills, lost wages, and pain and suffering.',
  },
  {
    icon: AlertTriangle,
    title: 'Product Liability',
    description: 'Defective products can cause serious harm. We help victims of dangerous or faulty products hold manufacturers accountable for their injuries.',
  },
  {
    icon: Pill,
    title: 'Dangerous Drugs',
    description: 'Pharmaceutical companies must ensure their medications are safe. If you\'ve suffered adverse effects from a dangerous drug, we can help you seek justice.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Devices',
    description: 'Defective medical devices can cause devastating complications. We represent patients harmed by faulty implants, equipment, and other medical products.',
  },
  {
    icon: Shield,
    title: 'Sexual Abuse',
    description: 'Survivors of sexual abuse deserve compassionate legal support. We fight to hold perpetrators and negligent institutions accountable while protecting your privacy.',
  },
];

export default function PracticeAreasSection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Practice Areas
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide expert legal representation across multiple areas of law, 
              helping victims seek the compensation they deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card key={area.title} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
