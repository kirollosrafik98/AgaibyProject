import React ,{useEffect} from "react";
import about from "../images/blackFabric (8).jpg";
import Fade from "react-reveal/Fade";
import ProgressBarSp from "./ProgressBarSp";
import aboutbg from "../images/blackFabric (5).jpg";
export default function AboutSp() {
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
                fontSize: "80px",
              }}
            >
             Sobre nosotros





            </h1>
          </Fade>
        </div>
      </div>

      {/* <div class="pg-title-btm-menu">
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12">
                        <ul>
                            <li class="current"><a href="about.html">Overview</a></li>
                            <li><a href="time-line.html">Company Timeline</a></li>
                            <li><a href="clients.html">Clients</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="careers.html">Career</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    
        </div> */}
      <section class=" section-padding" style={{ paddingTop: "3%" }}>
        {/* <h2 class="hidden">Overview</h2> */}
        <div class="container">
          <div class="row">
            <div class="col col-lg-12  content">
              <Fade top duration={1000} delay={500}>
                {" "}
                <p
                  class="overview-text"
                  style={{
                    color: "#766345",
                    fontSize: "31px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    lineHeight: "1.2em",
                    textAlign: "center",
                    fontFamily: "Maya",
                  }}
                >
                  <span>Más de 20 años</span> de experiencia <span>en la industria textil</span> y de confección.
                </p>
              </Fade>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h3
                      style={{
                        color: "#C0AB89",
                        fontFamily: "Millania",
                        fontSize: "50px",
                      }}
                    >
                      Misión
                    </h3>
                    <Fade left duration={1000} delay={500}>
                      {" "}
                      <p style={{ textAlign: "justify" }}>
                      &nbsp;&nbsp; Nuestro objetivo es brindar a nuestros clientes la calidad que esperan en base a las últimas oportunidades tecnológicas, al tiempo que incrementamos nuestro aporte a la economía del país, participación de mercado, solidez competitiva y dedicación con nuestro personal experimentado, dinámico, alegre y confiable. Nuestra misión es restaurar la transparencia, el respeto y la confianza en la industria textil colaborando con nuestros clientes y siendo líderes en la industria de fabricación textil.
                      </p>
                    </Fade>
                  </div>
{/* <div className="col-md-2"></div> */}
                  <div className="col-md-6">
                    {" "}
                    <h3
                      style={{
                        color: "#C0AB89",
                        fontFamily: "Millania",
                        fontSize: "50px",
                      }}
                    >
                      Visión 
                    </h3>{" "}
                    <Fade right duration={1000} delay={500}>
                      {" "}
                      <p style={{ textAlign: "justify" }}>
                      &nbsp;&nbsp;Como requisito de nuestro concepto de servicio basado en la satisfacción del cliente, ofrecemos todas las oportunidades actuales a su servicio para lograr el objetivo deseado. Con nuestro personal experimentado, equipo tecnológico desarrollado, enfoque profesional y un servicio cálido y sincero, nos esforzamos por lograr algo especial para usted y alcanzar la perfección. Nuestra visión es convertirnos y seguir siendo el fabricante textil más progresista y moderno de Egipto, con la calidad de nuestros productos y servicios exigidos en todo el mundo.
                      </p>
                    </Fade>
                  </div>
                </div>
                <div className="row">
                  <Fade bottom duration={1000} delay={500}>
                    <img src={about} style={{ borderRadius: "20px", width:'100%' }} alt="" />
                  </Fade>
                </div>
                <div className="row " style={{paddingTop:'3%'}}>
                <div class="col col-xs-12">
                    <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px', textAlign:'center'}}>Quiénes  <span style={{color:'#C0AB89'}}>somos </span></h2></Fade>
                    <Fade bottom duration={1000} delay={500}> <p style={{textAlign:"justify"}}>&nbsp;&nbsp; Nos hemos dedicado a desarrollar un modelo de marca en la industria textil. El proceso de fabricación sigue una ruta de gama media-alta, está en constante desarrollo de nuevas variedades y estableciendo la tendencia de moda y funcionalización. Creamos tejidos de alto rendimiento basados en la ética, la responsabilidad social y el desarrollo continuo. Con su calidad de primera clase, tecnología profesional, servicio meticuloso y gestión civilizada y honesta, la Fábrica Egipcio Suiza ha ganado la confianza y elogio de nuevos y antiguos clientes tanto en el país como en el extranjero. La Fábrica Egipcio Suiza valora la gestión de calidad de los tejidos y cuenta con una fuerza técnica sólida: tiene equipos textiles de primera clase, así como instalaciones de desarrollo e investigación de nuevos productos que crean tendencias de producto tanto para el mercado internacional como para el doméstico, todo ello adherido a los valores fundamentales de "honestidad, confianza, calidad primero y cliente primero", impulsando a la empresa a un nivel superior. Con la filosofía empresarial de "cliente primero", estamos ansiosos por colaborar con cada cliente en beneficio mutuo y construir un futuro mejor.</p></Fade>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ paddingTop: "2%" }}
        >
          <div className="row">
            {/* <div className="col-md-6">
                    <p>Textile Services</p>

                    <div class="progress">
  <div class="progress-bar " role="progressbar" style={{width:'96%'}} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>Textile Materials</p>

<div class="progress">
<div class="progress-bar " role="progressbar" style={{width:'75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>       <p>Specialist Fabrics</p>

<div class="progress">
<div class="progress-bar " role="progressbar" style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
</div>       <p>Leather Textile</p>

<div class="progress">
<div class="progress-bar " role="progressbar" style={{width:'85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                    </div> */}
            <ProgressBarSp />
          </div>
        </div>
      </section>
      <section class="image-section">
        <div class="overlay " >
          <h6
            style={{
              color: "#fff",
              lineHeight: "1.2em",
              fontSize: "60px",
              fontFamily: "Millania",
            }}
            className="p-3"
          >
        Nuestras características





          </h6>
          <Fade cascade duration={1000} delay={500}>
            <h2
              style={{
                color: "#C0AB89",
                fontSize: "34px",
                lineHeight: "1.2em",
                fontFamily: "Maya",
                paddingBottom:'2%'
              }}
            >
              Nuestras características
            </h2>
          </Fade>
          {/* <p style={{ color: "#fff", padding: "1% 0 4%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p> */}
          <div className="container">
            <Fade bottom duration={1000} delay={500}>
              {" "}
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="boxIcon"
                    style={{
                      backgroundColor: "#766345",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "18px",
                      fontSize: "24px",
                      display: "inline-block",
                      lineHeight: "1",
                      transition: "all .3s",
                      boxSizing: "border-box",
                    }}
                  >
                    <i class="fa-solid fa-thumbs-up fs-1"></i>{" "}
                  </div>
                  <h5
                    className="p-3"
                    style={{
                      color: "#C0AB89",
                      fontSize: "24px",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      lineHeight: "1.7em",
                      fontFamily: "Maya",
                    }}
                  >
                    Producto de calidad





                  </h5>
                  {/* <p style={{ color: "#fff" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </div>
                <div className="col-md-4">
                  <div
                    className="boxIcon"
                    style={{
                      backgroundColor: "#766345",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "18px",
                      fontSize: "24px",
                      display: "inline-block",
                      lineHeight: "1",
                      transition: "all .3s",
                      boxSizing: "border-box",
                    }}
                  >
                    <i class="fa-solid fa-dollar-sign fs-1"></i>{" "}
                  </div>
                  <h5
                    className="p-3"
                    style={{
                      color: "#C0AB89",
                      fontSize: "24px",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      lineHeight: "1.7em",
                      fontFamily: "Maya",
                    }}
                  >
                   Precio competitivo





                  </h5>
                  {/* <p style={{ color: "#fff" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </div>
                <div className="col-md-4">
                  <div
                    className="boxIcon"
                    style={{
                      backgroundColor: "#766345",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "18px",
                      fontSize: "24px",
                      display: "inline-block",
                      lineHeight: "1",
                      transition: "all .3s",
                      boxSizing: "border-box",
                    }}
                  >
                    <i class="fa-solid fa-headset fs-1"></i>{" "}
                  </div>
                  <h5
                    className="p-3"
                    style={{
                      color: "#C0AB89",
                      fontSize: "24px",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      lineHeight: "1.7em",
                      fontFamily: "Maya",
                    }}
                  >
                    Soporte 24/7





                  </h5>
                  {/* <p style={{ color: "#fff" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <img src={aboutbg} alt="Your image" />
      </section>

      {/* <section class="fun-fact section-padding">
            <div class="container">
                <div class="row section-title-s4">
                    <div class="col col-xs-12">
                        <h2>Some facts in <span>Numbers</span></h2>
                    </div>
                </div> 
        
                <div class="row start-count">
                    <div class="col col-sm-4">
                        <div class="grid">
                            <h4><span  class="counter" data-count="1200">00</span><span>+</span></h4>
                            <h3>Projects</h3>
                            <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p>
                        </div>
                    </div>
                    <div class="col col-sm-4">
                        <div class="grid">
                            <h4><span  class="counter" data-count="800">00</span><span>+</span></h4>
                            <h3>Clients</h3>
                            <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p>
                        </div>
                    </div>
                    <div class="col col-sm-4">
                        <div class="grid">
                            <h4><span  class="counter" data-count="99">00</span><span>%</span></h4>
                            <h3>Satisfaction</h3>
                            <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p>
                        </div>
                    </div>
                </div>
            </div> 
        </section> */}
    </>
  );
}
