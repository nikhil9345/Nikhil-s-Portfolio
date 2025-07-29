import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target, Calendar, ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Maintaining CGPA of 8.64/10 in Computer Science Engineering",
      category: "Academic",
      date: "2022-2026",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "MongoDB Certified Developer",
      description: (
        <a
          href="https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/e9bfc0c1-859b-4edb-804a-a6f507906ccf-nikhil-suhaas-atchuta-a669d375-e96d-411a-9d98-d0f64a880cf6-certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition"
        >
          MongoDB Associate Developer Certification
        </a>
      ),
      category: "Professional",
      date: "2024",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      title: "AWS Cloud Certified",
      description: (
        <a
          href="https://coursera.org/share/a16c5d9a70353a175df032749295d39a"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition"
        >
          AWS Cloud Technical Essentials from Coursera
        </a>
      ),
      category: "Cloud",
      date: "2024",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Python NPTEL Certification",
      description: "Successfully completed Python programming course",
      category: "Programming",
      date: "2024",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Award,
      title: "Introduction to Git and GitHub",
      description: (
        <a
          href="https://coursera.org/share/4d1b509e55a318880d98f5f4ce467db3"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition"
        >
          Coursera certification of Git & GitHub
        </a>
      ),
      category: "Version Control",
      date: "2024",
      color: "from-purple-500 to-indigo-500"
    }
  ];


  const stats = [
  { value: "10+", label: "Projects Completed", icon: Trophy },
  { value: "5", label: "Certifications", icon: Award },
  { value: "8.64", label: "CGPA", icon: Star },
  { value: "1", label: "Internship", icon: Target }
];

  return (
    <section id="achievements" className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and accomplishments that showcase my dedication to continuous learning and excellence.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-105 group text-center"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-floating transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative"
            >
              {/* Background gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {achievement.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {achievement.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-muted-foreground mb-6">
                Always striving for excellence and looking forward to new opportunities to grow and contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="#projects" 
                  className="inline-flex items-center px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;