import React,{useEffect} from 'react'
import Fade from 'react-reveal/Fade';

export default function ContactFr() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
<>
<div class="page-title">
            <div class="container">
            <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'80px'}}>Contactez-nous</h1></Fade>
                {/* <h1 style={{fontFamily:'Millania'}}>Contact</h1> */}
            </div>
        </div>
       
        <section class="contact-section">
            {/* <div class="contact-map" id="map"></div> */}
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-6  col-xs-12" style={{paddingTop:'3rem' ,paddingBottom:'2rem', display:'flex', justifyContent:'center'}}>
                        
                        <div class="contact-form" style={{height:'100%'}}>
                            <h3 style={{fontFamily:'Maya'}}>Formulaire de contact</h3>
                            <ul>
                                <li><i class="fa fa-home"></i>Siège social : Zone industrielle El-Shourok - Abo Zaabal - Al-Khanka - Al-Qalubia</li>
                                <li><i class="fa fa-phone"></i>+20 244 564 541 - +20 244 564 540</li>
                            </ul>
                            <h4 style={{fontFamily:'Maya'}}>Envoyer un e-mail</h4>
                            <form class="form contact-validation-active" id="contact-form">
                                <div>
                                    <input type="text" name="name" class="form-control" placeholder="Nom complet"/>
                                </div>
                                <div>
                                    <input type="email" name="email" class="form-control" placeholder="Messagerie électronique"/>
                                </div>
                                <div>
                                    <textarea name="note" class="form-control" placeholder="Message"></textarea>
                                </div>
                                <div class="submit">
                                <Fade left duration={1000} delay={500}>
    <button type="submit" style={{fontFamily:'Maya'}}>Envoyer</button></Fade>
                                    <span id="loader"><img src="images/contact-ajax-loader.gif" alt="Loader"/></span>
                                </div>
                                <div class="error-handling-messages">
                                    <div id="success">Merci</div>
                                    <div id="error"> Une erreur s'est produite lors de l'envoi de l'e-mail. Veuillez réessayer plus tard. </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 p-3 col-xs-12 p-3" style={{widgetSpacing: '20px'}}>
                    <Fade right duration={1000} delay={500}>    <div className="row">
<div className='elementor-widget-wrap elementor-element-populated' style={{position: 'relative',width: '100%',flexWrap: 'wrap',alignContent: 'flex-start',    display: 'flex', padding:'10px', justifyContent:'center'}}>
<div className='elementor-icon' style={{fontSize:'40px',padding:'20px 26px', backgroundColor:'#C0AB89', color:'#fff', borderRadius:'50%'}}>
<i class="fa-solid fa-phone"></i>

</div>
</div>
<h3 style={{textAlign:'center', fontFamily:'Maya'}}>Contact</h3>
<p  style={{textAlign:'center', padding:'0', margin:'0'}}>Usine: +20 244 564 541 - +20 244 564 540</p>
<p  style={{textAlign:'center', margin:'0'}}>Agence de Shubra: +20 120 770 3244</p>
<p  style={{textAlign:'center', margin:'0'}}>Agence de Gesr El Suez: +20 127 427 1266 - +20 127 535 5444</p>

{/* <p style={{textAlign:'center'}}>example@gmail.com</p> */}
</div></Fade>
<Fade right duration={1000} delay={500}>
    <div className="row">
<div className='elementor-widget-wrap elementor-element-populated' style={{position: 'relative',width: '100%',flexWrap: 'wrap',alignContent: 'flex-start',    display: 'flex', padding:'10px', justifyContent:'center'}}>
<div className='elementor-icon' style={{fontSize:'40px',padding:'20px 26px', backgroundColor:'#C0AB89', color:'#fff', borderRadius:'50%'}}>
<i class="fa-solid fa-location-dot"></i>

</div>
</div>
<h3 style={{textAlign:'center', fontFamily:'Maya'}}>Adresse</h3>
<p style={{textAlign:'center', margin:'0'}}>Usine : Zone industrielle d'El-Shourok - Abo Zaabal - Al-Khanka - Al-Qalubia</p>
<p style={{textAlign:'center', margin:'0'}}>Agence de Shubra : 15 rue Mai, Place de la mosquée Abo El Hana, Shubra El Khima - Al-Qalubia</p>
<p style={{textAlign:'center', margin:'0'}}>Agence de Gesr El Suez : Rue Mohamed Ibrahim, Derrière la rue 18, Le Caire</p>

</div></Fade>
<Fade right duration={1000} delay={500}>
<div className="row">
<div className='elementor-widget-wrap elementor-element-populated' style={{position: 'relative',width: '100%',flexWrap: 'wrap',alignContent: 'flex-start',    display: 'flex', padding:'10px', justifyContent:'center'}}>
<div className='elementor-icon' style={{fontSize:'40px',padding:'20px 26px', backgroundColor:'#C0AB89', color:'#fff', borderRadius:'50%'}}>
<i class="fa-regular fa-clock"></i>

</div>
</div>
<h3 style={{textAlign:'center', fontFamily:'Maya'}}>Horaires de travail</h3>
<p style={{textAlign:'center', margin:'0'}}>Ouvert du samedi au vendredi</p>
<p style={{textAlign:'center', margin:'0'}}>09.00 – 22.00
</p></div></Fade>
                    </div>
                </div> 
              
            </div> 
        </section>
        <section>
            <div className="container p-3">
                <div className="row p-3">
                    <div className="col"> 
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
  <div style={{position:'relative', width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3446.7918597514235!2d31.389328915119837!3d30.2430114818105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE0JzM0LjgiTiAzMcKwMjMnMjkuNSJF!5e0!3m2!1sen!2seg!4v1681817776603!5m2!1sen!2seg" style={{border:'0', width:'100%', height:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <h5 style={{textAlign:'center', marginTop:'20px',color:'rgb(118, 99, 69)',fontFamily:'Maya', fontSize:'26px', marginBottom:'1rem'}}>Sucursale d'usine</h5>
</div>
</div>
<div className="col"> 
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
  <div style={{position:'relative', width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3450.9016555438807!2d31.268097915117007!3d30.12562748185287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA3JzMyLjMiTiAzMcKwMTYnMTMuMCJF!5e0!3m2!1sen!2seg!4v1681817450116!5m2!1sen!2seg" style={{border:'0', width:'100%', height:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <h5 style={{textAlign:'center', marginTop:'20px',color:'rgb(118, 99, 69)',fontFamily:'Maya', fontSize:'26px', marginBottom:'1rem'}}>Sucursale de Shubra</h5>
</div>
</div>
<div className="col"> 
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
  <div style={{position:'relative', width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3450.341494250402!2d31.393973315117314!3d30.141651181847052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA4JzI5LjkiTiAzMcKwMjMnNDYuMiJF!5e0!3m2!1sen!2seg!4v1681817543047!5m2!1sen!2seg" style={{border:'0', width:'100%', height:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <h5 style={{textAlign:'center', marginTop:'20px',color:'rgb(118, 99, 69)',fontFamily:'Maya', fontSize:'26px', marginBottom:'1rem'}}>Sucursale de Gesr El Suez</h5>
</div>
</div>

                </div>
            </div>
        </section>
      

</>  )
}
