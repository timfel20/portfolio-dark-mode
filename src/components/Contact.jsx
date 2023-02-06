import react from "react";
import emailjs from "emailjs-com";
export function Contact(){

    let mailSuccess = ""

    let sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_dfx6f6n','template_volv5ti',e.target,'user_VIoKhh6eRLu7hUIyCHOlG')
        .then(res =>alert('message sent'))
        .catch(err=>{console.log(err)})
        e.target.reset();
        
    }

    
    return(
        <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" styles="background-image: url(assets/img/overlay-bg.jpg)">
            <div className="overlay-mf"></div>
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="contact-mf">
                    <div id="contact" className="box-shadow-full">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="title-box-2">
                            <h5 className="title-left">
                                Send a Message
                            </h5>
                            </div>
                            <div>
                            <form  onSubmit={sendEmail}>
                                <div className="row">
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                </div>
                               {/*  <div className="col-md-12 text-center my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div> */}
                                <div className="col-md-12 mt-3 text-center">
                                    <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="more-info">
                            <p className="lead">
                              Do you have a slot for me? Feel free to fill the form and send me an Email
                            </p>
                            <ul className="list-ico">
                                <li><span className="bi bi-geo-alt"></span>Barcelona, Spain</li>
                                <li><span className="bi bi-envelope"></span>timmyfelicia@gmail.com</li>
                            </ul>
                            </div>
                            <div className="socials">
                            <ul>
                                <li><a href="https://github.com/timfel20"><span className="ico-circle"><i className="bi bi-github"></i></span></a></li>
                                <li><a href="https://linkedin.com/in/felicia-o-8987b1123"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                            </ul>
                            </div>
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