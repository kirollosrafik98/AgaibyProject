import React from "react";
import about from "../images/blackFabric (8).jpg";
import Fade from "react-reveal/Fade";
import ProgressBar from "./ProgressBar";
import aboutbg from "../images/aboutbg.jpg";
export default function About() {
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
              About Us
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
                    fontSize: "48px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    lineHeight: "1.2em",
                    textAlign: "center",
                    fontFamily: "Maya",
                  }}
                >
                  <span>20+ Years</span> Of Experience <span>In Textile</span> &
                  Garment Industry
                </p>
              </Fade>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h3
                      style={{
                        color: "#C0AB89",
                        fontFamily: "Millania",
                        fontSize: "50px",
                      }}
                    >
                      Mission
                    </h3>
                    <Fade left duration={1000} delay={500}>
                      {" "}
                      <p style={{ textAlign: "justify" }}>
                      &nbsp;&nbsp; Our goal is to provide our customers with the quality
                        that they expect based on the most recent technological
                        opportunities, while also increasing our contribution to
                        the country's economy, market share, competitive power,
                        and devotion with our experienced, dynamic, cheerful,
                        and dependable personnel. Our mission is to re-establish
                        transparency, respect, and confidence in the textile
                        industry by collaborating with our customers and be a
                        leader in the textile manufacturing industry.
                      </p>
                    </Fade>
                  </div>

                  <div className="col">
                    {" "}
                    <h3
                      style={{
                        color: "#C0AB89",
                        fontFamily: "Millania",
                        fontSize: "50px",
                      }}
                    >
                      Vision
                    </h3>{" "}
                    <Fade right duration={1000} delay={500}>
                      {" "}
                      <p style={{ textAlign: "justify" }}>
                      &nbsp;&nbsp; As a requirement of our customer-satisfaction-based
                        service concept, we offer all current opportunities into
                        your service to achieve the desired goal. With our
                        experienced staff, developed technological equipment,
                        professional approach, and warm and sincere service we
                        strive to accomplish something special for you and
                        achieve perfection. Our vision is to become and then
                        remain Egypt's most progressive and updated textile
                        manufacturer, with our products and service quality
                        being demanded globally.
                      </p>
                    </Fade>
                  </div>
                </div>
                <div className="row">
                  <Fade bottom duration={1000} delay={500}>
                    <img src={about} style={{ borderRadius: "20px", height:'70vh' }} alt="" />
                  </Fade>
                </div>
                <div className="row " style={{paddingTop:'3%'}}>
                <div class="col col-xs-12">
                    <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px', textAlign:'center'}}>About <span style={{color:'#C0AB89'}}>Us</span></h2></Fade>
                    <Fade bottom duration={1000} delay={500}> <p style={{textAlign:"justify"}}>&nbsp;&nbsp; We have dedicated ourselves to developing a brand model in the textile industry. The manufacturing process follow a mid-to-high-end route, is constantly developing new varieties, and setting the fashion and functionalization trend. We create high-performance fabrics based on ethics, social responsibility, and continuous development. With its first-rate quality, professional technology, meticulous service, and civilised and honest management, the Egyptian Swiss Factory has earned the trust and praise of new and old customers both at home and abroad. The Egyptian Swiss Factory places a premium on fabric quality management and has a strong technical force: it has first-rate textile equipment as well as new product development and research facilities that create product trends for both the international and domestic markets, all while adhering to the core values of "honesty, trustworthiness, quality first, and customer first," propelling the company to a higher level. With the "customer first" business philosophy, we are eager to collaborate, with each customer for mutual benefit and to build a better future.</p></Fade>
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
            <ProgressBar />
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
            Our Features
          </h6>
          <Fade cascade duration={1000} delay={500}>
            <h2
              style={{
                color: "#C0AB89",
                fontSize: "36px",
                lineHeight: "1.2em",
                fontFamily: "Maya",
                paddingBottom:'2%'
              }}
            >
              What’s Our Features
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
                    Quality Product
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
                    Competitive Price
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
                    24/7 Support
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
