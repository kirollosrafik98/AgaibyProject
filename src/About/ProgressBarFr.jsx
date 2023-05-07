import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";

const ProgressBarFr = ({ percentage }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    progressRef.current.style.width = `${percentage}%`;
  }, [percentage]);

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: 0 }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        ref={progressRef}
      ></div>
    </div>
  );
};

const ProgressSection = () => {
  return (
    <>
      <div className="col-md-5">
        <Fade left duration={1000} delay={500}>
          <h6
            style={{
              color: "#766345",
              fontSize: "48px",
              fontWeight: "600",
              textTransform: "capitalize",
              lineHeight: "1.2em",
              fontFamily: "Millania",
            }}
          >
           Nos valeurs
          </h6>

          {/* <h2 style={{color:'#766345', fontSize:'48px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', fontFamily:'Maya'}}>Your Satisfaction Is Our Priority</h2> */}
        </Fade>
        <Fade left duration={1000} delay={500}>
          {" "}
          <p style={{ textAlign: "justify" }}>
          &nbsp;&nbsp; Il y a des gens authentiques derrière l’Egyptian Swiss Factory qui sont traités avec respect, équité et politesse. Nous croyons en un travail en harmonie avec l’environnement pour créer des produits qui reflètent nos valeurs, ce qui nous permet d’être l’établissement créatif de notre secteur tout en assurant la satisfaction du client.
          </p>
        </Fade>

        <ul className="row" style={{paddingLeft:'0'}}>
          <div className="col">
            {" "}
            <li
              style={{
                marginTop: "calc(16px/2)",
                paddingBottom: "calc(16px/2)",
              }}
            >
              <span>
                <i
                  style={{ color: "#C0AB89" }}
                  class="fa-solid fa-circle-check fs-4"
                ></i>
              </span>
              <span style={{ paddingLeft: "2%" , fontSize:'13px'}}>Haute qualité</span>
            </li>
            <li
              style={{
                marginTop: "calc(28px)",
                paddingBottom: "calc(16px/2)",
              }}
            >
              <span>
                <i
                  style={{ color: "#C0AB89" }}
                  class="fa-solid fa-circle-check fs-4"
                ></i>
              </span>
              <span style={{ paddingLeft: "2%" , fontSize:'13px'}}>Rentable</span>
            </li>
            <li
              style={{
                marginTop: "calc(28px)",
                paddingBottom: "calc(16px/2)",
              }}
            >
              <span>
                <i
                  style={{ color: "#C0AB89" }}
                  class="fa-solid fa-circle-check fs-4"
                ></i>
              </span>
              <span style={{ paddingLeft: "2%", fontSize:'13px' }}>Créativité</span>
            </li>
          </div>
          <div className="col">
            {" "}
            <li
              style={{
                marginTop: "calc(16px/2)",
                paddingBottom: "calc(16px/2)",
              }}
            >
              <span>
                <i
                  style={{ color: "#C0AB89" }}
                  class="fa-solid fa-circle-check fs-4"
                ></i>
              </span>
              <span style={{ paddingLeft: "2%" , fontSize:'13px'}}>Satisfaction du client</span>
            </li>
            <li
              style={{
                marginTop: "calc(28px)",
                paddingBottom: "calc(16px/2)",
              }}
            >
              <span>
                <i
                  style={{ color: "#C0AB89" }}
                  class="fa-solid fa-circle-check fs-4"
                ></i>
              </span>
              <span style={{ paddingLeft: "2%", fontSize:'13px' }}>Satisfaction des employés</span>
            </li>
            <li
              style={{
                marginTop: "calc(28px)",
                paddingBottom: "calc(16px/2)",
              }}
            >
              <span>
                <i
                  style={{ color: "#C0AB89" }}
                  class="fa-solid fa-circle-check fs-4"
                ></i>
              </span>
              <span style={{ paddingLeft: "2%", fontSize:'13px' }}>Axé sur les résultats</span>
            </li>
          </div>
        </ul>
      </div>

      <div className="col-md-1"></div>
      <Element className="col-md-6" name="progress-section">
        <Fade right duration={1000} delay={500}>
          {" "}
          <h6
            style={{
              color: "#766345",
              fontSize: "48px",
              fontWeight: "600",
              textTransform: "capitalize",
              lineHeight: "1.2em",
              fontFamily: "Millania",
            }}
          >
            Spécialiste
          </h6>
        </Fade>
        <Fade right duration={1000} delay={500}>
          {" "}
          <h2
            style={{
              color: "#766345",
              fontSize: "31px",
              fontWeight: "bold",
              textTransform: "capitalize",
              lineHeight: "1.2em",
              fontFamily: "Maya",
            }}
          >
           Votre satisfaction est notre priorité
          </h2>
        </Fade>
        <div>
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}>
          Services textiles
          </p>
          <ProgressBarFr percentage={96} />
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}>
          Matériaux textiles
          </p>
          <ProgressBarFr percentage={89} />
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}>
          Tissus spécialisés
          </p>
          <ProgressBarFr percentage={93} />
          {/* <p style={{fontFamily:'Maya', fontSize:'20px'}}>Leather Textile</p>
        <ProgressBar percentage={85} /> */}
        </div>
      </Element>
    </>
  );
};

export default ProgressSection;
