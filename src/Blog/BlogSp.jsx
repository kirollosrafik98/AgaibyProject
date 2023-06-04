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
export default function BlogSp() {
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
              Blogs
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
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                       Los ingenieros industriales reemplazarán a los...
                        </a>
                      </h3>
                      <span class="entry-date">Febrero 6, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog2"
                          style={{ textDecoration: "none" }}
                          class="read-more"
                        >
                          Leer más
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
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         10 telas para usar en verano para combatir el calor
                        </a>
                      </h3>
                      <span class="entry-date">Marzo 10, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog3"
                          style={{ textDecoration: "none" }}
                          class="read-more"
                        >
                          Leer más
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
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                          Avances en tecnologías de tejido de telas
                        </a>
                      </h3>
                      <span class="entry-date">Marzo 13, 2018</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog4"
                          style={{ textDecoration: "none" }}
                          class="read-more"
                        >
                          Leer más
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
                    <div
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         Estrategias para el abastecimiento de textiles y...
                        </a>
                      </h3>
                      <span class="entry-date"> Febrero 1, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog5"
                          style={{ textDecoration: "none" }}
                          class="read-more"
                        >
                          Leer más
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
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         La coalición STTI da la bienvenida a la compra de...
                        </a>
                      </h3>
                      <span class="entry-date">Marzo 14, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog6"
                          style={{ textDecoration: "none" }}
                          class="read-more"
                        >
                          Leer más
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
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                          Fibra de subproductos lácteos: una nueva dimensión
                        </a>
                      </h3>
                      <span class="entry-date">Marzo 18, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog7"
                          style={{ textDecoration: "none" }}
                          class="read-more"
                        >
                          Leer más
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
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                          Futuro de los Textiles con Nanotecnología
                        </a>
                      </h3>
                      <span class="entry-date">Marzo 16, 2023</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog8"
                          style={{ textDecoration: "none" }}
                          class="read-more"
                        >
                          Leer más
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
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
Sostenibilidad en el procesamiento textil                        </a>
                      </h3>
                      <span class="entry-date">Septiembre 18, 2022</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog9"
                          style={{ textDecoration: "none" }}
                          class="read-more"
                        >
                          Leer más
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
                      class="entry-details"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <h3>
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                       Estudio de aplicación de Óxido de Grafeno reducido...
                        </a>
                      </h3>
                      <span class="entry-date"> Febrero 23, 2022</span>
                      <div class="entry-footer">
                        <Link
                          to="/blog10"
                          style={{ textDecoration: "none" }}
                          class="read-more"
                        >
                          Leer más
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
