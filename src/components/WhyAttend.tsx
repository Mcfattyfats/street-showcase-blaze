
import { Utensils, ShoppingBag, GraduationCap } from 'lucide-react';

const WhyAttend = () => {
  const benefits = [
    {
      icon: Utensils,
      title: 'Taste',
      description: 'Street-food reinvented.'
    },
    {
      icon: ShoppingBag,
      title: 'Shop',
      description: 'Curated stalls, emerging makers.'
    },
    {
      icon: GraduationCap,
      title: 'Learn',
      description: 'Talks and panels with industry voices.'
    }
  ];

  return (
    <section id="why-attend" className="section-light section-padding">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Benefits Section */}
          <div className="space-y-8">
            <h2 className="text-headline">Why Attend</h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={benefit.title}
                    className="flex items-start gap-4 animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-accent p-3 rounded-lg flex-shrink-0">
                      <IconComponent size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 heading">{benefit.title}</h3>
                      <p className="text-muted-foreground text-body-large">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button className="btn-dark mt-8">
              See Agenda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
