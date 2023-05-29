import react from 'react';
import "./Footer.css"
import fb from "../images/fb.png"
import insta from "../images/insta.png"
import tw from "../images/tw.png"
import ws from "../images/ws.png"

const Footer = () => {
    return (
        <div className="_footer">
            <div className="footer section_padding">
                <div className="footer-links">
                    <div className="footer-links-div">
                        <h4>For Business</h4>
                        <a href="#">
                            <p>Eployer</p>
                        </a>
                        <a href="#">
                            <p>Health Plan</p>
                        </a>
                        <a href="#">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Resources</h4>
                        <a href="#">
                            <p>Resource center</p>
                        </a>
                        <a href="#">
                            <p>Testimonial</p>
                        </a>
                        <a href="#">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Company</h4>
                        <a href="#">
                            <p>About</p>
                        </a>
                        <a href="#">
                            <p>Press</p>
                        </a>
                        <a href="#">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Redes Sociales</h4>
                        <div className='socialmedia'>
                            <p>
                                <img src={fb} alt="facebook" />
                            </p>
                            <p>
                                <img src={insta} alt="instagram" />
                            </p>
                            <p>
                                <img src={tw} alt="twitter" />
                            </p>
                            <p>
                                <img src={ws} alt="whatsapp" />
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-below">
                    <div className="footer-copyright">
                        <p>
                            @{new Date().getFullYear()} FullPirateo. All right reserverd.
                        </p>
                    </div>
                    <div className="footer-below-links">
                        <a href="#"><div><p>Terminos y Condiciones</p></div></a>
                        <a href="#"><div><p>Privacidad</p></div></a>
                        <a href="#"><div><p>Security</p></div></a>
                        <a href="#"><div><p>Cookies</p></div></a>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Footer;