import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Server, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "MERN stack expertise with modern frameworks and responsive design"
    },
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description: "Machine learning models, computer vision, and predictive analytics"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "MongoDB, MySQL, and efficient data architecture solutions"
    },
    {
      icon: Server,
      title: "DevOps",
      description: "CI/CD, GitHub Actions, and scalable cloud deployment with AWS"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-scale-in"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Passionate about transforming ideas into digital reality through code and innovation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 shadow-card mb-12">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm an aspiring AI/ML engineer and full-stack developer with a strong foundation in modern 
                technologies. Currently pursuing BTech in Computer Science at SRM University with a CGPA of 8.64, 
                I'm passionate about creating innovative solutions that bridge the gap between complex problems 
                and elegant code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey spans from building robust web applications with the MERN stack to developing 
                sophisticated machine learning models for real-world applications. I thrive in collaborative 
                environments and have a proven track record of delivering high-quality solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience in database design, cloud platforms, and proficiency in AI tools to boost productivity 
                and deliver work efficiently, I bring a comprehensive approach to software development. I'm always eager 
                to learn new technologies and contribute to impactful projects that make a difference.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;