import react from "react";
export function Portfolio(){
    return(
        <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="title-box text-center">
                    <h3 className="title-a">
                        Portfolio
                    </h3>
                    </div>
                </div>
                </div>
                <div className="row"> 
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://filter-api-starwars.netlify.app/" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/starwars.png" alt="star wars api image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="portfolio-title w-title">Star Wars Api</h2>
                           <a href="https://filter-api-starwars.netlify.app/" ><button type="button" className="btn btn-outline-warning" target="_blank">View</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>                              
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://calc-prj.netlify.app" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/calculator.png" alt="calculator image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="portfolio-title w-title">Calculator</h2>
                           <a href="https://calc-prj.netlify.app" ><button type="button" className="btn btn-outline-warning" target="_blank">View</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://github.com/timfel20/Felicia-language-school" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/port1.png" alt="laravel website image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="portfolio-title w-title">Laravel Language School</h2>
                           <a href="https://github.com/timfel20/Felicia-language-school"><button type="button" className="btn btn-outline-warning" target="_blank">Github</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
              
               {/*  <div className="col-md-4">
                    <div className="work-box">
                    <a href="assets/img/work-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/work-5.jpg" alt="" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="w-title">Studio Lena Mado</h2>
                           <button type="button" className="btn btn-outline-danger">Danger</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="assets/img/work-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/work-5.jpg" alt="" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="w-title">Studio Lena Mado</h2>
                           <button type="button" className="btn btn-outline-danger">Danger</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}

                </div>
            </div>
            <div className="container">        
                <div className="row">                               
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://tttf-website.netlify.app"  className="portfolio-lightbox" >
                        <div className="work-img">
                        <img src="assets/img/felinc.png" alt="web desing peoject image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className=" portfolio-title w-title">Frontend Design</h2>
                          <a href="https://tttf-website.netlify.app"> <button type="button" className="btn btn-outline-warning" target="_blank">View</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://github.com/timfel20/shopping-cart"  className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/symfonycart.png" alt="shopping cart image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className=" portfolio-title w-title">Symfony Shopping Cart</h2>
                          <a href="https://github.com/timfel20/shopping-cart"> <button type="button" className="btn btn-outline-warning" target="_blank">Github</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://felicia-portfolio-240c06.netlify.app" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/port3.png" alt="pokemon api fetch website image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className=" portfolio-title w-title">Pokemon Api</h2>
                          <a href="https://felicia-portfolio-240c06.netlify.app"><button type="button" className="btn btn-outline-warning" target="_blank">View</button></a> 
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://shopping-cart-project-two.netlify.app" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/shopping-cart.png" alt="shopping cart image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="portfolio-title w-title">Javascript Shopping Cart</h2>
                           <a href="https://shopping-cart-project-two.netlify.app" ><button type="button" className="btn btn-outline-warning" target="_blank">View</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://calculator-two.netlify.app" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/calc2.png" alt="calculator image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="portfolio-title w-title">Calculator 2</h2>
                           <a href="https://calculator-two.netlify.app" ><button type="button" className="btn btn-outline-warning" target="_blank">View</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://shopping-list-javascript.netlify.app" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/shop-list.png" alt="shopping list image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="portfolio-title w-title">Shopping List</h2>
                           <a href="https://shopping-list-javascript.netlify.app" ><button type="button" className="btn btn-outline-warning" target="_blank">View</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://software-dev-model.netlify.app" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/dev-model.png" alt="software dev model image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="portfolio-title w-title">Software Models Blog</h2>
                           <a href="https://software-dev-model.netlify.app" ><button type="button" className="btn btn-outline-warning" target="_blank">View</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://firezilla-manual.netlify.app/" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/firezilla.png" alt="firezilla manual image" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="portfolio-title w-title">Firezilla Manual Blog</h2>
                           <a href="https://firezilla-manual.netlify.app/" ><button type="button" className="btn btn-outline-warning" target="_blank">View</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://calc-prj.netlify.app" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/calculator.png" alt="" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="portfolio-title w-title">Calc-web</h2>
                           <a href="https://calc-prj.netlify.app" ><button type="button" className="btn btn-outline-warning">View</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="https://github.com/timfel20/Felicia-language-school" data-gallery="portfolioGallery" className="portfolio-lightbox">
                        <div className="work-img">
                        <img src="assets/img/port1.png" alt="" className="img-fluid"/>
                        </div>
                    </a>
                    <div className="work-content">
                        <div className="row">
                        <div className="col-sm-8">
                            <h2 className="portfolio-title w-title">Language school</h2>
                           <a href="https://github.com/timfel20/Felicia-language-school"><button type="button" className="btn btn-outline-warning">View</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                */}
               
                </div>
            </div>
       </section>
       
    )
}