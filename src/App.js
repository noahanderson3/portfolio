import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SchoolWork from "./components/Dasebase_Design";
import BusSysAnalysis from "./components/BusSysAnalysis";
import Dasebase_Design from "./components/Dasebase_Design";
import WebDev from "./components/WebDev";




export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <BusSysAnalysis />
      <Dasebase_Design />
      <WebDev/>
      <Projects />
      <Skills />
       <Contact />
    </main>
  );
}