import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gradient-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Nikhil Suhaas Atchuta</h3>
              <p className="text-muted-foreground">
                Full-Stack Developer & AI/ML Engineer passionate about creating innovative solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-300">About</a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Projects</a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Skills</a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Let's Connect</h4>
              <p className="text-muted-foreground mb-4">
                Ready to collaborate on your next project?
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Nikhil Suhaas Atchuta. Built with ❤️ using React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
