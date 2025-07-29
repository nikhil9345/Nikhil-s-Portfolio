import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Cybersecurity Intern
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-2">
                    Edunet Foundation
                  </p>
                </div>
                
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>June 2024 - July 2024</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Virtual Internship</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Completed an intensive 8-week Virtual Internship in Cyber Security with Edunet Foundation IBM, 
                  gaining comprehensive expertise in ethical hacking and vulnerability analysis using advanced tools.
                </p>
                
                <div className="bg-secondary/30 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Learned ethical hacking techniques and vulnerability assessment methodologies
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Gained hands-on experience with Kali Linux and penetration testing tools
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Developed an Image Steganography project for secure data embedding
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Ethical Hacking
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Kali Linux
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Vulnerability Analysis
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  OpenCV
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Steganography
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;