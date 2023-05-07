import React,{useEffect} from 'react';
import Fade from "react-reveal/Fade";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css'

export default function History() {
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
             Our History
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
                    &nbsp;&nbsp; Our story began in 1960, when Youssef Agaiby founded an Egyptian garment manufacturer. After becoming one of the main factories in the garment manufacturing industry, the sons, Wagih Youssef Agaiby and Hany Youssef Agaiby, decided to expand in the textile industry. The Egyptian Swiss Factory opened in 2008 with high technology and innovative high-quality products. Whereupon, in order to keep up with market trends and ensure customer satisfaction, we opened our own branches. A family business grew into a dominant force in textile manufacturing and services. The Egyptian Swiss Factory encompasses various product lines and production facilities, providing clients with Egypt's most impressive collection of original designs and fabrics.</p></Fade>
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
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Establishment</h3>
          <p>
            Youssef Agaiby established an Egyptian garment manufacturer.
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
            In the garment manufacturer, we expanded in particular varieties.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2008"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Foundation</h3>
          <p>
            The Egyptian Swiss Factory was founded in 2008.
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
            In the textile manufacturing factory, we expanded by purchasing new machines.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2018"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Opening</h3>
          <p>
            We opened our first Agaiby store in Shubra.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000',paddingTop:'0px' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2020"
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'Maya', color:'rgb(118, 99, 69)',fontSize:'1.5rem'}}>Opening</h3>
          <p>
            We opened our second Agaiby store in Gesr El Suez.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    
<section className=' section-padding w3-container'>
    <div className="container">
        <div className="row">
          <div className="col-md-12 p-3">
          <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px', textAlign:'center'}}>Meet Our <span style={{color:'#C0AB89'}}>Founders</span></h2></Fade>

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
                      Wagih is certified as a mechanical consultant from Switzerland. With many years of experience, he accomplished a lot of achievements and expansions with his outstanding communication and strategic planning skills in his business as now he is one of the main icons in the textile industry.
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
                      Hany is known for his exceptional communication and management skills, as well as his honesty, fairness, and integrity. He received management certificates from Switzerland. He also has extensive management experience in the textile and garment industries, where he has made numerous achievements.
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
