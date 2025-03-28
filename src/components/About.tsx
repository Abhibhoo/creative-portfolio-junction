
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Learn more about my background, experience, and what drives me to excel in my field.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Professional portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in animation-delay-150">
            <p className="text-lg leading-relaxed">
              I am a [job title/role] with [X years] of experience in [industry/field]. 
              My journey has been fueled by a passion for [specific passion, e.g., technology, design, 
              problem-solving] and a dedication to continuous growth and learning.
            </p>
            <p className="text-lg leading-relaxed">
              My approach is grounded in strong analytical skills, a knack for creative 
              problem-solving, and a commitment to delivering high-quality work on every project.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Vision</h3>
                  <p className="text-muted-foreground">Creating innovative solutions that make a positive impact.</p>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Mission</h3>
                  <p className="text-muted-foreground">Delivering excellence through creativity and technical expertise.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
