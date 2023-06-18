import React,{useEffect,useState} from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom';
// import dyedStretch1 from '../images/Products/Printed Bengaline Stretch for Pants - ‎بنجالين ليكرا مطبوع شروال/New Folder With Items 54/DSC_9317.jpg';
// import dyedStretch2 from '../images/Products/Printed Bengaline Stretch for Pants - ‎بنجالين ليكرا مطبوع شروال/New Folder With Items 54/DSC_9318.jpg';
import dyedStretch1 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-11.jpg';
import dyedStretch2 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-12.jpg';
import dyedStretch3 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-13.jpg';
import dyedStretch4 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-14.jpg';
import dyedStretch5 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-15.jpg';
import dyedStretch6 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-16.jpg';
import dyedStretch7 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-17.jpg';
import dyedStretch8 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-18.jpg';
import dyedStretch9 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-19.jpg';
import dyedStretch10 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-20.jpg';
import dyedStretch11 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-21.jpg';
import dyedStretch12 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-22.jpg';
import dyedStretch13 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-23.jpg';
import dyedStretch14 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-24.jpg';
// import dyedStretch15 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-11.jpg';
// import dyedStretch16 from '../images/Products/Dyed Scuba Fabric - قماش سكوبا/New Folder With Items 2/Agyby-11.jpg';
import axios from 'axios';
import swal from 'sweetalert';



export default function DyedScuba() {
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm4, setShowForm4] = useState(false);
  const [showForm5, setShowForm5] = useState(false);
  const [showForm6, setShowForm6] = useState(false);
  const [showForm7, setShowForm7] = useState(false);
  const [showForm8, setShowForm8] = useState(false);
  const [showForm9, setShowForm9] = useState(false);
  const [showForm10, setShowForm10] = useState(false);
  const [showForm11, setShowForm11] = useState(false);
  const [showForm12, setShowForm12] = useState(false);
  const [showForm13, setShowForm13] = useState(false);
  const [showForm14, setShowForm14] = useState(false);
  const [showForm15, setShowForm15] = useState(false);
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
                <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'60px'}} className="productName">
                {
         localStorage.getItem("lang") === "eng" 
          ? " Dyed Scuba Fabric"
          :localStorage.getItem("lang")=== "egp" 
            ?"نسيج سكوبا مصبوغ"
            :localStorage.getItem("lang")=== "fr" 
              ? "Tissu de plongée teint" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Tejido de buceo teñido" 
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
      )}</div>
           
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm1(true)}> {
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
      )}  </div>
           
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
        <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch4} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm3(true)}> {
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
                           {showForm3 && (
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
      )}     </div>
           
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm4(true)}> {
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
                                   {showForm4 && (
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
        <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch6} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more"  onClick={() => setShowForm5(true)}> {
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
                             {showForm5 && (
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
        <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch7} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm6(true)}> {
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
                         {showForm6 && (
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
        <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch8} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm7(true)}> {
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
                              {showForm7 && (
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
                <img src={dyedStretch9} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more"  onClick={() => setShowForm8(true)}> {
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
                       {showForm8 && (
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
      )}   </div>
           
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
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm9(true)}> {
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
                             {showForm9 && (
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
        <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch11} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more "  onClick={() => setShowForm10(true)}> {
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
                             {showForm10 && (
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
        <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch12} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more"  onClick={() => setShowForm11(true)}> {
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
                             {showForm11 && (
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
        <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch13} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more"  onClick={() => setShowForm12(true)}> {
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
                              {showForm12 && (
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
                <img src={dyedStretch14} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm13(true)}> {
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
                       {showForm13 && (
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
      )}      </div>
           
            </div>
          </Fade>
        </div>
        {/* <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch15} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm14(true)}> {
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
                           {showForm14 && (
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
        </div> */}
        {/* <div class="col-md-4 p-3">
          <Fade right>
            <div class="grid">
              <div class="entry-media" style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'300px', height:'300px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={dyedStretch16} style={{width:'100%', height:'100%', objectFit:'cover'}} alt class="img img-responsive"/></div>
              </div>
             
                <div class="entry-footer" style={{display:'flex', justifyContent:'center'}}>
                  <Link  style={{textDecoration:'none' ,display:'block'}} class="read-more" onClick={() => setShowForm15(true)}> {
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
                         {showForm15 && (
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
      )}    </div>
           
            </div>
          </Fade>
        </div> */}
      </div>
    </Element>
    
                              
                </div> 
            </section>
    </> 
  )
}
