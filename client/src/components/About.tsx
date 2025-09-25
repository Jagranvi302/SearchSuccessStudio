import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "2+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: TrendingUp, label: "Avg Traffic Increase", value: "150%" },
    { icon: Award, label: "Certifications", value: "5+" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              Passionate about helping businesses grow through strategic SEO and digital marketing
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Professional Journey
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a dedicated SEO Specialist with over 2 years of experience, I specialize in 
                transforming websites into high-performing digital assets. My expertise spans 
                across On-Page SEO, Off-Page SEO, Technical SEO, and Content Optimization.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm passionate about staying updated with Google algorithm changes and implementing 
                cutting-edge SEO strategies that deliver measurable results. My approach combines 
                data-driven insights with creative problem-solving to boost organic traffic, 
                improve CTR, and maximize ROI.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">SEO Expert</Badge>
                <Badge variant="secondary">Google Analytics</Badge>
                <Badge variant="secondary">Content Strategy</Badge>
                <Badge variant="secondary">Technical SEO</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover-elevate">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to boost your website's performance and drive organic growth? 
                I'm here to help you achieve your digital marketing goals.
              </p>
              <p className="text-sm text-muted-foreground">
                📍 Based in Toba Tek Singh, Punjab, Pakistan | 🌍 Serving clients worldwide
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}