import React from 'react';
import blog from '../images/test.jpg'
import { Link } from 'react-router-dom';
import logo from '../images/Agaybi 1 - Copy.png'
export default function FooterSp() {
    const today = new Date();

  return (
<>
<footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="specialFooter col-lg-4 col-md-4 col-xs-6">
                        <div class="widget about-widget">
                            <h3>
                              <img src={logo} alt=""  style={{width:'10%'}}/>
                              <a  class="logo" style={{textDecoration:'none', fontFamily:'Maya'}}>The Egyptian Swiss Textile</a></h3>
                            <p>Somos fabricantes textiles que nos esforzamos por lograr la mejor calidad mientras utilizamos los recursos más eficientes. Además, nuestro objetivo es dejar una huella en el mercado textil y garantizar la satisfacción del cliente al proporcionar la mayor calidad a precios razonables.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-xs-6">
                        <div class="widget site-map-widget">
                            <h3 style={{fontFamily:'Maya'}}>Navegación</h3>
                            <div className="row">
                              <div className="col"> <ul style={{paddingLeft:'0'}}>
                                <li><Link to='/' style={{textDecoration:'none'}}>Inicio</Link></li>
                                <li><Link to='/about' style={{textDecoration:'none'}}>Sobre nosotros




</Link></li>
                                <li><Link to='/history' style={{textDecoration:'none'}}>Historia</Link></li>

                                <li><Link to='/galleryHome' style={{textDecoration:'none'}}>Galería</Link></li>
                                </ul></div>
                              <div className="col"> <ul>
                                <li><Link to='/blog' style={{textDecoration:'none'}}>Blog</Link></li>
                                <li><Link to='/products' style={{textDecoration:'none'}}>Productos</Link></li>
                                <li><Link to='/contact' style={{textDecoration:'none'}}>Contacto</Link></li>
                            </ul></div>

                            </div>
                             
                        </div>
                    </div>

                    {/* <div class="col col-lg-3 col-md-3 col-xs-6">
                        <div class="widget news-widget">
                            <h3 style={{fontFamily:'Maya'}}>Recent news</h3>
                            <ul>
                                <li>
                                    <div class="entry-media">
                                        <img src={blog} alt/>
                                    </div>
                                    <div class="entry-details">
                                        <h5><a  style={{textDecoration:'none'}}>New ch017y concrete mixer is bought</a></h5>
                                        <span class="date">19 FEB</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="entry-media">
                                        <img src={blog} alt/>
                                    </div>
                                    <div class="entry-details">
                                        <h5><a  style={{textDecoration:'none'}}>New ch017y concrete mixer is bought</a></h5>
                                        <span class="date">16 FEB</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}

                    <div class=" col-lg-4 col-md-4 col-xs-6">
                        <div class="widget newsletter-widget">
                            <h3 style={{fontFamily:'Maya'}}>Contacta con nosotras</h3>
                            <ul>
                                <li><i style={{color:'#C0AB89'}} class="fa-regular fa-envelope" aria-hidden="true"></i> Info@agaipy.com</li>
                                <li><i style={{color:'#C0AB89'}} class="fa fa-volume-control-phone" aria-hidden="true"></i> +20 244 564 541 - +20 244 564 540</li>
                            </ul>
                           
                        </div>

                        <div class="widget social-media-widget">
                            <ul class="social-links">
                                <li><a  style={{textDecoration:'none'}}><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a  style={{textDecoration:'none'}}><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a  style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a  style={{textDecoration:'none'}}><i class="fa-brands fa-google-plus-g"></i></a></li>
                                <li><a  style={{textDecoration:'none'}}><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
                <div className="row">
                <div
          class="footer-copyright"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="container" >
            <div
              className="row "
              style={{ display: "flex", justifyContent: "center" }}
            >
              {/* <div className="col-md-6 ">
              <div className="row" style={{ display: "block" }}>
                <a
                  href="https://neoneg.com/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  www.neoneg.com
                </a>
              
              </div>
            </div> */}
              <div
                className="col-md-12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "15px",
                    lineHeight: "1.8",
                    fontWeight: "700",
                    fontFamily: "Segoe UI",
                    color: "#fff",
                  }}
                >
                  Copyright &copy; {today.getFullYear()} by{" "}
                  <span>
                    {" "}
                    <a
                      target="_blank"
                      href="https://neoneg.com/"
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                    >
                      NEON
                    </a>{" "}
                  </span>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      fontWeight: "700",
                      color: "#fff",
                    }}
                    onClick={() => {
                      window.open(`https://wa.me/+201113588988`);
                    }}
                  >
                    <i
                      className="fa-brands fa-whatsapp fs-5"
                      style={{ color: "#fff", marginRight: "10px" }}
                    ></i>
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
                </div>
            </div>
        </footer>
</>  )
}
