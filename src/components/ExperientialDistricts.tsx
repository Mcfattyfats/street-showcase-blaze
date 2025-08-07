
import { useState } from 'react';
import { ShoppingBag, Utensils, Palette, BookOpen } from 'lucide-react';

const ExperientialDistricts = () => {
  const [activeDistrict, setActiveDistrict] = useState<number | null>(null);

  const districts = [
    {
      icon: ShoppingBag,
      title: 'Shop',
      description: 'Discover emerging makers and curated goods from local artisans.'
    },
    {
      icon: Utensils,
      title: 'Taste',
      description: 'Savor reinvented street food from renowned chefs and culinary innovators.'
    },
    {
      icon: Palette,
      title: 'Create',
      description: 'Hands-on workshops and creative sessions with industry experts.'
    },
    {
      icon: BookOpen,
      title: 'Learn',
      description: 'Engaging talks and panels with leading voices in food and culture.'
    }
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-fluid">
        <h2 className="text-headline text-center mb-16">Experiential Districts</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {districts.map((district, index) => {
            const IconComponent = district.icon;
            const isActive = activeDistrict === index;
            
            return (
              <div
                key={district.title}
                className={`card-district group cursor-pointer ${isActive ? 'bg-accent text-accent-foreground border-accent' : ''}`}
                onMouseEnter={() => setActiveDistrict(index)}
                onMouseLeave={() => setActiveDistrict(null)}
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center">
                    <IconComponent 
                      size={32} 
                      className={`transition-colors duration-300 ${
                        isActive ? 'text-accent-foreground' : 'text-accent'
                      }`} 
                    />
                  </div>
                  
                  <h3 className="text-2xl heading">{district.title}</h3>
                  
                  <p className={`text-sm opacity-90 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {district.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperientialDistricts;
