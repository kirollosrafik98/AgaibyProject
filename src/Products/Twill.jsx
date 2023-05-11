import React,{useEffect,useState} from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom';

import dyedStretch1 from '../images/Products/Dyed Gabardine twill Fabric for Pants and Uniform - ‎قماش جبردين أسبن بعرض ١٦٠ سم للبناطيل و اليونيفورم/New Folder With Items 10/DSC_9695.jpg';
import dyedStretch2 from '../images/Products/Dyed Gabardine twill Fabric for Pants and Uniform - ‎قماش جبردين أسبن بعرض ١٦٠ سم للبناطيل و اليونيفورم/New Folder With Items 10/DSC_9696.jpg';
import dyedStretch3 from '../images/Products/Dyed Gabardine twill Fabric for Pants and Uniform - ‎قماش جبردين أسبن بعرض ١٦٠ سم للبناطيل و اليونيفورم/New Folder With Items 10/DSC_9697.jpg';
import axios from 'axios';
import swal from 'sweetalert';



export default function Twill() {
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [formData, setFormData] = useState({
    productName:  document.addEventListener('DOMContentLoaded', () => {
      const productName = document.querySelector('.productName');
      const productNameText = productName ? productName.innerHTML : '';
      // Use the productNameText variable here
    }),
    // productName:document.querySelector('.productName').innerHTML,
    clientName: "",
    message: "",
    email: "",
    phone: "",
    companyName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://agaiby-t23y.onrender.com/form/addForm", formData)
      .then((response) => {
        console.log(response.data);
        swal({
          title: "Good job!",
          text: "Your data has been sent successfully!",
          icon: "success",
          button: {
            text: "OK",
            value: true,
          },
        }).then((value) => {
          if (value) {
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div class="page-title">
                <div class="container">
                <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'60px'}}  className="productName">
                {
         localStorage.getItem("lang") === "eng" 
          ? "Dyed Gabardine twill Fabric for Pants and Uniform"
          :localStorage.getItem("lang")=== "egp" 
            ? "نسيج جبردين مصبوغ من التويل للسراويل والزي الموحد"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu sergé gabardine teint pour pantalon et uniforme" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tela de sarga de gabardina teñida para pantalones y uniformes" 
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm(true)}> {
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
                               {showForm && (
        <div className="popup-container">
          <form onSubmit={handleSubmit} className="popup-form">
            <input
              type="text"
              name="clientName"
              placeholder="Client Name"
              value={formData.clientName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )} </div>
           
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more"  onClick={() => setShowForm1(true)}> {
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
                      {showForm1 && (
        <div className="popup-container">
          <form onSubmit={handleSubmit} className="popup-form">
            <input
              type="text"
              name="clientName"
              placeholder="Client Name"
              value={formData.clientName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}        </div>
           
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm2(true)}> {
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
                                 {showForm2 && (
        <div className="popup-container">
          <form onSubmit={handleSubmit} className="popup-form">
            <input
              type="text"
              name="clientName"
              placeholder="Client Name"
              value={formData.clientName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}  </div>
           
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
