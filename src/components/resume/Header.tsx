import { Mail, Phone, Linkedin, MapPin, Droplets } from "lucide-react";

const Header = () => {
  return (
    <header className="gradient-hero text-primary-foreground py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="animate-slide-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Sajal Swapnil
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-medium">
              Business Development Associate
            </p>
            <p className="text-sm text-primary-foreground/70 mt-2 max-w-md">
              Driven sales professional with 6 months of EdTech sales training at iDigitalpreneur. 
              Passionate about building relationships and driving growth.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a 
              href="tel:+917779876622" 
              className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors group"
            >
              <div className="p-2 rounded-lg bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm">+91 7779876622</span>
            </a>
            
            <a 
              href="mailto:sajalvictorious83@gmail.com" 
              className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors group"
            >
              <div className="p-2 rounded-lg bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm">sajalvictorious83@gmail.com</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors group"
            >
              <div className="p-2 rounded-lg bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <span className="text-sm">LinkedIn Profile</span>
            </a>

            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="p-2 rounded-lg bg-primary-foreground/10">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-sm">Chandigarh, India</span>
            </div>
          </div>
        </div>

        {/* Highlight badges */}
        <div className="flex flex-wrap gap-3 mt-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <span className="px-4 py-2 rounded-full bg-primary-foreground/15 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/10">
            🎖️ NCC Cadet
          </span>
          <span className="px-4 py-2 rounded-full bg-primary-foreground/15 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/10">
            🩸 Regular Blood Donor
          </span>
          <span className="px-4 py-2 rounded-full bg-primary-foreground/15 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/10">
            🎓 B.E. in CSE - CU
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
