
import { Instagram, Pinterest, Music, Camera } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/tastemade' 
    },
    { 
      name: 'Pinterest', 
      icon: Pinterest, 
      url: 'https://pinterest.com/tastemade' 
    },
    { 
      name: 'TikTok', 
      icon: Music, 
      url: 'https://tiktok.com/@tastemade' 
    },
    { 
      name: 'Snapchat', 
      icon: Camera, 
      url: 'https://snapchat.com/add/tastemade' 
    },
    { 
      name: 'Amazon', 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595 2.779-1.062 4.564-2.067 5.35-3.015.045-.053.117-.08.213-.08.096 0 .16.035.192.107.035.071.018.142-.051.213-.906 1.111-2.851 2.134-5.833 3.07C17.609 21.48 14.417 22 10.993 22 6.087 22 1.746 20.797.115 18.409c-.053-.08-.053-.142-.07-.39z"/>
          <path d="M20.73 15.025c-.178 0-.332.053-.462.16-.906.71-2.155 1.062-3.746 1.062-1.018 0-1.966-.124-2.851-.373-.88-.248-1.585-.551-2.119-.906-.178-.124-.267-.231-.267-.324 0-.071.053-.107.16-.107.071 0 .195.053.373.16.551.373 1.204.675 1.966.906.765.231 1.55.346 2.369.346 1.257 0 2.315-.267 3.175-.8.86-.533 1.29-1.111 1.29-1.733 0-.533-.213-.942-.64-1.222-.427-.284-1.062-.427-1.902-.427-.338 0-.729.036-1.173.108-.449.071-.854.178-1.222.319-.364.142-.604.284-.718.427-.115.142-.173.284-.173.427 0 .213.089.373.267.48.178.108.427.16.747.16.444 0 .8-.089 1.062-.267.267-.178.4-.427.4-.747 0-.16-.053-.284-.16-.373-.107-.089-.284-.133-.533-.133-.124 0-.213.018-.267.053s-.08.089-.08.16c0 .036.018.089.053.16.036.071.053.124.053.16 0 .089-.036.16-.107.213-.071.053-.16.08-.267.08-.16 0-.284-.036-.373-.107-.089-.071-.133-.178-.133-.319 0-.213.089-.4.267-.56.178-.16.444-.284.8-.373.355-.089.729-.133 1.115-.133.622 0 1.08.089 1.373.267.293.178.44.427.44.747 0 .213-.089.427-.267.64-.178.213-.444.373-.8.48-.355.107-.764.16-1.222.16-.622 0-1.133-.089-1.533-.267-.4-.178-.6-.427-.6-.747 0-.16.053-.284.16-.373.107-.089.267-.133.48-.133z"/>
        </svg>
      ), 
      url: 'https://amazon.com/tastemade' 
    }
  ];

  return (
    <footer className="bg-background-alt text-foreground-alt section-padding-sm">
      <div className="container-fluid">
        <div className="flex justify-center items-center gap-8">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-alt hover:text-accent transition-colors duration-300"
                aria-label={link.name}
              >
                <IconComponent size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
