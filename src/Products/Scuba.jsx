import React,{useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom';
import dyedStretch1 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/DSC_9198.jpg';
export default function Scuba() {
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
          ? " Dyed Scuba Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سكوبا مصبوغ"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu de plongée teint" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tejido de buceo teñido" 
                : ""
        }
             </h1></Fade>

            </div>
        </div>
        <section class="blog-content-section section-padding">
            <div class="container">
      
 <Element name='blog'>
  <div class="row blog-s2-grids">
 
   
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch1} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? " Dyed Scuba Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سكوبا مصبوغ"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu de plongée teint" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tejido de buceo teñido" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/dyedScuba' style={{textDecoration:'none'}} class="read-more"> {
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
</>   )
}
