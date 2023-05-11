import React,{useEffect} from 'react';
import Fade from "react-reveal/Fade";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css'

export default function HistoryFr() {
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
           Notre histoire
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
                    &nbsp;&nbsp;Notre histoire a commencé en 1960, lorsque Youssef Agaiby a fondé un fabricant de vêtements égyptien. Après être devenu l’une des principales usines de l’industrie de la confection, les fils, Wagih Youssef Agaiby et Hany Youssef Agaiby, ont décidé de se développer dans l’industrie textile. L’Egyptian Swiss Factory a ouvert ses portes en 2008 avec la technologie et des produits innovants de haute qualité. Ainsi, afin de suivre les tendances du marché et d’assurer la satisfaction de nos clients, nous avons ouvert nos propres succursales. Une entreprise familiale est devenue une force dominante dans la fabrication de textiles et les services. L’Egyptian Swiss Factory comprend diverses lignes de produits et installations de production, offrant aux clients la collection la plus impressionnante d’Égypte de designs et de tissus originaux.</p></Fade>
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
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Établissement</h3>
          <p>
          Youssef Agaiby crée un fabricant de vêtements égyptien.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="1995"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Expansion</h3>
          <p>
          Dans le fabricant de vêtements, nous avons élargi en particulier les variétés.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2008"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Fondation</h3>
          <p>
          L’Egyptian Swiss Factory a été fondée en 2008.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2015"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Expansion</h3>
          <p>
          Dans l’usine de fabrication textile, nous nous sommes agrandis en achetant de nouvelles machines.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2018"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Ouverture</h3>
          <p>
          Nous avons ouvert notre premier magasin Agaiby à Shubra.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2020"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Ouverture</h3>
          <p>
          Nous avons ouvert notre deuxième magasin Agaiby à Gesr El Suez.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    
<section className=' section-padding w3-container'>
    <div className="container">
        <div className="row">
          <div className="col-md-12 p-3">
          <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px', textAlign:'center'}}>Rencontrez nos <span style={{color:'#C0AB89'}}>Fondateurs</span></h2></Fade>

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
                     Wagih est un consultant en mécanique certifié de Suisse. Avec de nombreuses années d’expérience, il a accompli beaucoup de réalisations et d’expansions avec ses compétences exceptionnelles en communication et en planification stratégique dans son entreprise, il est maintenant un des principales icônes de l’industrie textile.
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
                 Hany est reconnu pour ses compétences exceptionnelles en communication et en gestion, ainsi que pour son honnêteté, son équité et son intégrité. Il a reçu des certificats de gestion de la Suisse. Il possède également une vaste expérience de gestion dans les industries du textile et de l’habillement, où il a réalisé de nombreuses réalisations.
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
        </div>
    </div>
</section> 
</>  )
}
