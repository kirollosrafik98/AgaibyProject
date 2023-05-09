import React,{useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom';
import dyedStretch1 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9629.jpg';
import dyedStretch2 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9631.jpg';
import dyedStretch3 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9632.jpg';
import dyedStretch4 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9633.jpg';
import dyedStretch5 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9634.jpg';
import dyedStretch6 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9635.jpg';
import dyedStretch7 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9636.jpg';
import dyedStretch8 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9637.jpg';
import dyedStretch9 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9638.jpg';
import dyedStretch10 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9639.jpg';
import dyedStretch11 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9640.jpg';
import dyedStretch12 from '../images/Products/Dyed Rozalin Fabric - قماش روزالين/New Folder With Items 16/DSC_9641.jpg';


export default function DyedRozaline() {
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
          ? "Dyed Rozalin Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ?"نسيج روزالين مصبوغ"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu Rozalin teint" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela Rozalin Teñida " 
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
        <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch4} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
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
                <img src={dyedStretch5} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
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
                <img src={dyedStretch6} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
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
                <img src={dyedStretch7} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
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
                <img src={dyedStretch8} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
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
                <img src={dyedStretch9} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
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
                <img src={dyedStretch10} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
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
                <img src={dyedStretch11} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
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
                <img src={dyedStretch12} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
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
</>   )
}
