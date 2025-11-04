import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-montserrat">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-10 md:py-12 max-w-6xl">
        <div className="animate-fade-in">
          {/* Responsive Layout */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
            
            {/* Profile Image + Logo */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg ring-4 ring-primary/20">
                <img
                  src="/bhavyaaaa.jpg"
                  alt="Bhavyaa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Logo below image */}
              <img
                src="/logo.png"
                alt="BhavyaaWrites Logo"
                className="h-40 md:h-100 w-auto object-contain mt-6 transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 text-foreground leading-relaxed space-y-6 md:text-left text-center">
              <p className="text-lg">
                Hi, I’m <span className="font-semibold text-primary">Bhavyaa Rana</span> — 
                a dedicated <span className="font-medium">law student and aspiring content writer</span> 
                from Rohini, currently pursuing <span className="font-medium">B.A. LL.B (Hons.)</span> 
                at Maharaja Agrasen Institute of Management Studies.
              </p>

              <p>
                My journey has given me practical legal exposure through internships 
                where I learned to draft petitions, research cases, and understand 
                courtroom procedures under the guidance of advocates.
              </p>

              <p>
                Outside the legal world, I’m deeply passionate about 
                <span className="font-medium"> writing, debating, and public speaking</span>.  
                These experiences have honed my leadership, collaboration, and 
                communication skills — qualities I bring to every project I work on.
              </p>

              <p>
                As a <span className="font-medium">content writing intern</span>, 
                I aim to create meaningful and well-researched content that connects 
                knowledge with creativity, inspiring readers to think and reflect.
              </p>

              <p className="text-muted-foreground italic mt-6">
                “Words have the power to inspire change — and I aim to use them wisely.”
              </p>

              {/* Social Link */}
              <div className="flex justify-center md:justify-start mt-10">
                <a
                  href="https://www.linkedin.com/in/bhavyaa-rana-821982386/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-secondary transition-all group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
