import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const technicalSkills = [
    { name: "On-Page SEO", level: 95 },
    { name: "Technical SEO", level: 90 },
    { name: "Off-Page SEO", level: 88 },
    { name: "Keyword Research", level: 95 },
    { name: "Content Optimization", level: 92 },
    { name: "Local SEO", level: 85 }
  ];

  const tools = [
    "Google Analytics",
    "Google Search Console", 
    "Ahrefs",
    "SEMrush",
    "Screaming Frog",
    "Core Web Vitals",
    "Mobile SEO",
    "International SEO",
    "E-commerce SEO",
    "Competitor Analysis",
    "Link Building",
    "Content Strategy"
  ];

  const specializations = [
    {
      title: "SEO Analytics & Reporting",
      skills: ["Google Analytics", "Search Console", "Performance Tracking", "KPI Monitoring"]
    },
    {
      title: "Technical Optimization",
      skills: ["Core Web Vitals", "Site Speed", "Mobile Optimization", "Schema Markup"]
    },
    {
      title: "Content & Strategy",
      skills: ["Keyword Research", "Content Planning", "Competitor Analysis", "Market Research"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive SEO skills backed by proven tools and methodologies
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Core SEO Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} data-testid={`skill-${index}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-6">
              {specializations.map((spec, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{spec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {spec.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          data-testid={`specialization-${index}-skill-${skillIndex}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">SEO Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="px-4 py-2"
                    data-testid={`tool-${index}`}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}