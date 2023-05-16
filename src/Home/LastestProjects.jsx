import React from 'react'
// import img1 from '../images/blackFabric (1).jpg';
// import img2 from '../images/blackFabric (2).jpg';
// import img3 from '../images/blackFabric (3).jpg';
// import img4 from '../images/blackFabric (4).jpg';
// import img5 from '../images/blackFabric (5).jpg';
// import img6 from '../images/blackFabric (8).jpg';
// import img7 from '../images/blackFabric (7).jpg';
import img1 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 14/DSC_9659.jpg';
import img2 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9623.jpg';
import img3 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/DSC_9198.jpg';
import img4 from '../images/Products/Dyed Soft Fabric for Pants -‎ قماش سوفت ليكرا تقيل الشروال البنطلون/DSC_9670.jpg';
import img5 from '../images/Products/Printed Bengaline Stretch for Pants - ‎بنجالين ليكرا مطبوع شروال/New Folder With Items 54/DSC_9317.jpg';
import img6 from '../images/Products/Printed Rozalin Fabric -  قماش روزالين مطبوع/New Folder With Items 49/DSC_9371.jpg';
import img7 from '../images/Products/Printed Scuba Fabric - قماش سكوبا مطبوع/New Folder With Items 37/DSC_9440.jpg';
import img8 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 46/DSC_9384.jpg';
import img9 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 18/DSC_9610.jpg';
import img10 from '../images/Products/Dyed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت قميص وتيشرت/New Folder With Items 9/DSC_9699.jpg';
import img11 from '../images/Products/Dyed Gabardine twill Fabric for Pants and Uniform - ‎قماش جبردين أسبن بعرض ١٦٠ سم للبناطيل و اليونيفورم/New Folder With Items 10/DSC_9694.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
// import { TRUE } from 'node-sass';

export default function LastestProjects() {
  return (
<>

<div class="container-fluid">
                <div class="row">
                    <div class="projects-s3-grids project-s3-slider">
                    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      loop={true}
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    > 
     <SwiperSlide>  <div class="grid">
                            <div class="img-holder">
                               <Link to='/stretch'> <img src={img1} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link> 
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link  style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}> {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Stretch for..."
          :localStorage.getItem("lang")=== "egp" 
            ? " ‎بنجالين ليكرا شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Stretch bengalin teint..." 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico beng..." 
                : ""
        } </Link></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/stretch'>{
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link> </p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div class="grid">
                            <div class="img-holder">
                            <Link to='/rozalin'>   <img src={img2} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link> 
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link to='/rozalin' style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}> {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Rozalin Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ?"نسيج روزالين مصبوغ"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu Rozalin teint" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela Rozalin Teñida " 
                : ""
        }</Link></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/rozalin'> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link></p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide> <div class="grid">
                            <div class="img-holder">
                            <Link to='/scuba'>    <img src={img3} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link to='/scuba' style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}> {
         localStorage.getItem("lang") === "eng" 
          ? " Dyed Scuba Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ?"نسيج سكوبا مصبوغ"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu de plongée teint" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tejido de buceo teñido" 
                : ""
        }</Link></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/scuba'> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link></p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide>   <div class="grid">
                            <div class="img-holder">
                            <Link to='/soft'><img src={img4} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link to='/soft' style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>{
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Soft Fabric for Pants"
          :localStorage.getItem("lang")=== "egp" 
            ?"‎ قماش سوفت ليكرا تقيل الشروال "
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu doux teint pour..." 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela suave teñida para..." 
                : ""
        }</Link></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/soft'> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link></p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div class="grid">
                            <div class="img-holder">
                            <Link to='/lycra' ><img src={img10} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link to='/lycra' style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}> {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Light for T-..."
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مصبوغ قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Teint Bengaline Light pour..." 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz bengalina teñida para..." 
                : ""
        }</Link></h3>
                                <p><Link style={{textDecoration:'none', color:'#C0AB89'}} to='/lycra'> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link> </p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide><div class="grid">
                            <div class="img-holder">
                            <Link to='/twill'>  <img src={img11} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link> 
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link to='/twill' style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>  {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Gabardine twill Fabric..."
          :localStorage.getItem("lang")=== "egp" 
            ? "نسيج جبردين مصبوغ من التويل ...  "
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu sergé gabardine teint..."
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela de sarga de gab..." 
                : ""
        }</Link></h3>
                                <p><Link style={{textDecoration:'none', color:'#C0AB89'}} to='/twill'> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link> </p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                            <Link to='/dyedStretch'> <img src={img5} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link to='/dyedStretch' style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>{
         localStorage.getItem("lang") === "eng" 
          ? "  Printed Bengaline Stretch... "
          :localStorage.getItem("lang")=== "egp" 
            ? " ‎بنجالين ليكرا مطبوع شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline stretch imprimé..." 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico bengalí..." 
                : ""
        }</Link></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/dyedStretch'> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link></p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                            <Link to='/printedRozalin'> <img src={img6} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link> 
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link to='/printedRozalin' style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "  Printed Rozalin Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ? "  قماش روزالين مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu Rozalin imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela Rozalín Estampada" 
                : ""
        }</Link></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/printedRozalin'> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link></p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                            <Link to='/printedScuba'>   <img src={img7} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link> 
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link to='/printedScuba' style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>{
         localStorage.getItem("lang") === "eng" 
          ? "  Printed Scuba Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ? "  قماش سكوبا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu Scuba Imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela estampada de buceo" 
                : ""
        }</Link></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/printedScuba'> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link></p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                            <Link to='/microfiber'>  <img src={img8} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link>  
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link to='/microfiber' style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>{
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric..."
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra..." 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de..." 
                : ""
        }</Link></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/microfiber'> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link></p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                            <Link to='/bengaline'> <img src={img9} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/></Link>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><Link to='/bengaline' style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>{
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for..."
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée..." 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada... " 
                : ""
        }</Link></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/bengaline'> {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }</Link></p>
                            </div>
                        </div></SwiperSlide>
   
                        <div className="swiper-button-prev"></div>
<div className="swiper-button-next"></div> </Swiper>
                        
                       
  
            
                        
                        
                     
                    </div>
                </div> 

                <div class="all-projects">
                    <Link to='/products' style={{textDecoration:'none'}} class="theme-btn-s2">
                    {
         localStorage.getItem("lang") === "eng" 
          ? " All Products"
          :localStorage.getItem("lang")=== "egp" 
            ? "جميع المنتجات"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tous les produits" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Todos los productos" 
                : ""
        }
                       </Link>
                </div>
            </div>
</>  )
}
