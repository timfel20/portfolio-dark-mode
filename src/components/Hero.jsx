import React from "react";

export function Hero(){
    return(
        <div id="hero" className="hero route bg-image">
            <div className="overlay-itro"></div>
            <div className="hero-content display-table">
              <div className="table-cell">
                <div className="container">
                  <h2 className="mb-4 text-white"></h2>
                  <h2 className="hero-title-second">FELICIA FOLA</h2>
                  <p className="hero-subtitle mb-5"><span className="typed" data-typed-items="Full Stack Web Developer"></span></p>
                {/*   <p className="pt-12"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
                <a className="js-scroll" href="#about">
                  <button class="ui-btn" >
                    
                  <span>
                    Learn More 
                  </span>
                
                </button>
                </a>
                </div>
              </div>
            </div>
            {/* <img class="svg-wave" src="assets/img/wave (3).svg" alt="" />  */}
       </div>
       
    )
}