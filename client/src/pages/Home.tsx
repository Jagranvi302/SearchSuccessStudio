import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <div className="min-h-screen">
        <Header />
        <main role="main">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <footer className="bg-muted/50 border-t py-8" role="contentinfo">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Rashid Maqbool. All rights reserved. | SEO Specialist & Digital Marketing Expert
            </p>
            <nav className="mt-4" aria-label="Footer navigation">
              <ul className="flex justify-center gap-6 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}