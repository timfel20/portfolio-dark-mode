import react from "react";
export function Blog(){
    return(
        <section id="blog" className="blog-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="title-box text-center">
                    <h3 className="title-a">
                        Other interests
                    </h3>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4" id="more-interests" >
                    <div className="card card-blog">
                    <div className="card-img">
                        <img src="assets/img/phptog1.jpg" alt="" className="img-fluid-blog"/>
                    </div>
                    <div className="card-body">
                        <div className="card-category-box">
                        <div className="card-category">
                            <h6 className="category">Photography</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4" id="more-interests" >
                    <div className="card card-blog">
                    <div className="card-img">
                        <img src="assets/img/video-game.png" alt="" className="img-fluid-blog"/>
                    </div>
                    <div className="card-body">
                        <div className="card-category-box">
                        <div className="card-category">
                            <h6 className="category">Video Games</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4" id="more-interests" >
                    <div className="card card-blog">
                    <div className="card-img">
                        <img src="assets/img/writing.jpg" alt="" className="img-fluid-blog"/>
                    </div>
                    <div className="card-body">
                        <div className="card-category-box">
                        <div className="card-category">
                            <h6 className="category">Writing</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
           
        </section>
    )
}