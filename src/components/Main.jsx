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

  useEffect(() => {
    i18n.locale = locale;
  }, [locale]);

    return(
      <LanguageContext.Provider value={{ locale, setLocale }}>
        <main id="main">
          <Navbar/>
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