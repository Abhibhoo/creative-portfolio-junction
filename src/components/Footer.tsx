
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
  ];

  return (
    <footer className="bg-secondary py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold font-heading mb-2">Your Name</h2>
            <p className="text-muted-foreground">
              Turning ideas into reality through code and creativity.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm mt-4 md:mt-0 flex items-center">
            Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
