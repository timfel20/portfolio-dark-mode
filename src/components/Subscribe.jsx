import react from "react";
export function Subscribe(){
    return(
        <section id="subscribe">
            <div className="container" data-aos="fade-up">
                <div className="row">
                <div className="col-md-8">
                    <h3 className="subscribe-title">Subscribe For Updates</h3>
                    <p className="subscribe-text">Join our 1000+ subscribers and get access to the latest tools, freebies, product announcements and much more!</p>
                </div>
                <div className="col-md-4 subscribe-btn-container">
                    <a className="subscribe-btn" href="#">Subscribe Now</a>
                </div>
                </div>
            </div>
        </section>
    )
}