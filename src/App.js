import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Training />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;