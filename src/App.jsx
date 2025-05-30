import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
      <About />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
		</>
	);
};

export default App;
