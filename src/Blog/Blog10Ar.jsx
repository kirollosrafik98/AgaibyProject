import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/blog3.jpg";
import fig from "../images/fig.png";
import fig2 from "../images/fig2.png";
import fig3 from "../images/fig3.png";
import fig4 from "../images/fig4.png";
import fig5 from "../images/fig5.png";
import fig6 from "../images/fig6.png";
import fig7 from "../images/fig7.png";
import fig9 from "../images/fig9.jpg";
import fig10 from "../images/fig10.jpg";
import fig11 from "../images/fig11.jpg";

export default function Blog10Ar() {
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
              <h1 style={{ color: "#C0AB89", fontFamily: "Maya" }}  dir="rtl" lang="ar">
              دراسة حول تطبيق أكسيد الجرافين المختزل على نسيج القطن للحصول على لمسة نهائية مقاومة للماء قابلة للتنفس
              </h1>
            </div>
            <div className="col-md-8">
              {/* <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The necessity of innovation in Bangladesh’s textile and apparel industry is felt even more badly amid the current phase of difficult times while the industry is observing acute energy and gas price hikes, the Russia-Ukraine war, global inflation, order shortage, etc.</p> */}
              {/*                       
                      <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={firstBlog} alt="" /> </div>  */}
              {/* <p  style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>Oh, summer, the season of sweat and heat! Choosing the perfect fabrics for summer to wear during this time is crucial for staying comfortable. Natural fabrics like cotton, linen, and silk are a few choices out of many for summer. These fabrics are breathable and lightweight. Synthetic fabrics like polyester and nylon can trap heat and cause discomfort. Light-coloured fabrics are also preferable as they reflect heat and keep you cool. So, let's swap out those heavy winter clothes for some breezy cotton and enjoy the summer!</p> */}
              <h5  dir="rtl" lang="ar">تجريدي</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
             في هذه الدراسة ، تم اختيار نسيج منسوج قطني 100٪ للتحقيق في تأثيرات التشطيبات المقاومة للماء مع التهوية باستخدام أكسيد الجرافين المختزل (rGO) ومادة البولي يوريثين (PUA). تم قياس تأثيرات مقاومة الأقمشة للماء وفقا لاختبار الرش AATCC 22 (1996) وطريقة زاوية التلامس. تم تقييم الخصائص الفيزيائية (قوة الشد ، اختبار الصلابة ، اختبار السماكة) للنسيج النهائي المقاوم للماء باستخدام المعايير البريطانية ذات الصلة ، ASTM ، ومعايير ISO. كما تم قياس وقت ترطيب الأقمشة قبل وبعد العينات المعالجة لتقييم أداء ومتانة التشطيب.

              </p>
              <h5  dir="rtl" lang="ar">مقدمة</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"     >
            شهدت بداية القرن 21st تطورات كبيرة في التكنولوجيا والعلوم. ومع ذلك ، فقد جاءت هذه التطورات بثمن ، أحدها تفاقم الاحترار العالمي ، مما يؤدي إلى تغيرات مناخية مفاجئة. من أجل البقاء والحماية في مثل هذه الظروف ، هناك حاجة إلى الملابس وملابس العمل المناسبة للأشخاص الذين يعملون على وجه التحديد في البيئات الخارجية.

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
           كانت دراسة الجرافين واحدة من أكثر الموضوعات إثارة في علوم المواد والعديد من المجالات البحثية الأخرى منذ التقرير الأول لإعداد وعزل طبقات الجرافين المفردة في عام 2004. جذبت المواد الوظيفية النسيجية المرنة الانتباه مؤخرا إلى أنها مضادة للبكتيريا [1 ، 4 ، 6] ، حماية من الأشعة فوق البنفسجية [2] ، مقاومة للماء مع خصائص تنفس [5] ، الموصلية الكهربائية [8] ، الموصلية الحرارية [7] ، وهلم جرا [3].

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
           اكتسب الجرافين مؤخرا اهتماما شديدا بسبب خصائصه الميكانيكية والحرارية والبصرية والإلكترونية المتميزة. أكسيد الجرافيت هو مادة خام يتم تقشير الجرافين منها (الشكل 1). الجرافين هو الصفيحة ثنائية الأبعاد التي تتكون من ذرات الكربون وتخلق شبكة سداسية مرتبة. أكسيد الجرافين (GO) عبارة عن صفيحة جرافين بها مجموعات كربوكسيلية عند حوافها ومجموعات هيدروكسيل الفينول وإيبوكسيد على مستواها القاعدي. القضاء على المجموعات الوظيفية في أكسيد الجرافين لإنتاج أكسيد الجرافين المختزل (rGO) عن طريق المعالجة الكيميائية أو عن طريق التلدين الحراري.

              </p>

              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig} alt="" />{" "}
              </div>
              {/* <h5>
                      2. Linen</h5> */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
        الشكل 1: أكسيد الجرافين (Courtesy Jianchang Li et.al 2014)تم تصميم الأقمشة القابلة للتنفس المقاومة للماء بهدف حماية مرتديها من الظروف الجوية مثل الرياح والثلج ، وكذلك منع الفقد المفرط لحرارة الجسم [9]. الأقمشة القابلة للتنفس المقاومة للماء هي واحدة من أقمشة الطقس القاسي التي تحمي مرتديها دون إعاقة كفاءتها. الملابس المصنوعة من هذه الأقمشة تمنع الماء من دخول الجسم وترطيبه ولكنها تسمح بمرور الهواء والرطوبة. إن مرور بخار الماء من الثوب يجعله قابلا للتنفس وبالتالي مريحا وهو أحد أهم السمات التي يجب أن يمتلكها الثوب [10].

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
يمكن استخدام تقنيات مختلفة لإنتاج أقمشة قابلة للتنفس مقاومة للماء. إحدى الطرق المعروفة لتحقيق الأقمشة القابلة للتنفس المقاومة للماء هي طريقة المعالجة الجافة على ركيزة النسيج. يساعد دمج العوامل الكارهة للماء جنبا إلى جنب مع العوامل المحبة للماء في توازن المكونات ويؤدي إلى خصائص تنفس أفضل للماء جنبا إلى جنب مع الأداء الآخر. ستوفر هذه الدراسة إعدادا وتقييما للنسيج القطني القابل للتنفس المقاوم للماء باستخدام rGO و PUA.

              </p>
              <h3  dir="rtl" lang="ar">الإجراء التجريبي
</h3>
              <h5  dir="rtl" lang="ar">المواد والطرق
</h5>
              {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={LinenFabric} alt="" /> </div> 
                      <h5>
                      3. Khaki</h5> */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
         تم شراء متوسط سمك (z) 1-4 نانومتر ، الأبعاد الجانبية (X &Y) 5-10 ميكرومتر ، عدد 1-3 طبقات ، مساحة سطح 220 م 2 / جم ، >99٪ أكسيد الجرافين لتقليل النقاء (rGO) من Ad-Nano Technologies Private Limited ، الهند. تم توفير مادة البولي يوريثين من قبل Balaji chemicals ، الهند. تم استخدام الأقمشة القطنية المنسوجة المنظفة والمبيضة (200 GSM) التي تم توفيرها من Swadeshi Bleaching and Dyeing Mills Pvt. Ltd ، الهند ، والماء المقطر في تحضير جميع الحلول.

              </p>
              <h5  dir="rtl" lang="ar">إعداد نسيج مقاوم للماء تنفس
</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
         تمت إضافة 30 مل من الماء المقطر مع مسحوق rGO 0.5 جم وحفظه في جهاز الموجات فوق الصوتية لمدة 60 دقيقة في درجة حرارة الغرفة للحصول على محلول rGO مائي مشتت. يضاف محلول rGO المشتت بالتنقيط إلى مادة رابطة PUA تحت محرك مغناطيسي (500 دورة في الدقيقة) في درجة حرارة الغرفة.

              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig2} alt="" />{" "}
              </div>
              {/* <h5>
4. Terry-Rayon</h5> */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
        تم تبطين القماش بخليط rGO / PUA عند ضغط 3 كجم / سم 2 ثم جفف عند 110 درجة مئوية لمدة 3 دقائق متبوعا بالمعالجة عند 150 درجة مئوية لمدة 5 دقائق في مركز المختبر.

              </p>
              <h3  dir="rtl" lang="ar">تقنية الجهاز والتوصيف
</h3>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"     >
         تم إجراء التشكل السطحي والتحليل التركيبي لمادة الأغشية الرقيقة rGO باستخدام مجهر إلكتروني ماسح (SEM ؛ 6510LA) مع مرفق التحليل الطيفي للأشعة السينية المشتت للطاقة (نظام JOEL EDS) المرفق به ، الأشعة تحت الحمراء لتحويل فورييه (FTIR) مع نطاق رقم الموجة من 500-4000cm-1 ، حيود الأشعة السينية (XRD) مع مصدر أشعة سينية أحادي اللون الذكاء الاصطناعي KR في وقت سكون ثابت يبلغ 100 مللي ثانية وطاقة تمرير 40eV. تم تحليل مقاومة الشد باستخدام MTS Tensile Tester (البرمجيات – MTS يعمل الاختبار ، المسافة بين الفكين – 6 بوصة ، سرعة الفك – 12 بوصة / دقيقة ، العرض – 1 بوصة).

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
            تم استخدام جهاز اختبار صلابة Taber لإجراء الاختبار بالطريقة القياسية ASTM D 5342-97 (طريقة ASTM D5342).  تم استخدام جهاز اختبار سمك إلكتروني ، "Elektrophysik – MiniTest 600B" مع لوحة قياسية 526 ميكرومتر ± 1٪ ، لمعرفة سمك النسيج المطلي.

              </p>
              <h3  dir="rtl" lang="ar">النتائج والمناقشات
</h3>
              <h5  dir="rtl" lang="ar">مورفولوجيا مادة rGO
</h5>
              {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={terry} alt="" /> </div>  */}
              {/* <h5>
                      5. Seersucker</h5> */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar">
          تم توضيح التوصيف المورفولوجي لمادة rGO في الشكل 3. تين. يوضح 3a و 3c أي طبقة تلو الأخرى يتم ملاحظة حواف الجرافين والصفيحة المسطحة لها أبعاد جانبية في حدود 5-10μm. كما يظهر في التين. مادة الجرافين المقشرة بالكامل ثلاثية الأبعاد ، تم الكشف عن بعض الانهيار على rGO بسبب سمكها الذري في النطاق 1-4 نانومتر.

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
            علاوة على ذلك ، تم تحليل XRD لتحديد المنطقة البلورية ل rGO ، والتي كانت عند 2 بين 10-15 وزاوية الخزاف الحادة 2 كانت 11.40 من أكسيد الجرافين المختزل الموضح في الشكل 4. وقد لوحظت ذروة الجرافيت على أنها 26.40[11]. بالإضافة إلى ذلك ، تم تقديم FTIR الخاص ب rGO أيضا الشكل 5 ، والذي يتكون من خمسة مكونات مختلفة تم تحويلها كيميائيا والتي يمكن فك التواء إلى مجموعات OH (3400 سم -1) ، C = O (1740 سم -1) ، ذروة تشوه OH (1420 سم -1) ، C-OH (1220 سم -1) ، C-O (1050 سم -1) و 1620 سم -1 مخصصة لاهتزاز امتصاص جزيئات الماء.تم إجراء اختبارات مختلفة لتحديد التركيبة المثلى للطلاء القابل للتنفس المقاوم للماء. تم تحليل كل نتيجة ومناقشتها بالتفصيل.

              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig3} alt="" />{" "}
              </div>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig4} alt="" />{" "}
              </div>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig5} alt="" />{" "}
              </div>
           
              {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={silkfabrics} alt="" /> </div>  */}
              <h5  dir="rtl" lang="ar">اختبار الرش
