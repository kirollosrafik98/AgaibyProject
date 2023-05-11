import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/STTI.jpg";

export default function Blog6Ar() {
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
              مدونه
            </h1>
          </Fade>

          {/* <h1>Blog</h1> */}
        </div>
      </div>
      <section>
        <div className="container p-5">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-8">
              <h1 style={{ color: "#C0AB89", fontFamily: "Maya" }}     dir="rtl" lang="ar">
              يرحب تحالف STTI بممارسات الشراء المحسنة من قبل BRM
              </h1>
            </div>
            <div className="col-md-8">
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
         رحبت مبادرة شروط التجارة المستدامة (STTI) ، وهي تحالف من مصنعي الملابس ، بالتحديث الجديد لوحدة Higg Brand and Retail (BRM) باعتبارها "خطوة أولى مفيدة" ، لكنها تقول إن هناك حاجة إلى مزيد من الجهود.
              </p>

              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={firstBlog} alt="" />{" "}
              </div>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
               تم إنشاء مبادرة شروط التجارة المستدامة (STTI) من قبل الشركات المصنعة من تسع دول في عام 2021 لتوضيح الممارسات المتوقعة من العلامات التجارية وتجار التجزئة الذين يشترون منتجاتهم. طلبت STTI من Higg BRM تحديثا لممارسات الشراء الخاصة بها. وكان الطلب مشفوعا باستبيان منقح في هذا الصدد.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
       أعربت STTI في بيان عن تقديرها للنسخة الجديدة من Higg BRM واصفة إياها بأنها "خطوة أولى مفيدة" ، ومع ذلك ، قالت إن المزيد من التحسينات على أسئلة ممارسة الشراء ستكون ضرورية. وتوضيحا لوجهة نظرها، ترغب STTI في أن يدمج BRM جزءا أكبر من أسئلته حول ممارسات الشراء التي تعكس أهمية الظروف الاجتماعية والبيئية في سلسلة توريد الملابس.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
              أعرب المتحدث باسم STTI ميران علي عن تقديره لأن SAC كانت متقبلة لتوصياتها وأن تعريف BRM لممارسات الشراء الجيدة يعكس بوضوح الاهتمام بالقضايا الاجتماعية والبيئية. وأضاف أن مجموعة الأسئلة الناتجة عن ممارسات الشراء المنقحة ضمن تقييم Higg Brand &Retail هي بالتأكيد خطوة في الاتجاه الصحيح في السعي إلى التحسين الضروري لممارسات الشراء.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
              أوضح مسؤولو STTI أنهم سيحكمون على نجاح أسئلة ممارسات الشراء BRM الجديدة على رؤية التحسين الفعلي للامتثال التجاري لمستخدميها.

              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
