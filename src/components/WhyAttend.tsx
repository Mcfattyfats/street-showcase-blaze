
const WhyAttend = () => {
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
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-6 text-muted-foreground text-body-large leading-relaxed">
              <p>
                Tastemade Street Showcase transforms an ordinary city block into an open-air studio where chefs, artists, and creators trade the usual velvet-rope exclusivity for spontaneous collaboration.
              </p>
              
              <p>
                The event pumps fresh energy into the neighbourhood, drawing foot traffic that boosts small-business revenue, framing local street culture as both a community asset and an exportable experience, and sparking new partnerships that outlast the weekend.
              </p>
              
              <p>
                A parallel multimedia campaign—spanning livestream takeovers, short-form video, and interactive polls—turns every onsite moment into shareable content, ensuring the buzz reverberates far beyond the crowd on the pavement.
              </p>
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
