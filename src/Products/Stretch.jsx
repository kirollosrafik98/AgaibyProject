import React,{useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom';
import dyedStretch1 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 7/DSC_9724.jpg';
import dyedStretch2 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 11/DSC_9687.jpg';
import dyedStretch3 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 12/DSC_9682.jpg';
import dyedStretch4 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 14/DSC_9659.jpg';
import dyedStretch5 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/New Folder With Items 15/DSC_9642.jpg';
import dyedStretch6 from '../images/Products/Dyed Bengaline Stretch for Pants - ‎بنجالين ليكرا شروال/Pantalon/DSC_9723.jpg';

export default function Stretch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div class="page-title">
            <div class="container">
            <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'60px'}}>
            {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Stretch for Pants"
          :localStorage.getItem("lang")=== "egp" 
            ? "بنجالين ليكرا شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Stretch bengalin teint pour pantalon" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico bengalino teñido" 
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
      <Link to='/printedStretchSub1' style={{textDecoration:'none'}} >
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch1} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>
              
            {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Stretch for Pants"
          :localStorage.getItem("lang")=== "egp" 
            ? "بنجالين ليكرا شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Stretch bengalin teint pour pantalon" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico bengalino teñido" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/printedStretchSub1' style={{textDecoration:'none'}} class="read-more"> {
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
        </div></Link>
      </Fade>
    </div>
  
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/printedStretchSub2' style={{textDecoration:'none'}}>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch2} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>  {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Stretch for Pants"
          :localStorage.getItem("lang")=== "egp" 
            ? "بنجالين ليكرا شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Stretch bengalin teint pour pantalon" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico bengalino teñido" 
                : ""
        }</a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/printedStretchSub2' style={{textDecoration:'none'}} class="read-more"> {
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
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/printedStretchSub3' style={{textDecoration:'none'}}>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch3} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>  {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Stretch for Pants"
          :localStorage.getItem("lang")=== "egp" 
            ? "بنجالين ليكرا شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Stretch bengalin teint pour pantalon" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico bengalino teñido" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/printedStretchSub3' style={{textDecoration:'none'}} class="read-more"> {
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
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3" >
      <Fade right>
      <Link to='/printedStretchSub4' style={{textDecoration:'none'}}>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch4} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>  {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Stretch for Pants"
          :localStorage.getItem("lang")=== "egp" 
            ? "بنجالين ليكرا شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Stretch bengalin teint pour pantalon" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico bengalino teñido" 
                : ""
        }</a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/printedStretchSub4' style={{textDecoration:'none'}} class="read-more"> {
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
        </div></Link>
      </Fade>
    </div>
  
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/printedStretchSub5' style={{textDecoration:'none'}}>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch5} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>  {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Stretch for Pants"
          :localStorage.getItem("lang")=== "egp" 
            ? "بنجالين ليكرا شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Stretch bengalin teint pour pantalon" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico bengalino teñido" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/printedStretchSub5' style={{textDecoration:'none'}} class="read-more"> {
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
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/printedStretchSub6' style={{textDecoration:'none'}} >
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch6} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>  {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Bengaline Stretch for Pants"
          :localStorage.getItem("lang")=== "egp" 
            ? "بنجالين ليكرا شروال"
            :localStorage.getItem("lang")=== "fr" 
              ? "Stretch bengalin teint pour pantalon" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Pantalón elástico bengalino teñido" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/printedStretchSub6' style={{textDecoration:'none'}} class="read-more"> {
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
        </div></Link>
      </Fade>
    </div>
  </div>
</Element>

                          
            </div> 
        </section>
</> 
 )
}
