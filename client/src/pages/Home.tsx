import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-muted/50 border-t py-8">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Rashid Maqbool. All rights reserved. | SEO Specialist & Digital Marketing Expert
          </p>
        </div>
      </footer>
    </div>
  );
}