import react from "react";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { About } from "./About";
import { Service } from "./Service";
import { Subscribe } from "./Subscribe";
import { Portfolio } from "./Portfolio";
import { Testimonials } from "./Testimonials";
import { Team } from "./Team";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
export function Main(){
    return(
        <main id="main">
          <Navbar/>
          <Hero/>
          <About/>
          <Service/>
          <Subscribe/>
          <Portfolio/>
          <Testimonials/>
          <Team/>
          <Contact/>
          <Footer/>
        </main>
    )
}