import { Scale, Mail, Phone, MapPin } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin } from 'react-icons/si';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getAppIdentifier = () => {
    try {
      return encodeURIComponent(window.location.hostname || 'sarah-legal');
    } catch {
      return 'sarah-legal';
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="text-primary" size={24} />
              <span className="text-xl font-bold">Sarah Legal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Compassionate legal representation for victims seeking justice and fair compensation.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="text-primary" size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <SiX className="text-primary" size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="text-primary" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practice-areas')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Practice Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('active-lawsuits')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Active Lawsuits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Personal Injury</li>
              <li>Product Liability</li>
              <li>Dangerous Drugs</li>
              <li>Medical Devices</li>
              <li>Sexual Abuse</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+1-555-123-4567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@sarahlegal.com" className="hover:text-primary transition-colors">
                  contact@sarahlegal.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Available Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Legal Disclaimers */}
        <div className="space-y-4 mb-8">
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="font-semibold text-foreground">Important Legal Disclaimer:</strong> The information 
              provided on this website is for general informational purposes only and does not constitute legal advice. 
              Contacting us does not create an attorney-client relationship. An attorney-client 
              relationship is only formed after a formal consultation and the execution of a written agreement. 
              Past results do not guarantee future outcomes. Each case is unique and must be evaluated on its own merits.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Sarah Legal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-accent">♥</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
