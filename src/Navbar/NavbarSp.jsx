import React from "react";
import logo from "../images/Agaybi 2.png";
import uk from "../images/ukFlag.png";
import egypt from "../images/flag.png";
import french from "../images/france-flag.png";
import spain from "../images/spain.png";

import { Link } from "react-router-dom";
// import './Navbar.scss'
// import '../Sass/Main.scss'
import "../App.css";

export default function NavbarSp({ ar, setAr }) {
  function verena() {
    document.querySelector(".navbar-toggler").click();
  }
  return (
    <>
      <header class="site-header header-style-3">
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light"
          style={{ padding: "0" }}
        >
          <div class="container-fluid">
            <Link
              class="navbar-brand"
              style={{ width: "20%", padding: "0" }}
              to="/"
            >
              <img src={logo} />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ width: "70%" }}
            >
              <ul
                class=" navbar-nav  mb-2 mb-lg-0"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "70%",
                  paddingLeft: "3%",
                }}
              >
                <li class="nav-item ">
                  <Link
                    className="nav-item"
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "#C0AB89",
                      fontSize: "20px",
                    }}
                    onClick={verena}
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item"
                    to="/about"
                    style={{
                      textDecoration: "none",
                      color: "#C0AB89",
                      fontSize: "20px",
                    }}
                    onClick={verena}
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item"
                    to="/history"
                    style={{
                      textDecoration: "none",
                      color: "#C0AB89",
                      fontSize: "20px",
                    }}
                    onClick={verena}
                  >
                    Historia
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    className="nav-item"
                    to="/products"
                    style={{
                      textDecoration: "none",
                      color: "#C0AB89",
                      fontSize: "20px",
                    }}
                    onClick={verena}
                  >
                    Productos
                  </Link>
                  {/* <ul class="sub-menu">
                                    <li><Link className='nav-item' to='/Product1'  style={{textDecoration:'none', color:'#C0AB89'}}>Projects style 1</Link></li>
                                    <li><Link className='nav-item' to='/Product2'  style={{textDecoration:'none', color:'#C0AB89'}}>Projects style 2</Link></li>
                                    <li><Link className='nav-item' to='/Product3'  style={{textDecoration:'none', color:'#C0AB89'}}>Projects style 3</Link></li>
                                </ul> */}
                </li>
                <li class="nav-item">
                  <Link
                    className="nav-item"
                    to="/galleryHome"
                    style={{
                      textDecoration: "none",
                      color: "#C0AB89",
                      fontSize: "20px",
                    }}
                    onClick={verena}
                  >
                    Galería
                  </Link>
                  {/* <ul class="sub-menu">
                                    <li><a href="service-single.html">Service single</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="time-line.html">Time line</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="clients.html">Clients</a></li>
                                    <li><a href="careers.html">Careers</a></li>
                                    <li class="nav-item">
                                        <a href="#Level3">Testimonials</a>
                                        <ul class="sub-menu">
                                            <li><a href="testimonials-s1.html">Testimonials style 1</a></li>
                                            <li><a href="testimonials-s2.html">Testimonials style 2</a></li>
                                        </ul>
                                    </li>
                                </ul> */}
                </li>
                <li class="nav-item">
                  <Link
                    className="nav-item"
                    to="/blog"
                    style={{
                      textDecoration: "none",
                      color: "#C0AB89",
                      fontSize: "20px",
                    }}
                    onClick={verena}
                  >
                    Blog
                  </Link>
                  {/* <ul class="sub-menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                                    <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                    <li><a href="blog-single.html">Blog single</a></li>
                                </ul> */}
                </li>
                <li>
                  <Link
                    className="nav-item"
                    to="/contact"
                    style={{
                      textDecoration: "none",
                      color: "#C0AB89",
                      fontSize: "20px",
                    }}
                    onClick={verena}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
              <div style={{ width: "15%" }}></div>
              <div
                class="language"
                style={{
                  width: "15%",
                  display: "flex",
                  justifyContent: "end",
                  paddingLeft: "3%",
                }}
              >
             <ul className="direction">
             <li>  <div
                  onClick={() => {
                    setAr("eng");
                    localStorage.setItem("lang", "eng");
                  }}
                >
                  <img
                    src={uk}
                    style={{ width: "70%", paddingRight: "4px" }}
                    alt=""
                  />
                </div></li> 
            <li>    <div
                  onClick={() => {
                    setAr("egp");
                    localStorage.setItem("lang", "egp");
                  }}
                >
                  <img
                    src={egypt}
                    style={{ width: "70%", paddingRight: "4px" }}
                    alt=""
                  />
                </div></li>
                {/* <div    onClick={() => {setAr('fr');localStorage.setItem('lang','fr')}}>
 <img src={french} style={{width:'10%', paddingRight:'4px'}} alt="" /> </div>  */}
              <li> <div
                  onClick={() => {
                    setAr("fr");
                    localStorage.setItem("lang", "fr");
                  }}
                >
                  {" "}
                  <img
                    src={french}
                    style={{ width: "70%", paddingRight: "4px" }}
                    alt=""
                  />
                </div></li> </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
