import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experience = [
    {
      title: "Freelance SEO Specialist With AI",
      company: "Self-Employed",
      period: "2023 – Present",
      location: "Toba Tek Singh, Punjab, Pakistan",
      type: "work",
      achievements: [
        "Conducted comprehensive SEO audits, keyword research, and competitor analysis for 50+ websites",
        "Implemented on-page SEO strategies including meta tags optimization and internal linking",
        "Executed successful off-page campaigns with focus on quality link building and outreach",
        "Improved clients' website traffic by applying Smart Money Concepts and technical fixes",
        "Delivered measurable growth in organic traffic, CTR, and ROI for multiple clients",
        "Monitored analytics and reported on SEO KPIs using Google Analytics & Search Console"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor's Degree",
      institution: "AIOU Islamabad",
      period: "Completed",
      type: "education"
    },
    {
      degree: "Intermediate in Commerce (I.Com)",
      institution: "BISE Faisalabad", 
      period: "Completed",
      type: "education"
    }
  ];

  const certifications = [
    {
      title: "Advanced SEO + Digital Marketing Training",
      provider: "iskills.com",
      period: "2023",
      type: "certification"
    },
    {
      title: "SEO Training",
      provider: "Ghulamaliseo.com",
      period: "2023",
      type: "certification"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional journey and continuous learning in SEO and digital marketing
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Professional Experience
            </h3>
            
            {experience.map((exp, index) => (
              <Card key={index} className="mb-6" data-testid={`experience-${index}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-elevate" data-testid={`education-${index}`}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <Badge className="w-6 h-6 text-primary bg-primary/10 hover:bg-primary/10" />
              Certifications & Training
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-elevate" data-testid={`certification-${index}`}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                    <p className="text-primary font-medium mb-2">{cert.provider}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {cert.period}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}