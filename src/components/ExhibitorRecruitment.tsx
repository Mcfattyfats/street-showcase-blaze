
import { Users, TrendingUp, DollarSign } from 'lucide-react';

interface ExhibitorRecruitmentProps {
  onApplyNow: () => void;
}

const ExhibitorRecruitment = ({ onApplyNow }: ExhibitorRecruitmentProps) => {
  const benefits = [
    { icon: Users, text: '4K+ foot traffic' },
    { icon: TrendingUp, text: '7-figure media reach' },
    { icon: DollarSign, text: 'Flat $500 booth fee' }
  ];

  const processSteps = [
    {
      number: "1.",
      title: "Apply online",
      description: "The \"Become an Exhibitor\" form takes two minutes. Tell us what you make and what size booth you need."
    },
    {
      number: "2.",
      title: "Curation review (72 hrs)",
      description: "Our team screens for product fit and sustainability standards. We'll reply within three business days—yes or no, no limbo."
    },
    {
      number: "3.",
      title: "Secure your spot",
      description: "Approved? Pay the flat USD 500 booth fee to lock in. You'll receive an invoice plus a link to upload insurance and permits."
    },
    {
      number: "4.",
      title: "Get the exhibitor kit",
      description: "One week later, we email your digital kit: load-in schedule, parking pass, promotional assets, and a \"what to bring\" checklist. Show up on install day, plug in, start selling."
    }
  ];

  return (
    <section className="section-accent section-padding">
      <div className="container-fluid text-center">
        <h2 className="text-headline mb-8">Showcase Your Brand</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.text}
                className="flex items-center gap-2 bg-accent-foreground/10 px-6 py-3 rounded-full animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <IconComponent size={20} className="text-accent-foreground" />
                <span className="font-medium">{benefit.text}</span>
              </div>
            );
          })}
        </div>

        {/* Two-column section */}
        <div className="grid md:grid-cols-2 gap-12 mb-12 text-left">
          {/* Left column - Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full h-80 bg-accent-foreground/10 rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground/60 text-lg">Image Placeholder</span>
            </div>
          </div>
          
          {/* Right column - Process steps */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <span className="font-bold text-accent-foreground text-lg flex-shrink-0">{step.number}</span>
                  <div>
                    <h3 className="font-semibold text-accent-foreground mb-2">{step.title}</h3>
                    <p className="text-accent-foreground/80 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button onClick={onApplyNow} className="btn-dark">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default ExhibitorRecruitment;
