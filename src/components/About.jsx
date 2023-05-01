import react from "react";
export function About(){
    return(
     <div>
        <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                        <div className="about-me pt-4 pt-md-0">
                            <div className="title-box-2">
                            <h5 className="title-left mt-2">
                                About me
                            </h5>
                            </div>
                            <div className="about-img">
                                <img src="assets/img/fel-img3.jpg" className="img-fluid-about rounded-circle b-shadow-a" alt=""/>
                            </div>
                            <p className="lead">
                             I love creativity. Seeing my thoughts being brought to life and projected into admiration is my goal. I find
                             coding interesting and love the logical part of it.
                            </p>
                            <p className="lead">
                            I am a full-stack web developer with passion for building admirable websites and applications. Specialized in PHP, Angular and React with a knowledge of Java and other technologies necessary for having a clean, relieable code and working in a team.
                            </p>
                           {/*  <p className="lead">
                            I have created an application with React, Javascript, Spring and Laravel which had given me a very deep knowledge about Javascript and how to use back end with front end
                            </p> */}
                        </div>
                </div>
            </div>
        </section>
     </div>
    )
}