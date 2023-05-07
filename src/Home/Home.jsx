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
export default function Home() {
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
                    {/* <div class="container">
                        <div class="row slide-caption">
                            <div class="col col-md-8">
                                <h1 class="slide-title">The Best Solution For Your<span>Textile</span> And  <span>Garment Needs</span></h1>
                                <p>Morbi tristique senectus et netus et malesuada fames ac. Nunc vel risus commodo viverra. Non pulvinar neque laoreet suspendisse interdum. </p>
                                <a href="#" class="theme-btn-s2">About us</a>
                            </div>
                        </div>
                    </div> */}
                </div>

                
            </div>
        </section>
        <section class="services-serction-s3 section-padding w3-container">
            <div class="container ">
                <div class="row section-title-s6 ">
                    <div class="col col-lg-12 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <h2><span className="text-center" style={{fontFamily:'Millania', fontSize:'50px'}}>Who We Are</span> </h2>
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
                    <h1 className="w3-container  w3-animate-top" style={{color:'#766345', fontSize:'31px', fontWeight:'bold', textTransform:'capitalize' ,lineHeight:'1.2em', fontFamily:'Maya'}}>The Best Solution For Your Textile And Garment Needs</h1>
                    <p>Our aim is to meet the following criteria in order to provide the best textile solution while also meeting the needs of our customers:</p>
                 <ul>
                    <li style={{marginTop:'calc(16px/2)' ,paddingBottom:'calc(16px/2)'}}>
                        <span><i style={{color:'#C0AB89'}} class="fa-solid fa-circle-check fs-4"></i></span>
                    <span style={{paddingLeft:'2%'}}>Best Quality Standards</span>
                    </li>
                    <li style={{marginTop:'calc(16px/2)' ,paddingBottom:'calc(16px/2)'}}>
                        <span><i style={{color:'#C0AB89'}} class="fa-solid fa-circle-check fs-4"></i></span>
                    <span style={{paddingLeft:'2%'}}>
100% Satisfaction Guarantee</span>
                    </li>
                    <li style={{marginTop:'calc(16px/2)' ,paddingBottom:'calc(16px/2)'}}>
                        <span><i style={{color:'#C0AB89'}} class="fa-solid fa-circle-check fs-4"></i></span>
                    <span style={{paddingLeft:'2%'}}>
Quality Control System</span>
                    </li>
                 </ul>
              
              
                 <h1 style={{paddingTop:'20px', paddingBottom:'30px', fontFamily:'Foundation', textAlign:'center'}}> <span style={{color:'#766345', fontSize:'69px', fontWeight:'600', lineHeight:'1'}}>20+</span>  Years Experience
</h1>

<div class="all-projects" style={{borderRadius:'10px', display:'flex', justifyContent:'center'}}>
                    <Link to='/about' style={{textDecoration:'none',borderRadius:'10px'}} class="theme-btn-s2">More About Us</Link>
                </div></div>
                   </div>
                </div> 
            </div> 
        </section>
        <section class="section-padding">
            <div class="container">
                
                <div class="row section-title-s4">
                    <div class="col col-xs-12">
                        <h2 style={{color:'#766345',fontFamily:'Millania', fontSize:'50px'}}>Our Services
</h2>
<Fade top duration={1000} delay={500}>   <h1  style={{color:'#766345', fontSize:'31px', fontWeight:'bold', textTransform:'capitalize' ,lineHeight:'1.2em', fontFamily:'Maya'}}>Delivering The Highest Quality Fabrics</h1>
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
                <h4 style={{color:'#766345' , fontSize:'32px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', textAlign:'center', fontFamily:'Maya'}}>Weaving</h4>
                {/* <p style={{color:'#000'}}>Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.</p> */}
              </div>
            </Fade>
          </div>
          {/* <div className="col dyeing">
            <Fade right delay={1500}>
              <div className="SatinWrap">
                <div className="dyeingContainer" style={{display:'flex', justifyContent:'center'}}>
                  <img src={Fabric} alt="" style={{verticalAlign:'middle' , display:'inline-block'}}/>
                </div>
                <h4 style={{color:'#766345' , fontSize:'32px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', textAlign:'center', fontFamily:'Maya'}}>Knitting </h4>
              </div>
            </Fade>
          </div> */}
                <div className="col-md-3 dyeing p-1">
            <Fade right delay={500}>
              <div className="SatinWrap">
                <div className="dyeingContainer" style={{display:'flex', justifyContent:'center'}}>
                  <img src={dyeing} alt="" style={{verticalAlign:'middle' , display:'inline-block'}}/>
                </div>
                <h4 style={{color:'#766345' , fontSize:'32px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', textAlign:'center', fontFamily:'Maya'}}>Dyeing</h4>
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
                <h4 style={{color:'#766345' , fontSize:'32px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', textAlign:'center', fontFamily:'Maya'}}> Printing</h4>
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
                <h4 style={{color:'#766345' , fontSize:'32px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', textAlign:'center', fontFamily:'Maya'}}>Finishing</h4>
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
                    <Fade top duration={1000} delay={500}>    <h2 class="w3-center w3-animate-top" style={{fontFamily:'Millania', fontSize:'70px'}}>Some facts in <span style={{color:'#C0AB89'}}>Numbers</span></h2></Fade>
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
                            <h3>Meters / Month </h3>
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
                            <h3>Dedicated Employees</h3>
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
                            <h3>Satisfied Customers</h3>
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
                    <Fade top duration={700} delay={500}>  <h2  style={{fontFamily:'Millania', fontSize:'70px'}}>Our <span style={{color:'#C0AB89'}}>Products</span></h2></Fade>
                        {/* <p>Mauris ornare tellus et cursus volutpat. Praesent neque justo, dapibus id vestibulum nec, accumsan vitae sapien. Curabitur tempus tortor sit amet sapien.</p> */}
                    </div>
                </div> 
            </div>
    <LastestProjects/>
            {/* <div class="container-fluid">
                <div class="row">
                    <div class="projects-s3-grids project-s3-slider">
                        <div class="grid">
                            <div class="img-holder">
                                <img src={img1} alt/>
                            </div>
                            <div class="details">
                                <h3><a href="#">Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="img-holder">
                                <img src="images/latest-projects-s3/img-2.jpg" alt/>
                            </div>
                            <div class="details">
                                <h3><a href="#">Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="img-holder">
                                <img src="images/latest-projects-s3/img-3.jpg" alt/>
                            </div>
                            <div class="details">
                                <h3><a href="#">Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="img-holder">
                                <img src="images/latest-projects-s3/img-4.jpg" alt/>
                            </div>
                            <div class="details">
                                <h3><a href="#">Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="img-holder">
                                <img src="images/latest-projects-s3/img-2.jpg" alt/>
                            </div>
                            <div class="details">
                                <h3><a href="#">Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="img-holder">
                                <img src="images/latest-projects-s3/img-3.jpg" alt/>
                            </div>
                            <div class="details">
                                <h3><a href="#">Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="all-projects">
                    <a href="#" class="theme-btn-s2">All projects</a>
                </div>
            </div> */}
        </section>
        {/* <section class="testimonials-s2-faq section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-6">
                        <div class="section-title-s7">
                        <Fade left duration={1000} delay={500}>    <h2 style={{fontFamily:'Millania', fontSize:'70px'}}>Clients’ <span style={{color:'#C0AB89'}}>Testimonials</span></h2></Fade>
                        </div>
                        <div class="testimonials-slider-s2 dots-style-1">
                            <div class="grid">
                                <div class="client-quote">
                                    <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                                </div>
                                <div class="client-info">
                                    <div class="client-pic">
                                        <img src={test} alt=""/>
                                    </div>
                                    <div class="client-details">
                                        <h4>Marcus Finn</h4>
                                        <span>CEO, Axura</span>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>

                    <div class="col col-lg-6 faq-col">
                        <div class="section-title-s7">
                        <Fade right duration={1000} delay={500}>   <h2 style={{fontFamily:'Millania', fontSize:'70px'}}><span>FAQ</span></h2></Fade>
                        </div>
                        <div class="panel-group faq-accordion theme-accordion-s2" id="accordion">
                        <Accordion defaultActiveKey="0">
                        <div class="panel panel-default">
      <Accordion.Item eventKey="0">
      <div class="panel-heading">
        <Accordion.Header>What are the main changes to the Construction?</Accordion.Header>  </div>
        <Accordion.Body>
        <div class="panel-body">
                                        <p>perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                                    </div>
        </Accordion.Body>
      </Accordion.Item></div>
      <div class="panel panel-default"> <Accordion.Item eventKey="1">
        <Accordion.Header>Criteria requiring appointments of Project.</Accordion.Header>
        <Accordion.Body>
        <div class="panel-body">
                                        <p>perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                                    </div>
        </Accordion.Body>
      </Accordion.Item></div>
      <div class="panel panel-default"> <Accordion.Item eventKey="2">
        <Accordion.Header>What are the main changes to the Construction?</Accordion.Header>
        <Accordion.Body>
        <div class="panel-body">
                                        <p>perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                                    </div>
        </Accordion.Body>
      </Accordion.Item></div>
    </Accordion>
                          
                        </div>                        
                    </div>
                </div> 
            </div>
        </section> */}
        {/* <section class="partners-section">
            <div class="container">
                <div class="row">
                   <PartenrsSlide/>
                </div> 
            </div> 
        </section> */}
        <section class="blog-s2 section-padding">
            <div class="container">
                <div class="row section-title-s4">
                    <div class="col col-xs-12">
                    <Fade top duration={1000} delay={500}>    <h2 style={{fontFamily:'Millania', fontSize:'70px'}}>Latest <span style={{color:'#C0AB89'}}>blogs</span></h2></Fade>
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
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Increasing the innovativeness of textile and apparel industry</a></h3>
            <span class="entry-date"> March 16, 2023</span>
            <div class="entry-footer">
              <Link to='/blog1' style={{textDecoration:'none'}} class="read-more">Read More</Link>
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
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Will Industrial Engineers replace Traditional Production Managers?</a></h3>
            <span class="entry-date">February 6, 2023</span>
            <div class="entry-footer">
              <Link to='/blog2' style={{textDecoration:'none'}} class="read-more">Read More</Link>
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
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>10 Fabrics to Wear in Summer to Beat the Heat</a></h3>
            <span class="entry-date">March 10, 2023</span>
            <div class="entry-footer">
              <Link to='/blog3' style={{textDecoration:'none'}} class="read-more">Read More</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
                </div> 

                <div class="more-blog">
                    <Link to="/blog" style={{textDecoration:'none'}}  class="theme-btn-s2">More blogs</Link>
                </div>
            </div>
        </section>
</>  )
}
