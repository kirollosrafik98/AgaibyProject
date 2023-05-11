import React,{useEffect} from 'react';
import Fade from "react-reveal/Fade";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css'

export default function HistorySp() {
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
             Nuestra historia
            </h1>
          </Fade>
        </div>
      </div>
      <section>
        <div className="container">
        <div className="row " style={{paddingTop:'3%'}}>
                <div class="col col-xs-12">
                    {/* <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px', textAlign:'center'}}>Our <span style={{color:'#C0AB89'}}>History</span></h2></Fade> */}
                    <Fade bottom duration={1000} delay={500}> <p style={{textAlign:"justify"}}>
                    &nbsp;&nbsp; Nuestra historia comenzó en 1960, cuando Youssef Agaiby fundó un fabricante de ropa egipcio. Después de convertirse en una de las principales fábricas de la industria de la confección, los hijos, Wagih Youssef Agaiby y Hany Youssef Agaiby, decidieron expandirse en la industria textil. La fábrica suiza egipcia abrió sus puertas en 2008 con alta tecnología y productos innovadores de alta calidad. Entonces, para estar al día con las tendencias del mercado y asegurar la satisfacción del cliente, abrimos nuestras propias sucursales. Una empresa familiar se convirtió en una fuerza dominante en la fabricación y los servicios textiles. La fábrica suiza egipcia abarca varias líneas de productos e instalaciones de producción, proporcionando a los clientes la colección más impresionante de diseños y telas originales de Egipto.</p></Fade>
                    </div>
                </div>
        </div>
      </section>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000' ,paddingTop:'0px'}}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="1960"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Establecimiento</h3>
          <p>
          Youssef Agaiby estableció un fabricante de ropa egipcio.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="1995"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Expansión</h3>
          <p>
          En la confección de prendas, nos expandimos en variedades particulares.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2008"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>la fundación</h3>
          <p>
          La fábrica suiza egipcia fue fundada en 2008.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2015"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Expansión</h3>
          <p>
          En la fábrica de confección textil, ampliamos con la compra de nuevas máquinas.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2018"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Apertura</h3>
          <p>
          Abrimos nuestra primera tienda Agaiby en Shubra.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2020"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Apertura</h3>
          <p>
          Abrimos nuestra segunda tienda Agaiby en Gesr El Suez.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    
<section className=' section-padding w3-container'>
    <div className="container">
        <div className="row">
          <div className="col-md-12 p-3">
          <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px', textAlign:'center'}}>Conoce a nuestros <span style={{color:'#C0AB89'}}>Fundadores</span></h2></Fade>

          </div>
        <div className="col-md-5 elCard p-3" style={{height:'55vh'}}>
            <div className="mainContainer">
              <div className="theCard">
                {/* <div className="theFrontAbdel"></div> */}
                <div
                  className="theback"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="container">
                    <div
                      className="row "
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="col-md-12">
                       

                        <h3
                          className="text-center"
                          style={{
                            fontFamily: "Playfair Display",
                            fontSize: "34px",
                            fontWeight: "900",
                            lineHeight: "1.2em",
                          }}
                        >
                        Wagih Youssef Agaiby
                        </h3>
                        <p
                          className="soghayar"
                          style={{ fontFamily: "Poppins", textAlign: "center" }}
                        >
                    Wagih está certificado como consultor mecánico de Suiza. Con muchos años de experiencia, logró muchos logros y expansiones con sus habilidades sobresalientes de comunicación y planificación estratégica en su negocio, ya que ahora es uno de los principales íconos de la industria textil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container p-2 smedia">
              <div
                className="row smediaInternal"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "11%",
                }}
              >
         
              </div>

            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5 elCard  p-3" style={{height:'55vh'}}>
            <div className="mainContainer">
              <div className="theCard">
                {/* <div className="theFrontHany"></div> */}
                <div
                  className="theback"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="container">
                    <div
                      className="row "
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="col-md-12">
                    

                        <h3
                          className="text-center"
                          style={{
                            fontFamily: "Playfair Display",
                            fontSize: "34px",
                            fontWeight: "900",
                            lineHeight: "1.2em",
                          }}
                        >
Hany Youssef Agaiby                        </h3>
                        <p
                          className="soghayar"
                          style={{ fontFamily: "Poppins", textAlign: "center" }}
                        >
Hany es conocido por sus excepcionales habilidades de comunicación y gestión, así como por su honestidad, equidad e integridad. Recibió certificados de gestión de Suiza. También tiene una amplia experiencia en gestión en las industrias textil y de la confección, donde ha obtenido numerosos logros.                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container p-2 smedia">
              <div
                className="row smediaInternal"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "11%",
                }}
              >
         
              </div>

            </div>
          </div>
        </div>
    </div>
</section> 
</>  )
}
