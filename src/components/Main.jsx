import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { About } from "./About";
import { ImageSlider } from "./ImageSlider";
/* import { Subscribe } from "./Subscribe"; */
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Blog } from "./Blog"; 
import { useEffect, useState, createContext } from "react";
import i18n from "../i18n";

export const LanguageContext = createContext({});
i18n.fallbacks = true;
i18n.translations = i18n;

export function Main(){
  const [locale, setLocale] = useState('en');

  const [theme, setTheme] = useState("light-main");

  const toggleMode = () => {
    setTheme(theme === "light-main" ? "dark-main" : "light-main");
  };

  useEffect(() => {
    i18n.locale = locale;
  }, [locale]);

    return(
      <LanguageContext.Provider value={{ locale, setLocale }}>
        <main id="main" className={`${theme}`}>
        <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-center">
    
        {/*   <h1 className="logo"><a href="index.html">FELICIA</a></h1>
          <a href="index.html" className="logo"></a> */}
  
        <div className="logo-container-mobile"><a  href="#" ><img src="assets/img/f.png" alt="" /></a></div>
              <nav id="navbar" className="navbar">
                <ul>
                  <div className="toggle-container">
                    <label className="ui-switch">
                      <input type="checkbox" onClick={toggleMode} />
                      <div className="slider">
                        <div className="circle"></div>
                      </div>
                    </label>
                  </div>
                  <div className="nav-texts">
                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">About</a></li>
                    <li><a className="nav-link scrollto" href="#services">Technologies</a></li>
                    <div className="logo-container"><a  href="#" ><img src="assets/img/f.png" alt="" /></a></div>
                    <li><a className="nav-link scrollto " href="#work">Portfolio</a></li>
                    <li><a className="nav-link scrollto " href="#blog">Other Interests</a></li>
                    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                  </div>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
        
            </div>
          </header>
          <Hero/>
          <About/>
          <ImageSlider/>
         {/*  <Subscribe/> */}
          <Portfolio/>
          <Blog/>
          <Contact/>
          <Footer/>
           
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        </main>
        </LanguageContext.Provider>
    )
}