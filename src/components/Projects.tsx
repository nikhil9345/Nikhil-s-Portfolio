import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Database, Brain, Shield, Smartphone, Globe, BarChart, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Lost and Found Management System",
      description: "Full-stack web application enabling users to report, search, and manage lost/found items with real-time messaging capabilities.",
      icon: Database,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Multer"],
      features: ["User Authentication", "Image Uploads", "Real-time Messaging", "Search & Filter"],
      category: "Full-Stack",
      codeUrl: "https://github.com/nikhil9345/Lost-and-Found-System"
    },
    {
      title: "ECG Image Classification",
      description: "Lightweight ensemble ML framework for ECG classification using Adaptive Weighted Voting Ensemble (AWVE) for enhanced accuracy.",
      icon: Brain,
      technologies: ["Python", "Scikit-learn", "NumPy", "OpenCV", "Machine Learning"],
      features: ["1D Array Conversion", "Feature Extraction", "Ensemble Learning", "Low Computational Cost"],
      category: "Machine Learning"
    },
    {
      title: "Smart Face Recognition System",
      description: "Advanced face recognition system using OpenCV for secure, offline identification with robust handling of various conditions.",
      icon: Shield,
      technologies: ["Python", "OpenCV", "Face Recognition", "SQLite", "Computer Vision"],
      features: ["Offline Recognition", "Multiple Conditions", "Fast Processing", "Secure Database"],
      category: "Computer Vision",
      codeUrl: "https://github.com/nikhil9345/Face-Recognition-System"
    },
    {
      title: "Stock Market Prediction",
      description: "Hybrid LSTM and Linear Regression model for stock price forecasting using historical data from Yahoo Finance.",
      icon: BarChart,
      technologies: ["Python", "TensorFlow", "LSTM", "NumPy", "Matplotlib", "Yahoo Finance API"],
      features: ["Time Series Analysis", "Deep Learning", "Data Preprocessing", "Trend Prediction"],
      category: "Machine Learning"
    },
    {
      title: "Netflix OTT Platform",
      description: "Dynamic Netflix UI replica with full CRUD operations using React.js and a fake JSON server for data management.",
      icon: Globe,
      technologies: ["React.js", "JavaScript", "Bootstrap", "CSS", "REST API"],
      features: ["Dynamic UI", "CRUD Operations", "Responsive Design", "API Integration"],
      category: "Frontend",
      codeUrl: "https://github.com/nikhil9345/Full-stack-frontend"
    },
    {
      title: "Online Grocery Store",
      description: "Responsive e-commerce web application with secure authentication, category browsing, and dynamic shopping cart.",
      icon: Smartphone,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      features: ["User Authentication", "Shopping Cart", "Product Search", "Responsive Design"],
      category: "Web Development",
      codeUrl: "https://github.com/nikhil9345/grocery-store"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Full-Stack": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Machine Learning": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Computer Vision": "bg-green-500/20 text-green-400 border-green-500/30",
      "Frontend": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "Web Development": "bg-pink-500/20 text-pink-400 border-pink-500/30"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise across full-stack development, machine learning, and innovative software solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs bg-secondary/50 border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-2">
                  {project.codeUrl ? (
  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
    <Button 
        size="sm"
        className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 hover:border-primary/50"
      >
        <Code className="w-4 h-4 mr-2" />
        Code
      </Button>
    </a>
    ) : (
    <Button 
      size="sm" 
      className="flex-1 bg-primary/20 text-primary border border-primary/30 cursor-not-allowed opacity-50"
      disabled
    >
      <Code className="w-4 h-4 mr-2" />
      Code
    </Button>
    )}
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-border/50 hover:bg-secondary/50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://github.com/nikhil9345" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;