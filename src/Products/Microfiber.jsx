
import React,{useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom';
import dyedStretch1 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 6/DSC_9728.jpg';
import dyedStretch2 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 19/DSC_9603.jpg';
import dyedStretch3 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 42/DSC_9408.jpg';
import dyedStretch4 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 43/DSC_9404.jpg';
import dyedStretch5 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 44/DSC_9400.jpg';
import dyedStretch6 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 45/DSC_9396.jpg';
import dyedStretch7 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 46/DSC_9384.jpg';
import dyedStretch8 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 47/DSC_9379.jpg';
import dyedStretch9 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 48/DSC_9378.jpg';
import dyedStretch10 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 51/DSC_9344.jpg';
import dyedStretch11 from '../images/Products/Printed Soft Lycra Fabric Microfiber- قماش سوفت خفيف ليكرا مطبوع/New Folder With Items 52/DSC_9340.jpg';



export default function Microfiber() {
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
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
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
      <Link to='/microfiberSub1' style={{textDecoration:'none'}} > <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch1} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        }  </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub1' style={{textDecoration:'none'}} class="read-more">
              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
                
              </Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div></Link> 
      </Fade>
    </div>
  
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/microfiberSub2' style={{textDecoration:'none'}} > <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch2} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub2' style={{textDecoration:'none'}} class="read-more">
              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
                
              </Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/microfiberSub3' style={{textDecoration:'none'}} >
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch3} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        }  </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub3' style={{textDecoration:'none'}} class="read-more">

              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
              </Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3" >
      <Fade right>
      <Link to='/microfiberSub4' style={{textDecoration:'none'}}><div class="grid">
          <div class="entry-media">
            <img src={dyedStretch4} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub4' style={{textDecoration:'none'}} class="read-more">

              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
              </Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div></Link> 
      </Fade>
    </div>
  
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/microfiberSub5' style={{textDecoration:'none'}} >
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch5} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        }  </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub5' style={{textDecoration:'none'}} class="read-more">
              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
                
              </Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/microfiberSub6' style={{textDecoration:'none'}} >
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch6} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        }  </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub6' style={{textDecoration:'none'}} class="read-more">
              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
                
              </Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/microfiberSub7' style={{textDecoration:'none'}}>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch7} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub7' style={{textDecoration:'none'}} class="read-more">
              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
                
              </Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/microfiberSub8' style={{textDecoration:'none'}} >
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch8} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub8' style={{textDecoration:'none'}} class="read-more">
              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
                
              </Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/microfiberSub9' style={{textDecoration:'none'}}>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch9} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub9' style={{textDecoration:'none'}} class="read-more">

              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
              </Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/microfiberSub10' style={{textDecoration:'none'}}>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch10} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub10' style={{textDecoration:'none'}} class="read-more">
              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
                
              </Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div></Link>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
      <Link to='/microfiberSub11' style={{textDecoration:'none'}} >
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch11} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>   {
         localStorage.getItem("lang") === "eng" 
          ? "     Printed Soft Lycra Fabric Microfiber "
          :localStorage.getItem("lang")=== "egp" 
            ? "قماش سوفت خفيف ليكرا مطبوع"
            :localStorage.getItem("lang")=== "fr" 
              ? "Microfibre de tissu Lycra doux imprimé" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Microfibra de tela de lycra suave impresa" 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/microfiberSub11' style={{textDecoration:'none'}} class="read-more">
              {
         localStorage.getItem("lang") === "eng" 
          ? " Show More"
          :localStorage.getItem("lang")=== "egp" 
            ? "أظهر المزيد" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Montre plus" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Mostrar más " 
                : ""
        }
                
              </Link>
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
