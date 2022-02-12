import react from "react";
export function About(){
    return(
        <section id="team">
            <div className="container" data-aos="fade-up">
                <div className="row">
                <div className="col-md-12">
                    <h3 className="section-title">Our Team</h3>
                    <div className="section-title-divider"></div>
                    <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                </div>

                <div className="row">
                <div className="col-md-3">
                    <div className="member">
                    <div className="pic"><img src="assets/img/team/team-1.jpg" alt=""/></div>
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="member">
                    <div className="pic"><img src="assets/img/team/team-2.jpg" alt=""/></div>
                    <h4>Sarah Jhinson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="member">
                    <div className="pic"><img src="assets/img/team/team-3.jpg" alt=""/></div>
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="member">
                    <div className="pic"><img src="assets/img/team/team-4.jpg" alt=""/></div>
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                </div>
            </div>
       </section>
    )
}