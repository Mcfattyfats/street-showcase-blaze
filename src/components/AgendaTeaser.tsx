
import { Download } from 'lucide-react';

const AgendaTeaser = () => {
  const sessions = [
    { time: '10 AM', event: 'Market Opens' },
    { time: '12 PM', event: 'Chef Showcase' },
    { time: '2 PM', event: 'Branding Workshop' },
    { time: '5 PM', event: 'Sustainability Panel' }
  ];

  return (
    <section className="section-light section-padding">
      <div className="container-fluid">
        <h2 className="text-headline text-center mb-16">Event Schedule</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Schedule List */}
          <div className="space-y-6">
            <ul className="space-y-4">
              {sessions.map((session, index) => (
                <li 
                  key={session.time}
                  className="flex items-center gap-4 p-4 border-l-4 border-accent animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-semibold text-accent min-w-[60px]">{session.time}</span>
                  <span className="text-body-large">{session.event}</span>
                </li>
              ))}
            </ul>
            
            <button className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-body-large font-medium">
              <Download size={20} />
              Download full schedule (PDF)
            </button>
          </div>
          
          {/* Venue Map */}
          <div className="bg-foreground p-8 rounded-lg">
            <svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background */}
              <rect width="400" height="300" fill="currentColor" />
              
              {/* Yellow paths */}
              <path
                d="M50 50 L350 50 L350 100 L200 100 L200 200 L350 200 L350 250 L50 250 Z"
                stroke="#FFD100"
                strokeWidth="3"
                fill="none"
              />
              
              {/* Location markers */}
              <circle cx="100" cy="75" r="6" fill="#FFD100" />
              <circle cx="250" cy="75" r="6" fill="#FFD100" />
              <circle cx="175" cy="150" r="6" fill="#FFD100" />
              <circle cx="300" cy="225" r="6" fill="#FFD100" />
              
              {/* Labels */}
              <text x="100" y="95" textAnchor="middle" className="fill-background text-xs font-medium">Shop</text>
              <text x="250" y="95" textAnchor="middle" className="fill-background text-xs font-medium">Taste</text>
              <text x="175" y="170" textAnchor="middle" className="fill-background text-xs font-medium">Create</text>
              <text x="300" y="245" textAnchor="middle" className="fill-background text-xs font-medium">Learn</text>
              
              {/* Title */}
              <text x="200" y="30" textAnchor="middle" className="fill-accent text-sm font-semibold">
                Parque Bicentenario
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaTeaser;
