
import React,{useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom';
import dyedStretch1 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 7/76.jpg';
import dyedStretch2 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 7/654.jpg';
import dyedStretch3 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 7/764.jpg';
import dyedStretch4 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 7/6543.jpg';
// import dyedStretch5 from '../images/Products/Printed Bengaline Stretch for Pants - ‎بنجالين ليكرا مطبوع شروال/New Folder With Items 28/DSC_9560.jpg';
import dyedStretch6 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 7/DSC_9725 copy.jpg';
import dyedStretch7 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 7/DSC_9727 copy.jpg';


export default function PrintedStretchSub1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div class="page-title">
                <div class="container">
                <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'80px'}}>Dyed Bengaline Stretch for Pants</h1></Fade>
    
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more">Get Quote</Link>
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more">Get Quote</Link>
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more">Get Quote</Link>
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more">Get Quote</Link>
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more">Get Quote</Link>
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more">Get Quote</Link>
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