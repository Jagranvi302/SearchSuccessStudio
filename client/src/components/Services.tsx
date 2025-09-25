import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BarChart3, Link, FileText, Globe, ShoppingCart } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "On-Page SEO",
      description: "Optimize your website's content, meta tags, and internal structure for better search rankings and user experience."
    },
    {
      icon: Link,
      title: "Off-Page SEO & Link Building",
      description: "Build high-quality backlinks and improve domain authority through strategic outreach campaigns."
    },
    {
      icon: BarChart3,
      title: "Technical SEO",
      description: "Fix technical issues, improve site speed, Core Web Vitals, and ensure proper website architecture."
    },
    {
      icon: FileText,
      title: "Content Optimization",
      description: "Create and optimize content that ranks well and converts visitors into customers."
    },
    {
      icon: Globe,
      title: "Local & International SEO",
      description: "Dominate local search results or expand globally with targeted SEO strategies."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce SEO",
      description: "Optimize product pages, category structure, and shopping experience for maximum conversions."
    }
  ];

  return (
    <section id="services" className="py-20" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive SEO solutions to boost your online presence and drive organic growth
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate h-full" data-testid={`service-card-${index}`}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Ready to Dominate Search Rankings?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how I can help your business achieve higher rankings, 
                  increased organic traffic, and better ROI through proven SEO strategies.
                </p>
                <p className="text-sm text-primary font-medium">
                  Free SEO Audit • Custom Strategy • Proven Results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}