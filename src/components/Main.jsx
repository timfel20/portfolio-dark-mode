import react from "react";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
export function Main(){
    return(
        <main id="main">
          <Navbar/>
          <Hero/>
          <div id="preloader"></div>
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> 
        </main>
    )
}