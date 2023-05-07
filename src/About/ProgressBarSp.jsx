import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";

const ProgressBarSp = ({ percentage }) => {
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
            Valores
          </h6>

          {/* <h2 style={{color:'#766345', fontSize:'48px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', fontFamily:'Maya'}}>Your Satisfaction Is Our Priority</h2> */}
        </Fade>
        <Fade left duration={1000} delay={500}>
          {" "}
          <p style={{ textAlign: "justify" }}>
          &nbsp;&nbsp; Hay personas genuinas detrás de la Fábrica suiza egipcia que son tratadas con respeto, justicia y cortesía. Creemos en trabajar en armonía con el medio ambiente para crear productos que reflejen nuestros valores, permitiéndonos ser el establecimiento creativo en nuestra industria mientras aseguramos la satisfacción del cliente.
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
              <span style={{ paddingLeft: "2%" , fontSize:'13px'}}>Alta calidad</span>
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
              <span style={{ paddingLeft: "2%" , fontSize:'13px'}}>Económico </span>
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
              <span style={{ paddingLeft: "2%", fontSize:'13px' }}>Creatividad</span>
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
              <span style={{ paddingLeft: "2%" , fontSize:'13px'}}>Satisfacción del cliente</span>
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
              <span style={{ paddingLeft: "2%", fontSize:'13px' }}>Satisfacción del empleado</span>
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
              <span style={{ paddingLeft: "2%", fontSize:'13px' }}>Orientado a resultados</span>
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
            Especialista
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
           Tu satisfacción es nuestra prioridad





          </h2>
        </Fade>
        <div>
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}>
          Servicios textiles




</p>
          <ProgressBarSp percentage={96} />
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}>
          Materiales textiles




</p>
          <ProgressBarSp percentage={89} />
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}>
          Tejidos especializados




</p>
          <ProgressBarSp percentage={93} />
          {/* <p style={{fontFamily:'Maya', fontSize:'20px'}}>Leather Textile</p>
        <ProgressBar percentage={85} /> */}
        </div>
      </Element>
    </>
  );
};

export default ProgressSection;
