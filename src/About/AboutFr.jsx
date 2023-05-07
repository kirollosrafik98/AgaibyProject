import React ,{useEffect} from "react";
import about from "../images/blackFabric (8).jpg";
import Fade from "react-reveal/Fade";
import ProgressBarFr from "./ProgressBarFr";
import aboutbg from "../images/blackFabric (5).jpg";
export default function About() {
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
             À propos de nous
            </h1>
          </Fade>
        </div>
      </div>

      <section class=" section-padding" style={{ paddingTop: "3%" }}>
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
                  <span>20+ ans </span> d'expérience  <span> dans l'industrie textile</span> et 
                  vestimentaire
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
                      Mission
                    </h3>
                    <Fade left duration={1000} delay={500}>
                      {" "}
                      <p style={{ textAlign: "justify" }}>
                      &nbsp;&nbsp; Notre objectif est de fournir à nos clients la qualité qu’ils attendent en fonction des opportunités technologiques les plus récentes, tout en augmentant notre contribution à l’économie du pays, notre part de marché, notre puissance concurrentielle et notre dévouement avec notre personnel expérimenté, dynamique, joyeux et fiable. Notre mission est de rétablir la transparence, le respect et la confiance dans l’industrie textile en collaborant avec nos clients et en étant un chef de file dans l’industrie de la fabrication textile.
                      </p>
                    </Fade>
                  </div>
                  <div className="col-md-6">
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
                      &nbsp;&nbsp; En tant qu’exigence de notre concept de service basé sur la satisfaction du client, nous offrons toutes les opportunités actuelles dans votre service pour atteindre l’objectif souhaité. Avec notre personnel expérimenté, notre équipement technologique développé, notre approche professionnelle et notre service chaleureux et sincère, nous nous efforçons d’accomplir quelque chose de spécial pour vous et d’atteindre la perfection. Notre vision est de devenir et de rester le fabricant de textiles le plus progressiste et le plus moderne d’Égypte, la qualité de nos produits et de nos services étant exigée dans le monde entier.
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
                    <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px', textAlign:'center'}}>À propos de  <span style={{color:'#C0AB89'}}>nous</span></h2></Fade>
                    <Fade bottom duration={1000} delay={500}> <p style={{textAlign:"justify"}}>&nbsp;&nbsp; Nous nous sommes consacrés au développement d’un modèle de marque dans l’industrie textile. Le processus de fabrication suit une voie moyenne à haut de gamme, développe constamment de nouvelles variétés et définit la tendance de la mode et de la fonctionnalisation. Nous créons des tissus performants basés sur l’éthique, la responsabilité sociale et le développement continu. Avec sa qualité, sa technologie professionnelle, son service méticuleux et sa gestion civilisée et honnête, l’Egyptian Swiss Factory a gagné la confiance et les éloges de nouveaux et anciens clients en Égypte et à l’étranger. L’Egyptian Swiss Factory accorde une grande importance à la gestion de la qualité des tissus et dispose d’une force technique forte: elle dispose d’équipements textiles de premier ordre ainsi que de nouvelles installations de développement et de recherche de produits qui créent des tendances de produits pour les marchés internationaux et nationaux, tout en adhérant aux valeurs fondamentales de « l’honnêteté, la fiabilité, la qualité et le client d’abord », propulsant l’entreprise à un niveau supérieur.
Avec la philosophie d’entreprise « client d’abord », nous sommes impatients de collaborer avec chaque client pour un bénéfice mutuel et de construire un avenir meilleur.
</p></Fade>
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
         
            <ProgressBarFr />
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
            Nos caractéristiques
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
              Quelles sont nos caractéristiques
            </h2>
          </Fade>
       
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
                    Produit de qualité
                  </h5>
               
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
                    "Prix compétitif
                  </h5>
                 
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
                    Assistance 24h/24 et 7j/7
                  </h5>
                 
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <img src={aboutbg} alt="Your image" />
      </section>

    
    </>
  );
}
