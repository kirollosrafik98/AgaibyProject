import React,{useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import Factory from '../images/blackFabric (8).jpg';
import Branch1 from '../images/howWeWork.jpg';
import Branch2 from '../images/blackFabric (3).jpg';
import dyedStretch from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 14/DSC_9659.jpg';
import rozalin from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9623.jpg';
import scuba from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/DSC_9198.jpg';
import soft from '../images/Products/Dyed Soft Fabric for Pants -‎ قماش سوفت ليكرا تقيل الشروال البنطلون/DSC_9670.jpg';
import stretch from '../images/Products/Printed Bengaline Stretch for Pants - ‎بنجالين ليكرا مطبوع شروال/New Folder With Items 54/DSC_9317.jpg';
import printedRozalin from '../images/Products/Printed Rozalin Fabric -  قماش روزالين مطبوع/New Folder With Items 49/DSC_9371.jpg';
import printedScuba from '../images/Products/Printed Scuba Fabric - قماش سكوبا مطبوع/New Folder With Items 37/DSC_9440.jpg';
import microfiber from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 46/DSC_9384.jpg';
import bengaline from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 18/DSC_9610.jpg';
import lycra from '../images/Products/Dyed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت قميص وتيشرت/New Folder With Items 9/DSC_9699.jpg';
import twill from '../images/Products/Dyed Gabardine twill Fabric for Pants and Uniform - ‎قماش جبردين أسبن بعرض ١٦٠ سم للبناطيل و اليونيفورم/New Folder With Items 10/DSC_9694.jpg';
import { Link } from 'react-router-dom';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div class="page-title">
            <div class="container">
            <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'80px'}}>
            {
         localStorage.getItem("lang") === "eng" 
          ? "Products"
          :localStorage.getItem("lang")=== "egp" 
            ? "منتجات"
            :localStorage.getItem("lang")=== "fr" 
              ? "Des produits" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Productos" 
                : ""
        }
              </h1></Fade>

            </div>
        </div>
        <section class="blog-content-section section-padding" style={{paddingTop:'80px'}}>
            <div class="container">
      
 <Element name='blog'>
  <div class="row blog-s2-grids">
 
   
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Stretch for Pants"
          :localStorage.getItem("lang")=== "egp" 
            ? " ‎بنجالين ليكرا شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Stretch bengalin teint pour pantalon" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico bengalino teñido" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/stretch' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={rozalin} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>
            {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Rozalin Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ?"نسيج روزالين مصبوغ"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu Rozalin teint" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela Rozalin Teñida " 
                : ""
        }</a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/rozalin' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media" >
            <img src={scuba} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>       {
         localStorage.getItem("lang") === "eng" 
          ? " Dyed Scuba Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ?"نسيج سكوبا مصبوغ"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu de plongée teint" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tejido de buceo teñido" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/scuba' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3" >
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={soft} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>
            {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Soft Fabric for Pants"
          :localStorage.getItem("lang")=== "egp" 
            ?"‎ قماش سوفت ليكرا تقيل الشروال البنطلون"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu doux teint pour pantalon" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela suave teñida para pantalones" 
                : ""
        }
              </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/soft' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={lycra} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>      {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مصبوغ قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Teint Bengaline Light pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz bengalina teñida para camiseta con licra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/lycra' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={twill} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Gabardine twill Fabric for Pants and Uniform"
          :localStorage.getItem("lang")=== "egp" 
            ? "نسيج جبردين مصبوغ من التويل للسراويل والزي الموحد"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu sergé gabardine teint pour pantalon et uniforme" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela de sarga de gabardina teñida para pantalones y uniformes" 
                : ""
        }</a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/twill' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={stretch} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}> {
         localStorage.getItem("lang") === "eng" 
          ? "  Printed Bengaline Stretch for Pants "
          :localStorage.getItem("lang")=== "egp" 
            ? " ‎بنجالين ليكرا مطبوع شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline stretch imprimé pour pantalon" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico bengalí estampado" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/dyedStretch' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={printedRozalin} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>          {
         localStorage.getItem("lang") === "eng" 
          ? "  Printed Rozalin Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ? "  قماش روزالين مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu Rozalin imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela Rozalín Estampada" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/printedRozalin' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={printedScuba} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>       {
         localStorage.getItem("lang") === "eng" 
          ? "  Printed Scuba Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ? "  قماش سكوبا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu Scuba Imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela estampada de buceo" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/printedScuba' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={microfiber} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}> {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        }</a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiber' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={bengaline} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details" style={{ height: '150px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}> {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengaline' style={{textDecoration:'none'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    
  </div>
</Element>

                          
            </div> 
        </section>
</>  )
}
