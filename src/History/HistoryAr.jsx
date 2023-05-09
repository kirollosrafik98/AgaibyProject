import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.css";

export default function HistoryAr() {
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
           تاريخنا
            </h1>
          </Fade>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row " style={{ paddingTop: "3%" }}>
            <div class="col col-xs-12">
              {/* <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px', textAlign:'center'}}>Our <span style={{color:'#C0AB89'}}>History</span></h2></Fade> */}
              <Fade bottom duration={1000} delay={500}>
                {" "}
                <p style={{ textAlign: "justify" }}  dir="rtl" lang="ar">
                  &nbsp;&nbsp;بدأت قصتنا في عام 1960، عندما أسس يوسف عجايبي شركة مصرية لتصنيع الملابس. وبعد أن أصبحت تلك الشركة أحد المصانع الرئيسية في صناعة الملابس، قرر الأبناء وجيه يوسف عجايبي وهاني يوسف عجايبي التوسع في صناعة النسيج. فتم افتتاح المصنع المصري السويسري في عام 2008 بتقنية عالية ومنتجات مبتكرة عالية الجودة. وبناء على ذلك، ومن أجل مواكبة اتجاهات السوق وضمان رضا العملاء، افتتحنا فروعنا الخاصة. وبذلك نمت شركة عائلية لتصبح قوة مهيمنة في تصنيع المنسوجات والخدمات. يشمل المصنع المصري السويسري العديد من خطوط الإنتاج ومرافق الإنتاج، مما يوفر للعملاء مجموعة من التصاميم والأقمشة الأصلية المصرية الأكثر إثارة للإعجاب.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "#000",
            paddingTop: "0px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="1960"
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontFamily: "Maya",
              color: "rgb(118, 99, 69)",
              fontSize: "1.5rem",
            }}
            dir="rtl" lang="ar" >
            تأسيس
          </h3>
          <p  dir="rtl" lang="ar">أسس يوسف عجايبى مصنع ملابس مصرية.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "#000",
            paddingTop: "0px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="1995"
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontFamily: "Maya",
              color: "rgb(118, 99, 69)",
              fontSize: "1.5rem",
            }}
            dir="rtl" lang="ar"  >
            توسع
          </h3>
          <p  dir="rtl" lang="ar">
          في مصنع الملابس ، توسعنا في أصناف معينة.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "#000",
            paddingTop: "0px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2008"
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontFamily: "Maya",
              color: "rgb(118, 99, 69)",
              fontSize: "1.5rem",
            }}
            dir="rtl" lang="ar" >
            تأسيس
          </h3>
          <p  dir="rtl" lang="ar">تأسس المصنع المصري السويسري عام 2008.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "#000",
            paddingTop: "0px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2015"
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontFamily: "Maya",
              color: "rgb(118, 99, 69)",
              fontSize: "1.5rem",
            }}
            dir="rtl" lang="ar" >
            توسع
          </h3>
          <p  dir="rtl" lang="ar">
          في مصنع تصنيع المنسوجات ، توسعنا بشراء آلات جديدة.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "#000",
            paddingTop: "0px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2018"
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontFamily: "Maya",
              color: "rgb(118, 99, 69)",
              fontSize: "1.5rem",
            }}
            dir="rtl" lang="ar" >
            الافتتاح
          </h3>
          <p  dir="rtl" lang="ar">افتتحنا أول متجر لنا في شبرا.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "#000",
            paddingTop: "0px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2020"
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontFamily: "Maya",
              color: "rgb(118, 99, 69)",
              fontSize: "1.5rem",
            }}
            dir="rtl" lang="ar" >
            الافتتاح
          </h3>
          <p  dir="rtl" lang="ar">افتتحنا متجرنا الثاني فى جسر السويس.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <section className=" section-padding w3-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-3">
              <Fade top duration={1000} delay={500}>
                {" "}
                <h2
                  class="w3-center w3-animate-top"
                  style={{
                    fontFamily: "Millania",
                    fontSize: "70px",
                    textAlign: "center",
                  }}
                  dir="rtl" lang="ar" >
                  قابل  <span style={{ color: "#C0AB89" }}>مؤسسينا</span>
                </h2>
              </Fade>
            </div>
            <div className="col-md-5 elCard p-3" style={{ height: "55vh" }}>
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
                           وجيه يوسف عجايبي
                          </h3>
                          <p
                            className="soghayar"
                            style={{
                              fontFamily: "Poppins",
                              textAlign: "center",
                            }}
                            dir="rtl" lang="ar"   >
                         تم اعتماد وجيه كمستشار ميكانيكي من سويسرا. مع سنوات عديدة من الخبرة، حقق الكثير من الإنجازات والتوسعات من خلال مهاراته المتميزة في الاتصال والتخطيط الاستراتيجي في أعماله حيث أصبح الآن أحد الرموز الرئيسية في صناعة النسيج.
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
                ></div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 elCard  p-3" style={{ height: "55vh" }}>
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
                           هاني يوسف عجايبي
                          </h3>
                          <p
                            className="soghayar"
                            style={{
                              fontFamily: "Poppins",
                              textAlign: "center",
                            }}
                            dir="rtl" lang="ar"   >
                         كان هاني معروفا بمهاراته الاستثنائية في الاتصال والإدارة، فضلا عن صدقه وإنصافه ونزاهته. حصل على شهادات إدارة من سويسرا. لديه أيضا خبرة إدارية واسعة في صناعات النسيج والملابس، حيث حقق العديد من الإنجازات.
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
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
