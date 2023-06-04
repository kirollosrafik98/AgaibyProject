import React,{useEffect} from 'react'
import blog1 from '../images/firstBlog.png';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import blog4 from '../images/about.jpg';
import blog5 from '../images/big_Big.jpg';
import blog6 from '../images/STTI.jpg';
import blog7 from '../images/fiber.png';
import blog8 from '../images/image-34.png';
import blog9 from '../images/sora.jpg';
import blog10 from '../images/blog10.jpg';

// import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
export default function BlogFr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div class="page-title">
            <div class="container">
            <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'60px'}}>Blogues</h1></Fade>

                {/* <h1>Blog</h1> */}
            </div>
        </div>
     
        <section class="blog-content-section section-padding" style={{paddingTop:'60px'}}>
            <div class="container">
        
 <Element name='blog' >
  <div class="row blog-s2-grids ">
   
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={blog2} style={{width:'100%', height:'200px',objectFit:'cover'}}  alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '200px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Les ingénieurs industriels remplaceront-ils les...</a></h3>
            <span class="entry-date">Février 6, 2023</span>
            <div class="entry-footer">
              <Link to='/blog2' style={{textDecoration:'none'}} class="read-more">En savoir plus</Link>
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
          <div class="entry-details"  style={{ height: '200px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>10 tissus à porter en été pour combattre la chaleur</a></h3>
            <span class="entry-date">Mars 10, 2023
</span>
            <div class="entry-footer">
              <Link to='/blog3' style={{textDecoration:'none'}} class="read-more">En savoir plus</Link>
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
            <img src={blog4} style={{width:'100%', height:'200px',objectFit:'cover'}}  alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '200px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Progrès dans les technologies de tissage de...</a></h3>
            <span class="entry-date">Mars 13, 2018</span>
            <div class="entry-footer">
              <Link to='/blog4' style={{textDecoration:'none'}} class="read-more">En savoir plus</Link>
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
            <img src={blog5} style={{width:'100%', height:'200px',objectFit:'cover'}}  alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '200px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Stratégies d'approvisionnement en textiles et vêtements</a></h3>
            <span class="entry-date"> Février 1, 2023</span>
            <div class="entry-footer">
              <Link to='/blog5' style={{textDecoration:'none'}} class="read-more">En savoir plus</Link>
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
            <img src={blog6} style={{width:'100%', height:'200px',objectFit:'cover'}}  alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '200px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>La coalition STTI salue l'amélioration des pratiques...</a></h3>
            <span class="entry-date">
Mars 14, 2023</span>
            <div class="entry-footer">
              <Link to='/blog6' style={{textDecoration:'none'}} class="read-more">En savoir plus</Link>
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
            <img src={blog7} style={{width:'100%', height:'200px',objectFit:'cover'}}  alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '200px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Fibres de sous-produits du lait – une nouvelle dimension</a></h3>
            <span class="entry-date">Mars 18, 2023
</span>
            <div class="entry-footer">
              <Link to='/blog7' style={{textDecoration:'none'}} class="read-more">En savoir plus</Link>
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
            <img src={blog8} style={{width:'100%', height:'200px',objectFit:'cover'}}  alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '200px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>L'avenir des textiles avec la nanotechnologie</a></h3>
            <span class="entry-date">Mars 16, 2023
</span>
            <div class="entry-footer">
              <Link to='/blog8' style={{textDecoration:'none'}} class="read-more">En savoir plus</Link>
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
            <img src={blog9} style={{width:'100%', height:'200px',objectFit:'cover'}}  alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '200px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Durabilité dans le traitement <br /> des textiles
</a></h3>
            <span class="entry-date">Septembre 18, 2022</span>
            <div class="entry-footer">
              <Link to='/blog9' style={{textDecoration:'none'}} class="read-more">En savoir plus</Link>
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
            <img src={blog10} style={{width:'100%', height:'200px',objectFit:'cover'}}  alt class="img img-responsive"/>
          </div>
          <div class="entry-details"  style={{ height: '200px', overflow: 'hidden' }}>
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Etude d'application d'Oxyde de Graphène réduit sur tissu...
</a></h3>
            <span class="entry-date"> Février 23, 2022</span>
            <div class="entry-footer">
              <Link to='/blog10' style={{textDecoration:'none'}} class="read-more">En savoir plus</Link>
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
</>  )
}
