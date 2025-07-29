import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Send, Download, ExternalLink } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nikhilsuhaas9@gmail.com",
      href: "mailto:nikhilsuhaas9@gmail.com",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9346939283",
      href: "tel:+919346939283",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nikhil9345",
      href: "https://github.com/nikhil9345",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nikhilsuhaas",
      href: "https://www.linkedin.com/in/nikhilsuhaas/",
      color: "from-blue-500 to-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, 
            or collaborations. Let's connect and create something amazing together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about technology. Feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {contact.label}
                        </h4>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 bg-secondary/20 border-border/50 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="https://github.com/nikhil9345" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 bg-secondary/20 border-border/50 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/nikhilsuhaas/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Download my complete resume with detailed information about my experience and skills.
                </p>
                <Button
                  className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;