</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
         يحدد اختبار الرش مقاومة الماء للأقمشة المعالجة وغير المعالجة باستخدام طريقة اختبار AATCC 22 (1996). أظهر الشكل 6 تصنيفات اختبار الرش القياسية.

              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig6} alt="" />{" "}
              </div>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
         يتم عرض تصنيفات اختبار الرش في الشكل. 7. في 80 – 20 ، تم تحقيق نسبة العينات المعالجة بمعدل مقاومة أفضل للماء يبلغ حوالي 90 ، مقارنة ب 50-50 و 60-40 عينة معالجة. في عينة مغلفة بنسبة 80-20 ، يمكن رؤية قطرات الماء على سطح القماش مما يشير إلى خاصية مقاومة الماء (الشكل 8 أ) وكانت عينة النسيج غير المعالجة مبللة تماما على كلا السطحين (الشكل 8 ب).

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
               وفقا لمخطط تصنيف الرش ، حققت نسبة 80-20 لعينة rGO / PUA أعلى تصنيف 90 وهذا التصنيف يعني أنه كان هناك "التصاق أو ترطيب عشوائي طفيف للسطح العلوي". لوحظ أنه من بين هذه العينات الثلاث ، أظهرت العينة المأخوذة من 80٪ rGO و 20٪ PUA مقاومة قصوى للماء وترطيبا طفيفا جدا للسطح. تجدر الإشارة إلى أنه مع انخفاض كمية PUA ، زادت مقاومة الماء.
              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig7} alt="" />{" "}
              </div>
              <h5  dir="rtl" lang="ar">اختبار زاوية الاتصال
