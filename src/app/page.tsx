import React from 'react';
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import MyWork from "../components/Projects";
import SkillsAndTools from "../components/SkillsAndTools";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="experience" className="min-h-screen">
          <Experience />
        </section>

        <section id="mywork" className="min-h-screen">
          <MyWork />
        </section>

        <section id="skills-tools" className="min-h-screen">
          <SkillsAndTools />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}