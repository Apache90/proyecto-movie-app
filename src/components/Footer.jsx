import React from 'react';
import "../styles/Footer.css"
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
                        <h4>CONTACTO</h4>
                        <a href="#">
                            <p>3865-12314</p>
                        </a>
                        <a href="#">
                            <p>San Martin 123</p>
                        </a>
                        <a href="#">
                            <p>fullpirateo@gmail.com</p>
                        </a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Servicios</h4>
                        <a href="#">
                            <p>Streaming</p>
                        </a>
                        <a href="#">
                            <p>API</p>
                        </a>
                        <a href="#">
                            <p>Publicidad</p>
                        </a>
                        
                    </div>
                    <div className="footer-links-div">
                        <h4>Compania</h4>
                        <a href="#">
                            <p>Quienes Somos</p>
                        </a>
                        <a href="#">
                            <p>Administracion</p>
                        </a>
                        <a href="#">
                            <p>RRHH</p>
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