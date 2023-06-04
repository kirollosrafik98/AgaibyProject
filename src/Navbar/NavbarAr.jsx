import React from "react";
import logo from "../images/Agaybi 2 (1).png";
import uk from "../images/ukFlag.png";
import egypt from "../images/flag.png";
import french from "../images/france-flag.png";
import spain from "../images/spain.png";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Link } from "react-router-dom";
// import './Navbar.scss'
// import '../Sass/Main.scss'
import "../App.css";
import { Container } from "react-bootstrap";

export default function NavbarAr({ ar, setAr }) {
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
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ marginTop: "2%" }}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* <div>
              
            </div> */}
            {isMobile && (
              <Link
                class="navbar-brand  logoLnav"
                style={{ padding: "0" }}
                to="/"
              >
                <img src={logo} style={{ width: "100%", float: "right" }} />
              </Link>
            )}
            <div
              class="collapse navbar-collapse navbaSpecial"
              id="navbarSupportedContent"
              style={{ width: "70%" }}
            >
              <Container style={{display:"flex", flexDirection: isMobile ? "column-reverse" : "row"}}>
                {" "}
                <div
                  class="language"
                  style={{
                    width: "15%",
                    display: "flex",
                    justifyContent: "start",
                    float: "left",
                    paddingRight: "3%",
                  }}
                >
   {isMobile?<img
                        src={egypt}
                        style={{ width: "35%", paddingRight: "4px" ,height:"30%"}}
                        alt=""
                      />:<img
                        src={egypt}
                        style={{ width: "40%", paddingRight: "4px" ,height:"90%"}}
                        alt=""
                      />}
     <div class=" navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            عربي
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink"  style={{backgroundColor:'rgb(118, 99, 69)',color:'#fff'}}>
            <li><a class="dropdown-item"   onClick={() => {
                    setAr("eng");
                    localStorage.setItem("lang", "eng");
                  }}>Eng</a></li>
            <li><a class="dropdown-item"  onClick={() => {
                    setAr("fr");
                    localStorage.setItem("lang", "fr");
                  }}>French</a></li>
            <li>  <a class="dropdown-item"
                       onClick={() => {
                        setAr("spain");
                        localStorage.setItem("lang", "spain");
                      }}
                    >Spain</a></li>
          </ul>
        </li>
      </ul>
    </div>
 
 

                  

                  {/* </div> */}
                </div>
                <div style={{ width: "15%" }}></div>
                <ul
                  class=" navbar-nav  mb-2 mb-lg-0 ulSize"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                  dir="rtl"
                  lang="ar"
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
                      الرئيسية
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
                      اقرأ عنا
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
                      تاريخنا
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
                      المنتجات
                    </Link>
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
                      الصور
                    </Link>
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
                      مدونة
                    </Link>
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
                      تواصل معنا
                    </Link>
                  </li>

                  {/*** */}
                </ul>
              </Container>
            </div>
            {!isMobile && (
              <Link
                class="navbar-brand  logoLnav"
                style={{ padding: "0" }}
                to="/"
              >
                <img src={logo} style={{ width: "100%", float: "right" }} />
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
