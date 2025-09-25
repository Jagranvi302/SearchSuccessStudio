import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, Linkedin, Facebook, ArrowDown } from "lucide-react";
import { SiPinterest, SiX, SiInstagram, SiTiktok } from "react-icons/si";
import professionalPhoto from "@assets/generated_images/Professional_business_headshot_71114822.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20">
              <AvatarImage src={professionalPhoto} alt="Rashid Maqbool" />
              <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">RM</AvatarFallback>
            </Avatar>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Rashid Maqbool
            </h1>
            
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">
              SEO Specialist & Digital Marketing Expert
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Results-driven SEO Specialist with 2+ years of experience in boosting website performance, 
              improving search engine rankings, and delivering measurable growth in organic traffic and ROI.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              onClick={scrollToContact}
              className="gap-2"
              data-testid="button-hire-me"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </Button>
            
            <Button 
              variant="outline" 
              onClick={scrollToAbout}
              className="gap-2"
              data-testid="button-learn-more"
            >
              <ArrowDown className="w-4 h-4" />
              Learn More
            </Button>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-linkedin"
            >
              <a 
                href="https://www.linkedin.com/in/searchsucessstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-facebook"
            >
              <a 
                href="https://www.facebook.com/searchsuccessstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-twitter"
            >
              <a 
                href="https://x.com/SearchSucStudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <SiX className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-instagram"
            >
              <a 
                href="https://www.instagram.com/searchsuccessstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-pinterest"
            >
              <a 
                href="https://www.pinterest.com/searchsuccessstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest Profile"
              >
                <SiPinterest className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-tiktok"
            >
              <a 
                href="https://www.tiktok.com/@searchsuccessstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Profile"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-phone"
            >
              <a 
                href="tel:+923217551302"
                aria-label="Phone Number"
              >
                <Phone className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}