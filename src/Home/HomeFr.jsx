import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slider from '../images/home2.jpg';
import slider1 from '../images/slide-2.jpg';
import slider2 from '../images/slide-3.jpg';
import service1 from '../images/service/img-1.jpg';
import service2 from '../images/service/img-2.jpg';
import service3 from '../images/service/img-3.jpg';
import service4 from '../images/service/img-4.jpg';
import service5 from '../images/service/img-5.jpg';
import service6 from '../images/service/img-6.jpg';
import img1 from '../images/service/img-1.jpg';
import LastestProjects from './LastestProjects';
import PartenrsSlide from './PartenrsSlide';
import blog1 from '../images/firstBlog.png';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import Accordion from 'react-bootstrap/Accordion';
import test from '../images/test.jpg'
// import ScrollCounter from './ScrollCounter';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import agaiby from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/DSC_9158.jpg';
import dyeing from '../images/Sewing-Machine.png';
import stain from '../images/Wool-Ball.png';
import Fabric from '../images/Lines.png';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
// import { Fade } from 'react-reveal';
import finishing from '../images/Buckram.png';
export default function HomeFr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const [counterOn, setCounterOn] = useState(false);

  return (
<>

<section class="hero hero-slider-wrapper hero-slider-s2">
            <div class="hero-slider">
                <div class="slide">
                    <img src={slider} alt class="slider-bg"/>
               
                </div>

                
            </div>
        </section>
        <section class="services-serction-s3 section-padding w3-container">
            <div class="container ">
                <div class="row section-title-s6 ">
                    <div class="col col-lg-12 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <h2><span className="text-center" style={{fontFamily:'Millania', fontSize:'50px'}}>À propos</span> </h2>
                        {/* <p>Mauris ornare tellus et cursus volutpat. Praesent neque justo, dapibus id vestibulum nec, accumsan vitae sapien. Curabitur tempus tortor sit amet sapien.</p> */}
                    </div>
                </div> 
        
                <div class="row services-s2-grids">
                   <div className="col-md-5">
                    <div className="imageContainer w3-container w3-center w3-animate-left">
                        <img src={agaiby} alt="" style={{height:'60vh'}} />
                    </div>
                   </div>
                   <div className="col-md-7">
                    <div className="container">
                    <h1 className="w3-container  w3-animate-top" style={{color:'#766345', fontSize:'31px', fontWeight:'bold', textTransform:'capitalize' ,lineHeight:'1.2em', fontFamily:'Maya'}}>La meilleure solution pour vos besoins en textile et vêtements</h1>
                    <p>Notre objectif est de répondre aux critères suivants afin de fournir la meilleure solution textile tout en satisfaisant les besoins de nos clients:</p>
                 <ul>
                    <li style={{marginTop:'calc(16px/2)' ,paddingBottom:'calc(16px/2)'}}>
                        <span><i style={{color:'#C0AB89'}} class="fa-solid fa-circle-check fs-4"></i></span>
                    <span style={{paddingLeft:'2%'}}>Meilleures normes de qualité</span>
                    </li>
                    <li style={{marginTop:'calc(16px/2)' ,paddingBottom:'calc(16px/2)'}}>
                        <span><i style={{color:'#C0AB89'}} class="fa-solid fa-circle-check fs-4"></i></span>
                    <span style={{paddingLeft:'2%'}}>
                    100% garantie de satisfaction</span>
                    </li>
                    <li style={{marginTop:'calc(16px/2)' ,paddingBottom:'calc(16px/2)'}}>
                        <span><i style={{color:'#C0AB89'}} class="fa-solid fa-circle-check fs-4"></i></span>
                    <span style={{paddingLeft:'2%'}}>
                    Système de contrôle qualité</span>
                    </li>
                 </ul>
              
              
                 <h1 style={{paddingTop:'20px', paddingBottom:'30px', fontFamily:'Foundation', textAlign:'center'}}> <span style={{color:'#766345', fontSize:'69px', fontWeight:'600', lineHeight:'1'}}>20+</span>  Années d’expérience
</h1>

<div class="all-projects" style={{borderRadius:'10px', display:'flex', justifyContent:'center'}}>
                    <Link to='/about' style={{textDecoration:'none',borderRadius:'10px'}} class="theme-btn-s2">En savoir plus</Link>
                </div></div>
                   </div>
                </div> 
            </div> 
        </section>
        <section class="section-padding">
            <div class="container">
                
                <div class="row section-title-s4">
                    <div class="col col-xs-12">
                        <h2 style={{color:'#766345',fontFamily:'Millania', fontSize:'50px'}}>Nos services
</h2>
<Fade top duration={1000} delay={500}>   <h1  style={{color:'#766345', fontSize:'31px', fontWeight:'bold', textTransform:'capitalize' ,lineHeight:'1.2em', fontFamily:'Maya'}}>Fournir des tissus de la plus haute qualité</h1>
</Fade>       </div>
                </div> 
                <Element name="services">
                <div class="row">
                <div className="col-md-3 dyeing p-1">
            <Fade right delay={1000}>
              <div className="SatinWrap ">
                <div className="dyeingContainer" style={{display:'flex', justifyContent:'center'}}>
                  <img src={stain} alt="" style={{verticalAlign:'middle' , display:'inline-block'}}/>
                </div>
                <h4 style={{color:'#766345' , fontSize:'32px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', textAlign:'center', fontFamily:'Maya'}}>Tissage</h4>
                {/* <p style={{color:'#000'}}>Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.</p> */}
              </div>
            </Fade>
          </div>
       
                <div className="col-md-3 dyeing p-1">
            <Fade right delay={500}>
              <div className="SatinWrap">
                <div className="dyeingContainer" style={{display:'flex', justifyContent:'center'}}>
                  <img src={dyeing} alt="" style={{verticalAlign:'middle' , display:'inline-block'}}/>
                </div>
                <h4 style={{color:'#766345' , fontSize:'32px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', textAlign:'center', fontFamily:'Maya'}}>Teinture</h4>
                {/* <p style={{color:'#fff'}}>Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.</p> */}
              </div>
            </Fade>
          </div>
        
         
          <div className="col-md-3 dyeing p-1">
            <Fade right delay={1500}>
              <div className="SatinWrap">
                <div className="dyeingContainer" style={{display:'flex', justifyContent:'center'}}>
                  <img src={Fabric} alt="" style={{verticalAlign:'middle' , display:'inline-block'}}/>
                </div>
                <h4 style={{color:'#766345' , fontSize:'32px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', textAlign:'center', fontFamily:'Maya'}}> Impression</h4>
                {/* <p style={{color:'#000'}}>Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.</p> */}
              </div>
            </Fade>
          </div>
          <div className="col-md-3 dyeing p-1">
            <Fade right delay={1500}>
              <div className="SatinWrap">
                <div className="dyeingContainer" style={{display:'flex', justifyContent:'center'}}>
                  <img src={finishing} alt="" style={{verticalAlign:'middle' , display:'inline-block'}}/>
                </div>
                <h4 style={{color:'#766345' , fontSize:'32px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', textAlign:'center', fontFamily:'Maya'}}>Finition</h4>
                {/* <p style={{color:'#000'}}>Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.</p> */}
              </div>
            </Fade>
          </div>
                </div>     </Element>
            </div> 
        </section>
        <section class="fun-fact section-padding">
            <div class="container">
                <div class="row section-title-s4">
                    <div class="col col-xs-12">
                    <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px'}}>Quelques faits en <span style={{color:'#C0AB89'}}>chiffres</span></h2></Fade>
                    </div>
                </div> 
                <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                <div class="row start-count">
              
                    <div class="col-md-4 ">
                        <div class="grid">
                            <h4> <span  class="counter" >
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={500000}
                                duration={2}
                                delay={0}
                                prefix=""
                                suffix="+"
                              />
                            )}</span>
                                </h4>
                            <h3>Mètres / Mois </h3>
                            {/* <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p> */}
                        </div>
                        {/* <ScrollCounter/> */}
                    </div>
                    <div class="col-md-4 ">
                        <div class="grid">
                        <h4> <span  class="counter" >
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={800}
                                duration={2}
                                delay={0}
                                prefix=""
                                suffix="+"
                              />
                            )}</span>
                                </h4>
                            <h3>Employés dévoués</h3>
                            {/* <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p> */}
                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="grid">
                        <h4> <span  class="counter" >
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={3000}
                                duration={2}
                                delay={0}
                                prefix=""
                                suffix="+"
                              />
                            )}</span>
                                </h4>
                            <h3>De clients satisfaits</h3>
                            {/* <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p> */}
                        </div>
                    </div> 
                </div> </ScrollTrigger>
            </div> 
        </section>
        <section class="latest-porjects-s3 section-padding">
            <div class="container">
                <div class="row section-title-s3">
                    <div class="col col-lg-12 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <Fade top duration={700} delay={500}>  <h2  style={{fontFamily:'Millania', fontSize:'70px'}}>Nos  <span style={{color:'#C0AB89'}}>Produits</span></h2></Fade>
                        {/* <p>Mauris ornare tellus et cursus volutpat. Praesent neque justo, dapibus id vestibulum nec, accumsan vitae sapien. Curabitur tempus tortor sit amet sapien.</p> */}
                    </div>
                </div> 
            </div>
    <LastestProjects/>
         
        </section>
     
        <section class="blog-s2 section-padding">
            <div class="container">
                <div class="row section-title-s4">
                    <div class="col col-xs-12">
                    <Fade top duration={1000} delay={500}>    <h2 style={{fontFamily:'Millania', fontSize:'70px'}}>Derniers <span style={{color:'#C0AB89'}}>blogs</span></h2></Fade>
                    </div>
                </div> 
        
                <div class="row blog-s2-grids">
                <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid" >
          <div class="entry-media">
            <img src={blog1} style={{width:'100%', height:'200px',objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '220px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Accroître la capacité d’innovation de l’industrie du textile et de l’habillement</a></h3>
            <span class="entry-date"> 16 mars 2023</span>
            <div class="entry-footer">
              <Link to='/blog1' style={{textDecoration:'none'}} class="read-more">Lire la suite</Link>
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
            <img src={blog2} style={{width:'100%', height:'200px',objectFit:'cover'}}  alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '220px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Les ingénieurs industriels remplaceront-ils les directeurs de production traditionnels ?</a></h3>
            <span class="entry-date">6 février 2023</span>
            <div class="entry-footer">
              <Link to='/blog2' style={{textDecoration:'none'}} class="read-more">Lire la suite</Link>
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
            <img src={blog3} style={{width:'100%', height:'200px',objectFit:'cover'}}  alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '220px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>10 tissus à porter en été pour combattre la chaleur</a></h3>
            <span class="entry-date">10 mars 2023</span>
            <div class="entry-footer">
              <Link to='/blog3' style={{textDecoration:'none'}} class="read-more">Lire la suite</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
                </div> 

                <div class="more-blog">
                    <Link to="/blog" style={{textDecoration:'none'}}  class="theme-btn-s2">Plus de blogs</Link>
                </div>
            </div>
        </section>
</>  )
}
