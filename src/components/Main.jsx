import react from "react";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { About } from "./About";
import { Service } from "./Service";
/* import { Subscribe } from "./Subscribe"; */
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Blog } from "./Blog"; 

export function Main(){
    return(
        <main id="main">
          <Navbar/>
          <Hero/>
          <About/>
          <Service/>
         {/*  <Subscribe/> */}
          <Portfolio/>
          <Blog/>
          <Contact/>
          <Footer/>
           
          <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

        </main>
    )
}