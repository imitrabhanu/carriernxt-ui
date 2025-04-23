import { Link } from "wouter";
import { LightbulbIcon, CheckCircleIcon } from "lucide-react";
import { roadmapItems } from "@/lib/constants";

const About = () => {
  return (
    <main>
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">
                About AI Career Architect
              </h2>
              <p className="text-gray-600 mb-6">
                We're on a mission to democratize career guidance for students across India, especially those in Tier 2 and Tier 3 cities who lack access to quality career counseling.
              </p>
              
              <div className="mb-6 p-6 bg-light rounded-lg">
                <h3 className="font-heading font-semibold text-xl mb-3">Our Story</h3>
                <p className="text-gray-600 mb-4">
                  Growing up in a small town, our founder experienced firsthand the challenges of making informed career decisions with limited guidance. This personal journey inspired the creation of AI Career Architect.
                </p>
                <p className="text-gray-600">
                  We've combined advanced AI technology with local expertise to create a solution that understands the unique educational and career landscape of India.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center text-primary">
                    <CheckCircleIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1">Our Mission</h4>
                    <p className="text-gray-600">
                      To empower every student in India with personalized career guidance, regardless of their location or background.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center text-primary">
                    <CheckCircleIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1">Our Vision</h4>
                    <p className="text-gray-600">
                      A future where every student makes confident career decisions based on their unique abilities and interests, not limited by lack of information or guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team meeting" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                      <LightbulbIcon size={24} />
                    </div>
                    <h4 className="font-heading font-semibold text-lg text-foreground">The Bharat Problem</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Only 1 in 250 students in India has access to proper career guidance. We're changing that with technology that scales to reach millions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="font-heading font-semibold text-2xl text-foreground mb-8 text-center">Our Roadmap</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              <div className="space-y-12">
                {roadmapItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-8">
                      <div className="w-1/2 pr-8 text-right">
                        {index % 2 === 0 ? (
                          <div className="bg-light p-4 rounded-lg shadow-sm inline-block">
                            <h4 className="font-heading font-semibold text-lg mb-1">{item.phase}</h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        ) : (
                          <p className={`font-semibold ${item.completed ? 'text-primary' : 'text-gray-500'}`}>
                            {item.timeline}
                          </p>
                        )}
                      </div>
                      <div 
                        className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 ${
                          item.completed 
                            ? 'bg-primary' 
                            : index === 1 
                              ? 'bg-primary/70' 
                              : 'bg-gray-300'
                        } rounded-full flex items-center justify-center text-white z-10`}
                      >
                        {item.completed ? (
                          <CheckCircleIcon size={20} />
                        ) : index === 1 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        )}
                      </div>
                      <div className="w-1/2 pl-8">
                        {index % 2 === 1 ? (
                          <div className="bg-light p-4 rounded-lg shadow-sm inline-block">
                            <h4 className="font-heading font-semibold text-lg mb-1">{item.phase}</h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        ) : (
                          <p className={`font-semibold ${item.completed ? 'text-primary' : 'text-gray-500'}`}>
                            {item.timeline}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="container mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">Ready to Transform Your Career Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students across India who are discovering their perfect career paths with AI Career Architect.
          </p>
          <Link href="/#early-access">
            <button className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Get Early Access Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
