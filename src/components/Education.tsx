import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "SRM University",
      location: "Amaravati, Andhra Pradesh",
      duration: "2022 - 2026",
      score: "CGPA: 8.64",
      status: "Pursuing",
      highlights: [
        "Strong academic performance with consistent high grades",
        "Active participation in technical projects and competitions",
        "Focus on AI/ML and Full-Stack Development specialization"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      field: "Science Stream",
      institution: "Narayana Junior College",
      location: "Guntur, Andhra Pradesh", 
      duration: "2020 - 2022",
      score: "Percentage: 90.9%",
      status: "Completed",
      highlights: [
        "Excellent academic performance in Mathematics and Science",
        "Strong foundation in Physics, Chemistry, and Mathematics",
        "Developed analytical and problem-solving skills"
      ]
    },
    {
      degree: "Secondary School (10th Grade)",
      field: "General Education",
      institution: "Little Flower English Medium School",
      location: "Guntur, Andhra Pradesh",
      duration: "2019 - 2020",
      score: "Percentage: 78.33%",
      status: "Completed",
      highlights: [
        "Well-rounded education with focus on core subjects",
        "Developed communication and leadership skills",
        "Foundation for advanced technical education"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Pursuing" 
      ? "bg-green-500/20 text-green-400 border-green-500/30"
      : "bg-blue-500/20 text-blue-400 border-blue-500/30";
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey that built the foundation for my technical expertise and passion for innovation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((education, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {education.degree}
                        </h3>
                        <Badge className={getStatusColor(education.status)}>
                          {education.status}
                        </Badge>
                      </div>
                      
                      <p className="text-lg text-primary font-semibold mb-1">
                        {education.field}
                      </p>
                      
                      <p className="text-base font-medium text-foreground mb-2">
                        {education.institution}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{education.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <div className="bg-primary/20 rounded-lg px-4 py-2 inline-block">
                      <span className="text-primary font-bold text-lg">
                        {education.score}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {education.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Academic Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Consistent academic performance demonstrating strong analytical skills, 
                dedication to learning, and a solid foundation in mathematics, science, 
                and computer science fundamentals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;