</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
              يساعد قياس زاوية التلامس في اشتقاق قابلية السطح للبلل. كلما زادت الزاوية بين السطح وقطرة الماء ، زادت مقاومة الماء وانخفضت قابلية البلل.

              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig9} alt="" />{" "}
              </div>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
           لوحظ أن نسبة العينة 80-20 أظهرت أعلى زاوية تلامس 87.2o مع قطرة الماء. تم العثور على قيم زاوية تلامس أقل في حالة نسبة 50-50 التي كانت 73.3o. في حالة القماش غير المطلي ، تتسرب قطرة الماء إلى القماش في غضون 2-3 ثوان.

              </p>
              <h5  dir="rtl" lang="ar">قوة الشد
</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
                يتم إجراء اختبار قوة الشد لتقييم الخواص الميكانيكية للنسيج. أثناء عملية الطلاء ، قد يخضع النسيج لتغييرات في خصائصه الفيزيائية بسبب التوتر والتمدد. في بعض الأحيان قد تنخفض قوة شد القماش بسبب عملية الطلاء. ومن ثم يضمن هذا الاختبار عدم حدوث أي تغيير غير مرغوب فيه في قوة النسيج بسبب عملية الطلاء. تم تنفيذ قوة الشد في كلا الاتجاهين: الاعوجاج واللحمة.

              </p>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig10} alt="" />{" "}
              </div>
              <div
                className="imgCont"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={fig11} alt="" />{" "}
              </div>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar">
           من النتائج المذكورة أعلاه ، لوحظ أن قوة الشد زادت في كلا الاتجاهين بعد تطبيق الطلاء. شوهدت الزيادة القصوى في متوسط مقاومة الشد في اتجاه السداة واللحمة في العينة بتكوين 80-20 rGO / PUV. حيث تم تطبيق المعطف باستخدام PUA الذي عمل أيضا كمادة رابطة منقولة في قوة شد النسيج.

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
     أثناء تقليل تركيز PUA ، زادت القوة ، قد يكون هذا بسبب جزيئات rGO المعروفة بقوة ميكانيكية أعلى. مع زيادة تركيز rGO ، أدى ذلك إلى تحسين قوة الطبقة بشكل غير مباشر مما أدى إلى زيادة قوة الشد.

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
           قد تكون جسيمات rGO بمثابة تعزيز للجسيمات في PUA مع تحسين خصائص الشد ل PUA بشكل مباشر ، والتي يمكن رؤيتها في النتائج التي تم الحصول عليها.

              </p>
              <h5  dir="rtl" lang="ar">اختبار سمك
