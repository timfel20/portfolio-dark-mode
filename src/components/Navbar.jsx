import react from "react";
export function Navbar(){
    return(
      <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-center">
  
      {/*   <h1 className="logo"><a href="index.html">FELICIA</a></h1>
         <a href="index.html" className="logo"></a> */}
  
  <div className="logo-container-mobile"><a  href="#" ><img src="assets/img/f.png" alt="" /></a></div>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Technologies</a></li>
            <div className="logo-container"><a  href="#" ><img src="assets/img/f.png" alt="" /></a></div>
            <li><a className="nav-link scrollto " href="#work">Portfolio</a></li>
            <li><a className="nav-link scrollto " href="#blog">Other Interests</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
  
      </div>
    </header>
        )
}