import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";

export default function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-6">
        <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <Home />
        <Features/>
        <Projects />
        <Resume/>
        <Contact />
        <Footer />
        <FooterBottom/>
      </div>
    </div>
  );
}
