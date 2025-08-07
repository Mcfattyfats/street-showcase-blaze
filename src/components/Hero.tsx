
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onRegisterVisitor: () => void;
  onBecomeExhibitor: () => void;
}

const Hero = ({ onRegisterVisitor, onBecomeExhibitor }: HeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center parallax-slow"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Glass Overlay */}
      <div className="absolute inset-0 glass-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-foreground-alt container-fluid animate-fade-in">
        <h1 className="text-hero mb-6">
          Tastemade Street Showcase
        </h1>
        
        <p className="text-subhead mb-12 opacity-90 max-w-2xl mx-auto">
          Mexico City · 14-16 November 2025 · Parque Bicentenario
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <button 
            onClick={onRegisterVisitor}
            className="btn-primary w-full sm:w-auto whitespace-nowrap"
          >
            Register as Visitor
          </button>
          
          <button 
            onClick={onBecomeExhibitor}
            className="btn-secondary w-full sm:w-auto whitespace-nowrap"
          >
            Become an Exhibitor
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown 
          size={32} 
          className="text-accent cursor-pointer hover:scale-110 transition-transform"
          onClick={() => {
            document.querySelector('#why-attend')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
