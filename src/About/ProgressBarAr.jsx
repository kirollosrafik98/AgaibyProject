import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";

const ProgressBarAr = ({ percentage }) => {
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
            dir="rtl" lang="ar"
          >
            متخصص
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
            dir="rtl" lang="ar"
          >
          رضاك هو أولويتنا
          </h2>
        </Fade>
        <div>
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}  dir="rtl" lang="ar">
          خدمات المنسوجات
          </p>
          <ProgressBarAr percentage={96}/>
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}  dir="rtl" lang="ar">
          مواد النسيج
          </p>
          <ProgressBarAr percentage={89} />
          <p style={{ fontFamily: "Maya", fontSize: "20px" }}  dir="rtl" lang="ar">
          أقمشة متخصصة
          </p>
          <ProgressBarAr percentage={93} />
          {/* <p style={{fontFamily:'Maya', fontSize:'20px'}}>Leather Textile</p>
        <ProgressBar percentage={85} /> */}
        </div>
      </Element>
      <div className="col-md-1"></div>

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
            dir="rtl" lang="ar"
          >
            القيم
          </h6>

          {/* <h2 style={{color:'#766345', fontSize:'48px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', fontFamily:'Maya'}}>Your Satisfaction Is Our Priority</h2> */}
        </Fade>
        <Fade left duration={1000} delay={500}>
          {" "}
          <p style={{ textAlign: "justify" }}  dir="rtl" lang="ar">
          &nbsp;&nbsp; هناك أشخاص حقيقيون وراء الشركة المصرية السويسرية  يعاملون باحترام وإنصاف وأدب. نحن نؤمن بالعمل في وئام مع البيئة لإنشاء منتجات تحافظ على البيئة وتعكس قيمنا، مما يسمح لنا بأن نكون المؤسسة الرائدة والإبداعية في قطاعنا مع الحصول على رضا العملاء أيضا.
          </p>
        </Fade>

        <ul className="row" style={{paddingLeft:'0'}}>
          <div className="col" dir="rtl" lang="ar">
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
              <span style={{ paddingLeft: "2%" , fontSize:'13px'}}  dir="rtl" lang="ar">	جودة عالية</span>
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
              <span style={{ paddingLeft: "2%" , fontSize:'13px'}}  dir="rtl" lang="ar">	فعالية من حيث التكلفة</span>
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
              <span style={{ paddingLeft: "2%", fontSize:'13px' }}  dir="rtl" lang="ar">	إبداع</span>
            </li>
          </div>
          <div className="col" dir="rtl" lang="ar">
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
              <span style={{ paddingLeft: "2%" , fontSize:'13px'}}  dir="rtl" lang="ar">	رضا العملاء</span>
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
              <span style={{ paddingLeft: "2%", fontSize:'13px' }}  dir="rtl" lang="ar">	رضا الموظفين</span>
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
              <span style={{ paddingLeft: "2%", fontSize:'13px' }}  dir="rtl" lang="ar">	النتائج الموجهة</span>
            </li>
          </div>
        </ul>
      </div>

    
    </>
  );
};

export default ProgressSection;
