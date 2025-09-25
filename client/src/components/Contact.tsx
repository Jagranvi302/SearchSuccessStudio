import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Facebook, Send } from "lucide-react";
import { SiPinterest, SiX, SiInstagram, SiTiktok } from "react-icons/si";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // TODO: Integrate with actual contact form handling
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "searchsuccessstudio@gmail.com",
      href: "mailto:searchsuccessstudio@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92-321-755-1302",
      href: "tel:+923217551302"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Toba Tek Singh, Punjab, Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/searchsucessstudio/",
      color: "text-blue-600"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/searchsuccessstudio",
      color: "text-blue-600"
    },
    {
      icon: SiX,
      label: "Twitter",
      href: "https://x.com/SearchSucStudio"
    },
    {
      icon: SiInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/searchsuccessstudio/"
    },
    {
      icon: SiPinterest,
      label: "Pinterest",
      href: "https://www.pinterest.com/searchsuccessstudio/"
    },
    {
      icon: SiTiktok,
      label: "TikTok",
      href: "https://www.tiktok.com/@searchsuccessstudio"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to boost your website's SEO performance? Let's discuss your project!
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      data-testid="input-subject"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project and SEO goals..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-32"
                      data-testid="textarea-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full gap-2"
                    data-testid="button-send-message"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4" data-testid={`contact-info-${index}`}>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 flex-wrap">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        asChild
                        className="hover-elevate"
                        data-testid={`link-${social.label.toLowerCase()}`}
                      >
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Free SEO Consultation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get a complimentary SEO audit and strategy discussion for your website. 
                    Let's identify opportunities to improve your search rankings!
                  </p>
                  <p className="text-sm text-primary font-medium">
                    🚀 Available for new projects • 🌍 Remote work worldwide
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}