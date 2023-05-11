import React ,{useEffect} from "react";
import about from "../images/blackFabric (8).jpg";
import Fade from "react-reveal/Fade";
import ProgressBarAr from "./ProgressBarAr";
import aboutbg from "../images/blackFabric (5).jpg";
export default function AboutAr() {
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
             من نحن
            </h1>
          </Fade>
        </div>
      </div>

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
                    fontSize: "31px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    lineHeight: "1.2em",
                    textAlign: "center",
                    fontFamily: "Maya",
                  }}
                >  
                  <span> أكثر من 20 عامًا </span> من الخبرة <span>في مجال المنسوجات</span> وصناعة الملابس
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
                      dir="rtl" lang="ar"
                    >
                      الرسالة
                    </h3>
                    <Fade left duration={1000} delay={500}>
                      {" "}
                      <p style={{ textAlign: "justify" }}     dir="rtl" lang="ar">
                      &nbsp;&nbsp;هدفنا هو تزويد عملائنا بالجودة التي يتوقعونها بناء على الفرص التكنولوجية الحديثة، مع زيادة مساهمتنا في اقتصاد البلاد، وحصتنا في السوق، وقوتنا التنافسية، والتفاني مع موظفينا ذوي الخبرة والديناميكية والثقة. مهمتنا هي إعادة تأسيس الشفافية والاحترام والثقة في صناعة النسيج من خلال التعاون مع عملائنا وأن نكون روادا في صناعة المنسوجات.
                      </p>
                    </Fade>
                  </div>
{/* <div className="col-md-2"></div> */}
                  <div className="col-md-6">
                    {" "}
                    <h3
                      style={{
                        color: "#C0AB89",
                        fontFamily: "Millania",
                        fontSize: "50px",
                      }}
                      dir="rtl" lang="ar"
                    >
                      الرؤية
                    </h3>{" "}
                    <Fade right duration={1000} delay={500}>
                      {" "}
                      <p style={{ textAlign: "justify" }}     dir="rtl" lang="ar">
                      &nbsp;&nbsp; كشرط لمفهوم الخدمة القائمة على رضا العملاء، فإننا نقدم جميع الفرص الحالية في خدمة عملائنا لتحقيق الهدف المنشود. مع موظفينا ذوي الخبرة، والمعدات التكنولوجية المتقدمة، والنهج المهني، والخدمة المخلصة، نسعى جاهدين لإنجاز شيء خاص بالنسبة لعملائنا وتحقيق الكمال. تتمثل رؤيتنا في أن نصبح ثم نبقى الشركة المصنعة للمنسوجات الأكثر تقدما وتحديثا في مصر، مع طلب جودة منتجاتنا وخدماتنا على مستوى العالم.
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
                    <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px', textAlign:'center'}}>من  <span style={{color:'#C0AB89'}}>نحن</span></h2></Fade>
                    <Fade bottom duration={1000} delay={500}> <p style={{textAlign:"justify"}}     dir="rtl" lang="ar">&nbsp;&nbsp; لقد كرسنا أنفسنا لتطوير نموذج العلامة التجارية في صناعة النسيج. تتبع عملية التصنيع طريقا متوسطا إلى راقيا، وتعمل باستمرار على تطوير منتجات جديدة، وتحديد اتجاه الموضة والوظائف. نصنع أقمشة عالية الأداء تعتمد على الأخلاق والمسؤولية الاجتماعية والتطوير المستمر. بفضل جودته من الدرجة الأولى، والتكنولوجيا المهنية، والخدمة الدقيقة، والإدارة الحضارية والصادقة، اكتسب المصنع المصري السويسري ثقة وثناء العملاء الجدد والقدامى في الداخل والخارج. 
يولي المصنع المصري السويسري أهمية كبيرة لإدارة جودة الأقمشة ولديه قوة تقنية قوية: فهو يمتلك معدات نسيج من الدرجة الأولى بالإضافة إلى مرافق تطوير المنتجات والبحث الجديدة التي تخلق اتجاهات المنتجات لكل من الأسواق الدولية والمحلية، كل ذلك مع الالتزام بالقيم الأساسية المتمثلة في "الصدق والثقة والجودة والعميل أولا" ساعد في دفع الشركة إلى مستوى أعلى.
مع فلسفة العمل "العميل أولا"، نحن حريصون على التعاون مع كل عميل من أجل المنفعة المتبادلة وبناء مستقبل أفضل.
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
         
            <ProgressBarAr />
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
           ميزاتنا
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
              dir="rtl" lang="ar"
            >
              ما هي ميزاتنا
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
                   جودة المنتج
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
                   سعر تنافسى
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
                    24/7 دعم
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

     
    </>
  );
}
