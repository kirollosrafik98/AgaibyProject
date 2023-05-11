import React from "react";
import logo from "../images/Agaybi 2 (1).png";
import uk from "../images/ukFlag.png";
import egypt from "../images/flag.png";
import french from "../images/france-flag.png";
import spain from "../images/spain.png";

import { Link } from "react-router-dom";
// import './Navbar.scss'
// import '../Sass/Main.scss'
import "../App.css";

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
          style={{marginTop:'2%'}}  >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse navbaSpecial"
              id="navbarSupportedContent"
              style={{ width: "70%" }}
            >
              
              <div
            class="language"
            style={{ width: "15%", display: "flex", justifyContent: "end" }}
          >
         
         
         <ul className="direction">
            <li>  <div    onClick={() => {setAr('eng');localStorage.setItem('lang','eng')}}>
                                     <img src={uk} style={{width:'70%', paddingRight:'4px'}} alt="" /></div> 
            </li>
            <li><div
              onClick={() => {
                setAr("fr");
                localStorage.setItem("lang", "fr");
              }}
            >
              <img
                src={french}
                style={{ width: "70%", paddingRight: "4px" }}
                alt=""
              />{" "}
            </div></li>
            <li> <div
              onClick={() => {
                setAr("spain");
                localStorage.setItem("lang", "spain");
              }}
            >
              {" "}
              <img
                src={spain}
                style={{ width: "70%", paddingRight: "4px" }}
                alt=""
              />
            </div></li>
         </ul>
           
            {/* </div> */}
            
           
          </div>
          <div style={{width:'15%'}}></div>
              <ul
                class=" navbar-nav  mb-2 mb-lg-0"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "70%",
                }}
                dir="rtl" lang="ar" >
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
                {/*** */}
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
              
               

              
                
                
              </ul>
              
            </div>
            <Link
              class="navbar-brand  logoLnav"
              style={{  padding: "0" }}
              to="/"
            >
              <img src={logo} />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
