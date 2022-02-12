import react from "react";
export function Testimonials(){
    return(
        <section id="testimonials">
            <div className="container" data-aos="fade-up">
                <div className="row">
                <div className="col-md-12">
                    <h3 className="section-title">Testimonials</h3>
                    <div className="section-title-divider"></div>
                    <p className="section-description">Erdo lide, nora porodo filece, salvam esse se, quod concedimus ses haec dicturum fuisse</p>
                </div>
                </div>

                <div className="row">
                <div className="col-md-3">
                    <div className="profile">
                    <div className="pic"><img src="assets/img/client-1.jpg" alt=""/></div>
                    <h4>Saul Goodman</h4>
                    <span>Lawless Inc</span>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="quote">
                    <b><img src="assets/img/quote_sign_left.png" alt=""/></b> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <small><img src="assets/img/quote_sign_right.png" alt=""/></small>
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-md-9">
                    <div className="quote">
                    <b><img src="assets/img/quote_sign_left.png" alt=""/></b> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis architecto beatae. <small><img src="assets/img/quote_sign_right.png" alt=""/></small>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="profile">
                    <div className="pic"><img src="assets/img/client-2.jpg" alt=""/></div>
                    <h4>Sara Wilsson</h4>
                    <span>Odeo Inc</span>
                    </div>
                </div>
                </div>

            </div>
      </section>
    )
}