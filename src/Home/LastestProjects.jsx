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
                                <img src={img1} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Dyed Bengaline Stretch for Pants</a></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/stretch'>Show More</Link> </p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div class="grid">
                            <div class="img-holder">
                                <img src={img2} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Dyed Rozalin Fabric</a></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/rozalin'> Show More</Link></p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide> <div class="grid">
                            <div class="img-holder">
                                <img src={img3} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Dyed Scuba Fabric</a></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/scuba'> Show More</Link></p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide>   <div class="grid">
                            <div class="img-holder">
                                <img src={img4} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Dyed Soft Fabric for Pants</a></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/soft'> Show More</Link></p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div class="grid">
                            <div class="img-holder">
                                <img src={img10} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Dyed Bengaline Light for T-Shirt with Lycra</a></h3>
                                <p><Link style={{textDecoration:'none', color:'#C0AB89'}} to='/lycra'> Show More</Link> </p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide><div class="grid">
                            <div class="img-holder">
                                <img src={img11} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Dyed Gabardine twill Fabric for Pants and Uniform</a></h3>
                                <p><Link style={{textDecoration:'none', color:'#C0AB89'}} to='/twill'> Show More</Link> </p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                                <img src={img5} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Printed Bengaline Stretch for Pants</a></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/dyedStretch'> Show More</Link></p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                                <img src={img6} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Printed Rozalin Fabric</a></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/printedRozalin'> Show More</Link></p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                                <img src={img7} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Printed Scuba Fabric</a></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/printedScuba'> Show More</Link></p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                                <img src={img8} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Printed Soft Lycra Fabric Microfiber</a></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/microfiber'> Show More</Link></p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                                <img src={img9} style={{width:'100%', height:'350px',objectFit:'cover'}} alt/>
                            </div>
                            <div class="details" style={{ height: '100px', overflow: 'hidden' }}>
                                <h3><a style={{textDecoration:'none', color:'#000', fontFamily:'Maya', fontSize:'18px'}}>Printed Bengaline Light for T-Shirt with Lycra</a></h3>
                                <p> <Link style={{textDecoration:'none', color:'#C0AB89'}} to='/bengaline'> Show More</Link></p>
                            </div>
                        </div></SwiperSlide>
   
                        <div className="swiper-button-prev"></div>
<div className="swiper-button-next"></div> </Swiper>
                        
                       
  
            
                        
                        
                     
                    </div>
                </div> 

                <div class="all-projects">
                    <Link to='/products' style={{textDecoration:'none'}} class="theme-btn-s2">All Products</Link>
                </div>
            </div>
</>  )
}
