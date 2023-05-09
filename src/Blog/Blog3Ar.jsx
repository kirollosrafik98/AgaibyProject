import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/blog3.jpg";
import cotton from "../images/CottonShirts.jpg";
import LinenFabric from "../images/LinenFabric.jpg";
import terry from "../images/terry rayon fabric.jpg";
import silkfabrics from "../images/silk fabrics.jpg";
import Chambrayfabrics from "../images/Chambray.JPG";

export default function Blog3Ar() {
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
              مدونة
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
              <h1 style={{ color: "#C0AB89", fontFamily: "Maya" }} dir="rtl" lang="ar" >
              10 أقمشة لارتدائها في الصيف للتغلب على الحرارة
              </h1>
            </div>
            <div className="col-md-8">
              {/* <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The necessity of innovation in Bangladesh’s textile and apparel industry is felt even more badly amid the current phase of difficult times while the industry is observing acute energy and gas price hikes, the Russia-Ukraine war, global inflation, order shortage, etc.</p> */}

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
                dir="rtl" lang="ar"  >
              أوه ، الصيف ، موسم العرق والحرارة! يعد اختيار الأقمشة المثالية للصيف لارتدائها خلال هذا الوقت أمرا بالغ الأهمية للبقاء مرتاحا. الأقمشة الطبيعية مثل القطن والكتان والحرير هي خيارات قليلة من بين العديد من الخيارات لفصل الصيف. هذه الأقمشة قابلة للتنفس وخفيفة الوزن. يمكن الأقمشة الاصطناعية مثل البوليستر والنايلون أن تحبس الحرارة وتسبب عدم الراحة. الأقمشة ذات الألوان الفاتحة مفضلة أيضا لأنها تعكس الحرارة وتبقيك باردا. لذا ، دعونا نستبدل تلك الملابس الشتوية الثقيلة ببعض القطن المنعش و تستمتع بالصيف!
              </p>
              <h5 dir="rtl" lang="ar" >أفضل 10 أقمشة صيفية لارتدائها في الصيف</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
               الصيف هو موسم ارتداء الأقمشة القابلة للتنفس التي تبقيك باردا ومريحا. فيما يلي أفضل 10 أقمشة خفيفة الوزن لفصل الصيف يجب على كل رجل مراعاتها لخزانة ملابسها الصيفية.
              </p>
              <h5 dir="rtl" lang="ar" >1. القطن</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
             القطن هو أفضل نسيج متعدد الاستخدامات وشائع على نطاق واسع للارتداء الصيفي. تحدد خصائص القطن أنه نسيج طبيعي قابل للتنفس وخفيف الوزن ويمتص الرطوبة ، مما يجعله خيارا مثاليا للطقس الحار والرطب.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
          إنه متوفر بأنماط مختلفة ، مثل أكسفورد ، شامبراي ، وبوبلين ، وهو مثالي للارتداء غير الرسمي والرسمي. ومن الأمثلة على ذلك القمصان القطنية قمصان البولو والقمصان. متانته وسهولة العناية به تجعله خيارا فعالا من حيث التكلفة لخزانة ملابسك الصيفية.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={cotton} alt="" />{" "}
              </div>
              <h5 dir="rtl" lang="ar" >2. الكتان</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
              الكتان هو نسيج طبيعي مصنوع من ألياف الكتان ، ومعروف بقابليته للتهوية وملمسه خفيف الوزن ، مما يجعله أفضل نسيج للارتداء في الطقس الحار. إنه عالي الامتصاص ، مما يساعد على التخلص من العرق ، ويعطي قوامه الطبيعي مظهرا مريحا وغير رسمي.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
                وهي متوفرة بأنماط مختلفة ، مثل القمصان المصنوعة من قماش الكتان الخالص والسراويل والسراويل القصيرة ، مما يجعلها خيارا مثاليا لأي ملابس صيفية. تمنحه التجاعيد والتجاعيد الطبيعية للنسيج طابعا مميزا ، كما أن متانته استثمار مربح لهذا الموسم.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={LinenFabric} alt="" />{" "}
              </div>
              <h5 dir="rtl" lang="ar" >3. الكاكي</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
           الكاكي هو أقمشة متينة وقابلة للتنفس لارتداء الطقس الحار. إنه مصنوع من مزيج من القطن والألياف الاصطناعية ، مما يجعله مساميا وخفيف الوزن. يضفي الكاكي طابعا أنيقا مع بنطال تشينو وشورت وبليزر ، مما يجعله الاختيار المناسب للمناسبات غير الرسمية وشبه الرسمية.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
             يجعل لونه المحايد من السهل إقرانه مع عناصر الملابس الأخرى ، وتضمن متانته استمراره لعدة مواسم. من السهل أيضا العناية بالكاكي ، مما يجعله خيارا عمليا لأي خزانة ملابس صيفية.
              </p>
              <h5 dir="rtl" lang="ar" >4. تيري رايون</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
               Terry-rayon عبارة عن أقمشة ناعمة ومسامية وتمتص الرطوبة للارتداء الصيفي. إنه مزيج من قطن تيري والحرير الصناعي ، مما يمنحه ملمسا ولمعانا فريدا.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
              يتوفر Terry-rayon بتصميمات مختلفة ، مثل القمصان وقمصان البولو والسراويل القصيرة ، مما يجعله مثاليا للنزهات غير الرسمية. إنه مقاوم للتجاعيد ويسهل العناية به وهو مثالي للسفر. يضمن لك قوامه الخفيف والمريح البقاء باردا وأنيقا في حرارة الصيف.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={terry} alt="" />{" "}
              </div>
              <h5 dir="rtl" lang="ar" >5. سيرسوكر</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
             Seersucker عبارة عن قطن مجعد وأقمشة خفيفة الوزن للارتداء الصيفي. يسمح قوامه المميز للهواء بالدوران ، مما يجعله شديد التهوية ومريحا. يتوفر Seersucker بأنماط مختلفة ، مثل القمصان ذات الأزرار والسترات والسراويل القصيرة ، مما يجعله متعدد الاستخدامات للمناسبات غير الرسمية والرسمية. يضيف نسيجها وأنماطها الفريدة أيضا طابعا مميزا إلى أي جماعة. من السهل العناية ب Seersucker ، وتضمن متانته استمراره لعدة مواسم.
              </p>
              <h5 dir="rtl" lang="ar" >6. الحرير</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
              الحرير فاخر ومسامي ومن أفضل الأقمشة لفصل الصيف. تسمح أليافه الطبيعية للهواء بالدوران ، مما يجعلك باردا ومريحا. الحرير رائج ، مثل القمصان وربطات العنق ومربعات الجيب ، مما يجعله مناسبا للمناسبات الرسمية. يضيف قوامه الناعم ولمعانه الطبيعي لمسة من الأناقة إلى أي زي. الحرير سهل العناية به ومتين ، مما يجعله استثمارا مفيدا لأي خزانة ملابس صيفية.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={silkfabrics} alt="" />{" "}
              </div>
              <h5 dir="rtl" lang="ar" >7. شامبراي</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
             Chambray هو نسيج خفيف الوزن وتنفس. إنه مزيج من القطن وله قوام فريد مشابه للدنيا. شامبراي أنيق ويمكن تنسيقه على شكل قمصان وشورتات وسترات بأزرار ، مما يجعله متعدد الاستخدامات لأي حدث غير رسمي أو شبه رسمي. تضمن متانته أنه يدوم عدة مواسم ، ويضيف قوامه الفريد طابعا مميزا إلى أي جماعة. من السهل العناية شامبراي ، مما يجعله أفضل قماش خزانة ملابس الطقس الحار.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={Chambrayfabrics} alt="" />{" "}
              </div>
              <h5 dir="rtl" lang="ar" >8. فسكوزي</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
               فسكوزي هو أقمشة خفيفة الوزن وتنفس للطقس الحار. إنه مصنوع من ألياف طبيعية ، مما يجعله عالي الامتصاص ومريحا. يمكنك إقران فيسكوز مع القمصان وقمصان البولو والسراويل القصيرة للنزهات غير الرسمية. يمنحها قوامها الناعم وثبتها الطبيعية مظهرا أنيقا وفاخرة. من السهل العناية بالفسكوز ومتين لجعل خزانة ملابسك مبهرة بأناقة.
              </p>
              <h5 dir="rtl" lang="ar" >9. الشيفون</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
            الشيفون هو نسيج خفيف الوزن وشفاف. إنه مصنوع من الحرير أو البوليستر أو كليهما. المواد تنفس للغاية ومريحة. يمكن تصميم الشيفون خصيصا للقمصان ذات الأزرار والقمصان والأوشحة ، مما يجعلها متعددة الاستخدامات في أي مناسبة. يمنحها قوامها الرشيق وستائرها الانسيابية مظهرا رومانسيا وأنثوية. من السهل العناية الشيفون ، مما يجعله أقمشة عملية للخزائن الصيفية.
              </p>
              <h5 dir="rtl" lang="ar" >10. الفانيلا</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
             الفانيلا مادة متعددة الاستخدامات ومريحة. انها لينة وتنفس.

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
               قمصان الفانيلا هي نمط كلاسيكي مثالي لإطلالة غير رسمية. بعض فوائد الفانيلا تشمل متانتها وسهولة العناية بها. تشمل أمثلة أنماط الفانيلا القمصان المنقوشة وذات الألوان الصلبة و السترات المبطنة بالفانيلا والسراويل.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
          الفانيلا هي بيان أنيق للرجال الذين يريدون أقمشة مريحة وأنيقة وخفيفة الوزن لموسم الصيف.

              </p>
              <h5 dir="rtl" lang="ar" >كيف تختار أفضل قماش صيفي لارتدائه؟
</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
             فيما يلي بعض النصائح لاختيار أفضل الأقمشة لفصل الصيف لارتدائها:

              </p>
              <ul className="dot-list" dir="rtl" lang="ar" >
                <li>
                ابحث عن أقمشة خفيفة الوزن ومسامية مثل القطن والكتان والحرير الصناعي.

                </li>
                <li>
                اختر الأقمشة التي لها خصائص ماصة للرطوبة مثل مزيج الخيزران أو البوليستر.

                </li>
                <li>تجنب الأقمشة الثقيلة أو السميكة مثل الصوف والدنيم.
</li>
                <li>
                النظر في لون النسيج. تعكس الألوان الفاتحة الحرارة ، بينما تمتصها الألوان الداكنة.

                </li>
                <li>
                تحقق من نسج القماش. تسمح النسج الأكثر مرونة بمزيد من تدفق الهواء والتهوية.

                </li>
                <li>
                اقرأ تعليمات العناية للتأكد من سهولة العناية بالقماش ولن يتقلص أثناء الغسيل.

                </li>
                <li>
                ضع في اعتبارك النشاط الذي تقوم به أثناء ارتداء القماش. بعض الأقمشة مناسبة بشكل أفضل لأنشطة معينة من غيرها.

                </li>
              </ul>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
               يمكنك اختيار أفضل الأقمشة الصيفية لخزانة ملابسك. ابق مرتاحا خلال الأشهر الحارة مع وضع النصائح المذكورة أعلاه في الاعتبار.

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
               يعد اختيار الأقمشة القابلة للتنفس للطقس الحار أمرا بالغ الأهمية للبقاء مرتاحا وهادئا. تعتبر الأقمشة مثل القطن والكتان والحرير الصناعي خيارات ممتازة لأنها تسمح للهواء بالدوران والعرق بالتبخر بسرعة. مع خيارات الملابس الصحيحة ، يمكن للمرء الاستمتاع بأشهر الصيف دون الشعور بالتورط بسبب الحرارة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
