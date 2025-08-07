
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
        
        <button onClick={onApplyNow} className="btn-dark">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default ExhibitorRecruitment;
