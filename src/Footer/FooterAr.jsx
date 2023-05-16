import React from "react";
import blog from "../images/test.jpg";
import { Link } from "react-router-dom";
import logo from "../images/Agaybi 1 - Copy.png";
export default function FooterAr() {
  const today = new Date();

  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
          <div class=" col-lg-4 col-md-4 col-xs-6">
              <div class="widget site-map-widget">
                <h3 style={{ fontFamily: "Maya" }}  dir="rtl" lang="ar">الصفحات</h3>
                <div className="row">
                <div className="col">
                    {" "}
                    <ul  dir="rtl" lang="ar">
                      <li>
                        <Link to="/blog" style={{ textDecoration: "none" }}  dir="rtl" lang="ar">
                        مدونة
                        </Link>
                      </li>
                      <li>
                        <Link to="/products" style={{ textDecoration: "none" }}  dir="rtl" lang="ar">
                        المنتجات
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" style={{ textDecoration: "none" }}  dir="rtl" lang="ar">
                        تواصل معنا
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    {" "}
                    <ul style={{ paddingLeft: "0" }}  dir="rtl" lang="ar">
                      <li>
                        <Link to="/" style={{ textDecoration: "none" }}  dir="rtl" lang="ar">
                          الرئيسية
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" style={{ textDecoration: "none" }}  dir="rtl" lang="ar">
                        اقرأ عنا
                        </Link>
                      </li>
                      <li>
                        <Link to="/history" style={{ textDecoration: "none" }}  dir="rtl" lang="ar">
                        تاريخنا
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/galleryHome"
                          style={{ textDecoration: "none" }}  dir="rtl" lang="ar"
                        >
                            الصور
                        </Link>
                      </li>
                    </ul>
                  </div>
                 
                </div>
              </div>
            </div>
          <div class="col-lg-4 col-md-4 col-xs-6">
              <div class="widget newsletter-widget">
                <h3 style={{ fontFamily: "Maya" }}  dir="rtl" lang="ar">تواصل معنا</h3>
                <ul  dir="rtl" lang="ar">
                                <li><i style={{color:'#C0AB89'}} class="fa-regular fa-envelope" aria-hidden="true"></i><a className='info' style={{textDecoration:'none'}} href="mailto:Info@agaipy.com"> Info@agaipy.com</a> </li>
                                <li  dir="rtl" lang="ar"><i style={{color:'#C0AB89'}} class="fa fa-volume-control-phone" aria-hidden="true"></i> <a  dir="rtl" lang="ar" className='info' style={{textDecoration:'none'}} href="tel:+20244564541">541 564 244 20+</a>  - <a  dir="rtl" lang="ar" className='info' style={{textDecoration:'none'}} href="tel:+20244564540">540 564 244 20+</a></li>
                            </ul>
               
              </div>

              <div class="widget social-media-widget">
                <ul class="social-links">
                  <li>
                    <a style={{ textDecoration: "none" }}>
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a style={{ textDecoration: "none" }}>
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a style={{ textDecoration: "none" }}>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a style={{ textDecoration: "none" }}>
                      <i class="fa-brands fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a style={{ textDecoration: "none" }}>
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
           

  

          
            <div class="specialFooter col-lg-4 col-md-4 col-xs-6">
              <div class="widget about-widget">
                <h3  dir="rtl" lang="ar">
                <img src={logo} alt="" style={{ width: "10%" }} />
                  <a
                    class="logo"
                    style={{ textDecoration: "none", fontFamily: "Maya" }}
                    dir="rtl" lang="ar" >
                    الشركة المصرية السويسرية
                  </a>  
                </h3>
                <p  dir="rtl" lang="ar">
                نحن شركة تصنيع المنسوجات التي تسعى جاهدة لتحقيق الأفضل
                   الجودة مع استخدام أكثر الموارد كفاءة.
                   علاوة على ذلك ، هدفنا هو ترك بصمة في سوق المنسوجات
                   وضمان إرضاء العميل من خلال تقديم أكبر قدر ممكن
                   الجودة بأسعار معقولة.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              class="footer-copyright"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="container">
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
    </>
  );
}
