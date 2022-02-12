import React from "react";
export function Hero(){
    return(
        <section id="hero">
            <div className="hero-container">
            <div data-aos="fade-in">
                <div className="hero-logo">
                <img className="" src="../../public/assets/img/logo.png" alt="Imperial"/>
                </div>

                <h1>Welcome to Imperial studios</h1>
                <h2>We create <span className="typed" data-typed-items="beautiful graphics, functional websites, working mobile apps"></span></h2>
                <div className="actions">
                <a href="#about" className="btn-get-started">Get Strated</a>
                <a href="#services" className="btn-services">Our Services</a>
                </div>
            </div>
            </div>
        </section>
    )
}