</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
           تم إجراء اختبار السماكة لتقييم ما إذا كان تطبيق الطلاء يضيف سمكا غير مرغوب فيه إلى النسيج.

              </p>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
             في حالة النسيج غير المعالج ، تم حساب متوسط السماكة على أنه 287 ميكرومتر. العينة المكونة من 50٪ GO و 50٪ PUA لديها أدنى متوسط سمك ، يساوي 313.5 ميكرومتر. علاوة على ذلك ، تم العثور على أعلى سمك هو 3303.5μm في rGO / PUA والذي يتكون من 80٪ GO و 20٪ PUA. يمكن تفسير القيم المنخفضة للانحراف المعياري على أنها فرق أقل بين القراءات ، مما يعني في هذه الحالة مزيدا من التساوي في الطلاء. في حالة العينة 1 ، التي لديها أدنى متوسط سمك ، تمت إضافة سمك 313.5 ميكرومتر إلى النسيج بسبب الطلاء.

              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"   >
           هذا لأنه يحتوي على أعلى كمية من PUA ، وهو أكثر مرونة من راتنج أكسيد الجرافين. لوحظ أثناء التحضير أن المحلول كان من الصعب استحلابه بسبب الكمية العالية من PUA. كان المحلول غير مستقر وله سيولة عالية. أثناء الطلاء ، تسرب المحلول عبر القماش بدلا من ترسبه على السطح. ونتيجة لذلك ، كان هناك فقدان للحل وبالتالي كان سمك أقل. يمكن رؤية الحد الأقصى لإضافة السماكة في العينة بنسبة 80-20٪ GO / PUA ، بمتوسط سمك 330.5 ميكرومتر. ومع ذلك ، فإن الانحراف المعياري ، في هذه الحالة ، مرتفع للغاية ، مما يعني طلاء غير متساو.

              </p>
              <h5  dir="rtl" lang="ar">استنتاج</h5>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
             من النتائج المذكورة أعلاه ، من الواضح أن إنتاج نسيج قطني مقاوم للماء مع خاصية تنفس قدر الإمكان من خلال rGO بينما يعمل PUV كنواة بين نسيج القطن و rGO. التوليفات المثلى التي أسفرت عن أفضل أداء من حيث خصائص مقاومة الماء والتهوية هي عينات تحتوي على 80-20٪ rGO-PUA. يمكن استخدام هذه المجموعات لإنشاء ملابس رياضية يمكن ارتداؤها في الظروف القاسية وكذلك للملابس العادية. استنادا إلى نتيجة الاختبار القياسية لاختبار مقاومة الماء ، تظهر أن زيادة تركيز rGO يعطي نتيجة أفضل مع خاصية الراحة ، ونتيجة لذلك كان تركيز صنع نسيج مقاوم للماء جيد للتنفس 80٪ rGO و 20٪ PUA.

              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
