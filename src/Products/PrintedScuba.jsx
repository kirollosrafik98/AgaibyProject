import React,{useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom';

import dyedStretch1 from '../images/Products/Printed Scuba Fabric - قماش سكوبا مطبوع/New Folder With Items 37/DSC_9441.jpg';
import dyedStretch2 from '../images/Products/Printed Scuba Fabric - قماش سكوبا مطبوع/New Folder With Items 37/DSC_9443.jpg';
import dyedStretch3 from '../images/Products/Printed Scuba Fabric - قماش سكوبا مطبوع/New Folder With Items 37/DSC_9442.jpg';





export default function PrintedScuba() {
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
          ? "  Printed Scuba Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ? "  قماش سكوبا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu Scuba Imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela estampada de buceo" 
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
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch1} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Get Quote"
          :localStorage.getItem("lang")=== "egp" 
            ? "احصل على السعر" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Obtenir un devis" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Obtener cotización" 
                : ""
        }</Link>
                </div>
           
            </div>
          </Fade>
        </div>
        <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch2} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Get Quote"
          :localStorage.getItem("lang")=== "egp" 
            ? "احصل على السعر" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Obtenir un devis" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Obtener cotización" 
                : ""
        }</Link>
                </div>
           
            </div>
          </Fade>
        </div>
        <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch3} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more"> {
         localStorage.getItem("lang") === "eng" 
          ? " Get Quote"
          :localStorage.getItem("lang")=== "egp" 
            ? "احصل على السعر" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Obtenir un devis" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Obtener cotización" 
                : ""
        }</Link>
                </div>
           
            </div>
          </Fade>
        </div>
      </div>
    </Element>
    
                              
                </div> 
            </section>
    </> 
  )
}
