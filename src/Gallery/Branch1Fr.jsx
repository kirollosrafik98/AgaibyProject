import React,{useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gallery1 from '../images/Shubra Branch/Agaypy1.jpg';
import gallery2 from '../images/Shubra Branch/Agaypy4.jpg';
import gallery3 from '../images/Shubra Branch/Agaypy8.jpg';
import gallery4 from '../images/Shubra Branch/Agaypy9.jpg';
import gallery5 from '../images/Shubra Branch/Agaypy10.jpg';
import gallery6 from '../images/Shubra Branch/Agaypy11.jpg';
import gallery7 from '../images/Shubra Branch/Agaypy16.jpg';
import gallery8 from '../images/Shubra Branch/Agaypy17.jpg';
import gallery9 from '../images/Shubra Branch/Agaypy18.jpg';
import gallery10 from '../images/Shubra Branch/Agaypy19.jpg';
import gallery11 from '../images/Shubra Branch/Agaypy20.jpg';
import gallery12 from '../images/Shubra Branch/Agaypy21.jpg';
import gallery13 from '../images/Shubra Branch/Agaypy23.jpg';
import gallery14 from '../images/Shubra Branch/Agaypy24.jpg';
import gallery15 from '../images/Shubra Branch/Agaypy26.jpg';

// import './Gallery.css';

const photos = [
    { id: 1, src: gallery1, alt: 'Photo 1' },
    { id: 2, src: gallery2, alt: 'Photo 2' },
    { id: 3, src: gallery3, alt: 'Photo 3' },
    { id: 4, src: gallery4, alt: 'Photo 4' },
    { id: 5, src: gallery5, alt: 'Photo 5' },
    { id: 6, src: gallery6, alt: 'Photo 6' },
    { id: 7, src: gallery7, alt: 'Photo 7' },
    { id: 8, src: gallery8, alt: 'Photo 8' },
    { id: 9, src: gallery9, alt: 'Photo 9' },
    { id: 10, src: gallery10, alt: 'Photo 10' },
    { id: 11, src: gallery11, alt: 'Photo 11' },
    { id: 12, src: gallery12, alt: 'Photo 12' },
    { id: 13, src: gallery13, alt: 'Photo 13' },
    { id: 14, src: gallery14, alt: 'Photo 14' },
    { id: 15, src: gallery15, alt: 'Photo 15' },

    // Add more photos here
  ];
  
export default function Branch1Fr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
<>
<div class="page-title">
            <div class="container">
            <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'60px'}}>Sucursale de Shubra</h1></Fade>

                {/* <h1>Gallery</h1> */}
            </div>
        </div>
 
        <section class=" section-padding" style={{paddingTop:'60px'}}>
            <div class="container">
            <div className="gallery-container">
      <Slider {...settings}>
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.src} style={{height:'600px', width:'100%',objectFit:'cover'}} alt={photo.alt} />
          </div>
        ))}
      </Slider>
    </div>
            </div> 
        </section>
</>  )
}
