import React, { useEffect } from "react";
import blog1 from "../images/firstBlog.png";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import blog4 from "../images/about.jpg";
import blog5 from "../images/big_Big.jpg";
import blog6 from "../images/STTI.jpg";
import blog7 from "../images/fiber.png";
import blog8 from "../images/image-34.png";
import blog9 from "../images/sora.jpg";
import blog10 from "../images/blog10.jpg";

// import Fade from 'react-reveal/Fade';
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
export default function BlogAr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div class="page-title">
        <div class="container">
          <Fade top duration={1000} delay={500}>
            {" "}
            <h1
              style={{
                color: "#C0AB89",
                fontFamily: "Millania",
                fontSize: "60px",
              }}
            >
              مدونة
            </h1>
          </Fade>

          {/* <h1>Blog</h1> */}
        </div>
      </div>

      <section
        class="blog-content-section section-padding"
        style={{ paddingTop: "60px" }}
      >
        <div class="container">
          <Element name="blog">
            <div class="row blog-s2-grids ">
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                      <img
                        src={blog1}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      />
                    </div>
                    <div  dir="rtl" lang="ar"
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3  dir="rtl" lang="ar">
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         زيادة الابتكار في صناعة النسيج 
                         <br />
                         والملابس
                        </a>
                      </h3>
                      <span class="entry-date"  dir="rtl" lang="ar">مارس 16, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog1"
                          style={{ textDecoration: "none",float:'right' }}
                          class="read-more"
                        >
                         اقرأ المزيد
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                      <img
                        src={blog2}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      />
                    </div>
                    <div
                      class="entry-details"  dir="rtl" lang="ar"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3  dir="rtl" lang="ar">
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         هل سيحل المهندسون الصناعيون محل مديري الإنتاج التقليديين؟

                        </a>
                      </h3>
                      <span class="entry-date">فبراير 6, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog2"
                          style={{ textDecoration: "none", float:'right' }}
                          class="read-more"
                        >
                         اقرأ المزيد
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                      <img
                        src={blog3}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      />
                    </div>
                    <div
                      class="entry-details"  dir="rtl" lang="ar"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3  dir="rtl" lang="ar">
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         10 أقمشة لارتدائها في الصيف للتغلب على 
                         <br />
                         الحرارة
                        </a>
                      </h3>
                      <span class="entry-date">مارس 10, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog3"
                          style={{ textDecoration: "none", float:'right' }}
                          class="read-more"
                        >
                         اقرأ المزيد
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                      <img
                        src={blog4}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      />
                    </div>
                    <div
                      class="entry-details"  dir="rtl" lang="ar"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3  dir="rtl" lang="ar">
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                        التطورات في تقنيات نسج 
                        <br />
                        النسيج
                        </a>
                      </h3>
                      <span class="entry-date">مارس 13, 2018</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog4"
                          style={{ textDecoration: "none" , float:'right'}}
                          class="read-more"
                        >
                         اقرأ المزيد
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                      <img
                        src={blog5}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      />
                    </div>
                    <div  dir="rtl" lang="ar"
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                          استراتيجيات لمصادر المنسوجات 
                          <br />
                          والملابس
                        </a>
                      </h3>
                      <span class="entry-date"> فبراير 1, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog5"
                          style={{ textDecoration: "none", float:'right' }}
                          class="read-more"
                        >
                         اقرأ المزيد
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                      <img
                        src={blog6}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      />
                    </div>
                    <div
                      class="entry-details"  dir="rtl" lang="ar"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         يرحب تحالف STTI بممارسات الشراء المحسنة من قبل BRM
                        </a>
                      </h3>
                      <span class="entry-date">مارس 14, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog6"
                          style={{ textDecoration: "none",float:'right'}}
                          class="read-more"
                        >
                         اقرأ المزيد
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                      <img
                        src={blog7}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      />
                    </div>
                    <div
                      class="entry-details"  dir="rtl" lang="ar"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         الألياف من المنتجات الثانوية للحليب - بعد 
                         <br />
                         جديد
                        </a>
                      </h3>
                      <span class="entry-date">مارس 18, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog7"
                          style={{ textDecoration: "none", float:'right' }}
                          class="read-more"
                        >
                         اقرأ المزيد
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                      <img
                        src={blog8}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      />
                    </div>
                    <div
                      class="entry-details"  dir="rtl" lang="ar"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                        مستقبل المنسوجات بتقنية 
                        <br />
                        النانو
                        </a>
                      </h3>
                      <span class="entry-date">مارس 16, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog8"
                          style={{ textDecoration: "none", float:"right" }}
                          class="read-more"
                        >
                         اقرأ المزيد
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                      <img
                        src={blog9}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      />
                    </div>
                    <div
                      class="entry-details"  dir="rtl" lang="ar"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                          الاستدامة في معالجة<br /> المنسوجات
                        </a>
                      </h3>
                      <span class="entry-date">سبتمبر 18, 2022</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog9"
                          style={{ textDecoration: "none", float:'right' }}
                          class="read-more"
                        >
                         اقرأ المزيد
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>

              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                      <img
                        src={blog10}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      />
                    </div>
                    <div
                      class="entry-details"  dir="rtl" lang="ar"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         دراسة حول تطبيق أكسيد الجرافين المختزل على نسيج القطن للحصول على لمسة    
                        </a>
                      </h3>
                      <span class="entry-date"  dir="rtl" lang="ar"> فبراير 23, 2022</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog10"
                          style={{ textDecoration: "none" , float:'right'}}
                          class="read-more"
                        >
                         اقرأ المزيد
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </Element>
        </div>
      </section>
    </>
  );
}
