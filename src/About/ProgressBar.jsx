import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";

const ProgressBar = ({ percentage }) => {
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
            Our Values
          </h6>

          {/* <h2 style={{color:'#766345', fontSize:'48px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', fontFamily:'Maya'}}>Your Satisfaction Is Our Priority</h2> */}
        </Fade>
        <Fade left duration={1000} delay={500}>
          {" "}
          <p style={{ textAlign: "justify" }}>
          &nbsp;&nbsp; There are genuine people behind the Egyptian Swiss Factory that are
            treated with respect, fairness, and politeness. We believe in
            working in harmony with the environment to create products that
            reflect our values, allowing us to be the leader and creative
            establishment in our sector while also providing customer
            satisfaction.
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
              <span style={{ paddingLeft: "2%" , fontSize:'15px'}}>High Quality</span>
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
              <span style={{ paddingLeft: "2%" , fontSize:'15px'}}>Cost Effective</span>
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
              <span style={{ paddingLeft: "2%", fontSize:'15px' }}>Creativity</span>
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
              <span style={{ paddingLeft: "2%" , fontSize:'15px'}}>Customer Satisfaction</span>
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
              <span style={{ paddingLeft: "2%", fontSize:'15px' }}>Employee Satisfaction</span>
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
              <span style={{ paddingLeft: "2%", fontSize:'15px' }}>Result Oriented</span>
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
            Specialist
          </h6>
        </Fade>
        <Fade right duration={1000} delay={500}>
          {" "}
          <h2
            style={{
              color: "#766345",
              fontSize: "48px",
              fontWeight: "bold",
              textTransform: "capitalize",
              lineHeight: "1.2em",
              fontFamily: "Maya",
            }}
          >
            Your Satisfaction Is Our Priority
          </h2>
        </Fade>
        <div>
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}>
            Textile Services
          </p>
          <ProgressBar percentage={96} />
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}>
            Textile Materials
          </p>
          <ProgressBar percentage={89} />
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}>
            Specialist Fabrics
          </p>
          <ProgressBar percentage={93} />
          {/* <p style={{fontFamily:'Maya', fontSize:'20px'}}>Leather Textile</p>
        <ProgressBar percentage={85} /> */}
        </div>
      </Element>
    </>
  );
};

export default ProgressSection;
