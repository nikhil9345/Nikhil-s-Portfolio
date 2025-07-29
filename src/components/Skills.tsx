// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Code, Database, Cloud, Award, Users, Lightbulb } from "lucide-react";

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       icon: Code,
//       skills: ["C/C++", "Python", "JavaScript", "HTML5", "CSS3", "Java", "SQL"],
//       color: "from-blue-500 to-purple-600"
//     },
//     {
//       title: "Frameworks & Libraries",
//       icon: Database,
//       skills: ["React.js", "Node.js", "Express.js", "TensorFlow", "OpenCV", "Scikit-learn", "Bootstrap"],
//       color: "from-green-500 to-teal-600"
//     },
//     {
//       title: "Databases & Tools",
//       icon: Database,
//       skills: ["MongoDB", "MySQL", "SQLite", "Git", "VS Code", "REST API", "WebSockets"],
//       color: "from-orange-500 to-red-600"
//     },
//     {
//       title: "Cloud & DevOps",
//       icon: Cloud,
//       skills: ["AWS", "MongoDB Atlas", "GitHub", "Heroku", "Netlify"],
//       color: "from-purple-500 to-pink-600"
//     },
//     {
//       title: "Certifications",
//       icon: Award,
//       skills: ["MongoDB Associate Developer", "Python (NPTEL)", "AWS Cloud Technical Essentials", "Introduction to Git and GitHub"],
//       color: "from-indigo-500 to-blue-600"
//     },
//     {
//       title: "Soft Skills",
//       icon: Users,
//       skills: ["Problem Solving", "Team Management", "Self-Learning", "Adaptability", "Communication"],
//       color: "from-teal-500 to-green-600"
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-secondary/20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//             Skills & Expertise
//           </h2>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             A comprehensive toolkit spanning modern technologies, frameworks, and methodologies 
//             for building robust, scalable applications.
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {skillCategories.map((category, index) => (
//             <Card 
//               key={index} 
//               className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group"
//             >
//               <CardHeader className="pb-4">
//                 <div className="flex items-center space-x-4">
//                   <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
//                     <category.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
//                     {category.title}
//                   </CardTitle>
//                 </div>
//               </CardHeader>
              
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {category.skills.map((skill, skillIndex) => (
//                     <Badge 
//                       key={skillIndex} 
//                       variant="secondary" 
//                       className="bg-secondary/50 text-foreground border-border/50 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-200 cursor-default"
//                     >
//                       {skill}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
        
//         <div className="mt-16 text-center">
//           <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
//             <CardContent className="p-8">
//               <div className="flex items-center justify-center mb-6">
//                 <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
//                   <Lightbulb className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-foreground mb-4">
//                 Relevant Coursework
//               </h3>
//               <div className="flex flex-wrap justify-center gap-3">
//                 {[
//                   "Data Structures & Algorithms",
//                   "Operating Systems", 
//                   "Object-Oriented Programming",
//                   "Database Management Systems",
//                   "Software Engineering",
//                   "Computer Networks",
//                   "Machine Learning",
//                   "Cybersecurity"
//                 ].map((course, index) => (
//                   <Badge 
//                     key={index} 
//                     variant="outline" 
//                     className="text-sm bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 transition-colors duration-200"
//                   >
//                     {course}
//                   </Badge>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Award, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C/C++", "Python", "JavaScript", "HTML5", "CSS3", "Java", "SQL"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      skills: ["React.js", "Node.js", "Express.js", "TensorFlow", "OpenCV", "Scikit-learn", "Bootstrap"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MongoDB", "MySQL", "SQLite", "Git", "VS Code", "REST API", "WebSockets"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "MongoDB Atlas", "GitHub", "Heroku", "Netlify"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Certifications",
      icon: Award,
      skills: [
        {
          name: "MongoDB Associate Developer",
          url: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/e9bfc0c1-859b-4edb-804a-a6f507906ccf-nikhil-suhaas-atchuta-a669d375-e96d-411a-9d98-d0f64a880cf6-certificate.pdf"
        },
        {
          name: "Python (NPTEL)"
        },
        {
          name: "AWS Cloud Technical Essentials",
          url: "https://coursera.org/share/a16c5d9a70353a175df032749295d39a"
        },
        {
          name: "Introduction to Git and GitHub",
          url: "https://coursera.org/share/4d1b509e55a318880d98f5f4ce467db3"
        }
      ],
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Team Management", "Self-Learning", "Adaptability", "Communication"],
      color: "from-teal-500 to-green-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning modern technologies, frameworks, and methodologies 
            for building robust, scalable applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const skillName = typeof skill === "string" ? skill : skill.name;
                    const skillUrl = typeof skill === "string" ? null : skill.url;

                    return skillUrl ? (
                      <a
                        key={skillIndex}
                        href={skillUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-secondary/50 text-foreground border-border/50 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-200 cursor-pointer"
                        >
                          {skillName}
                        </Badge>
                      </a>
                    ) : (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-secondary/50 text-foreground border-border/50 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-200 cursor-default"
                      >
                        {skillName}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Data Structures & Algorithms",
                  "Operating Systems", 
                  "Object-Oriented Programming",
                  "Database Management Systems",
                  "Software Engineering",
                  "Computer Networks",
                  "Machine Learning",
                  "Cybersecurity"
                ].map((course, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 transition-colors duration-200"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
