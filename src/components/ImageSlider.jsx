import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function ImageSlider(){
    const sliderSettings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
      };

    return(
        <section id="services" className="slider pt-5 route sect-pt4">         
            <div className="row">
                <div className="col-sm-12">
                    <div className="title-box text-center">
                    <h3 className="title-a">
                        Technologies
                    </h3>
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...sliderSettings}>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/html.png" alt="html" /></div>
                        <p className="technology-text">Html</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/css.png" alt="css"/></div>
                        <p className="technology-text">Css</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/bootstrap.png" alt="bootstrap"/></div>
                        <p className="technology-text">Bootstrap</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/javascript.png" alt="javascript"/></div>
                        <p className="technology-text">Javascript</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/react.png" alt="react"/></div>
                        <p className="technology-text">React</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/angularjs.png" alt="angular"/></div>
                        <p className="technology-text">Angular</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/vue.png" alt="vue"/></div>
                        <p className="technology-text">Vue</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/git.png" alt="git"/></div>
                        <p className="technology-text">Git</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/trello.png" alt="trello"/></div>
                        <p className="technology-text">Trello</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/figma.png" alt="figma"/></div>
                        <p className="technology-text">Figma</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/jira.png" alt="jira"/></div>
                        <p className="technology-text">Jira</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/laravel.png" alt="laravel"/></div>
                        <p className="technology-text">Laravel</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/symfony.png" alt="symfony"/></div>
                        <p className="technology-text">Symfony</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/java.png" alt="java"/></div>
                        <p className="technology-text">Java</p>
                    </div>
                    <div className="slide">
                        <div className="slider-image-container"><img src="assets/img/mysql.png" alt="mysql"/></div>
                        <p className="technology-text">MySQL</p>
                    </div>
                    </Slider>
                </div>
        </section>
    )
}