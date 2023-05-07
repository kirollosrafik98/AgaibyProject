import logo from './logo.svg';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import Gallery from './Gallery/Gallery';
import GalleryHome from './Gallery/GalleryHome';
import Branch1 from './Gallery/Branch1';
import Branch2 from './Gallery/Branch2';
import Blog1 from './Blog/Blog1';
import Blog2 from './Blog/Blog2';
import Blog3 from './Blog/Blog3';
import Blog4 from './Blog/Blog4';
import Blog5 from './Blog/Blog5';
import Blog6 from './Blog/Blog6';
import Blog7 from './Blog/Blog7';
import Blog8 from './Blog/Blog8';
import Blog9 from './Blog/Blog9';
import Blog10 from './Blog/Blog10';
import Products from './Products/Products';
import DyedStretch from './Products/DyedStretch';
import Rozalin from './Products/Rozalin';
import Scuba from './Products/Scuba';
import Soft from './Products/Soft';
import Stretch from './Products/Stretch';
import PrintedRozalin from './Products/PrintedRozalin';
import PrintedScuba from './Products/PrintedScuba';
import Microfiber from './Products/Microfiber';
import Bengaline from './Products/Bengaline';
import Lycra from './Products/Lycra';
import Twill from './Products/Twill';
import DyedStretchSub1 from './Products/DyedStretchSub1';
import DyedStretchSub2 from './Products/DyedStretchSub2';
import DyedStretchSub3 from './Products/DyedStretchSub3';
import DyedStretchSub4 from './Products/DyedStretchSub4';
import DyedStretchSub5 from './Products/DyedStretchSub5';
import DyedStretchSub6 from './Products/DyedStretchSub6';
import DyedRozaline from './Products/DyedRozaline';
import DyedScuba from './Products/DyedScuba';
import DyedLycra from './Products/DyedLycra';
import PrintedStretchSub1 from './Products/PrintedStretchSub1';
import PrintedStretchSub2 from './Products/PrintedStretchSub2';
import PrintedStretchSub3 from './Products/PrintedStretchSub3';
import PrintedStretchSub4 from './Products/PrintedStretchSub4';
import PrintedStretchSub5 from './Products/PrintedStretchSub5';
import PrintedStretchSub6 from './Products/PrintedStretchSub6';
import MicrofiberSub1 from './Products/MicrofiberSub1';
import MicrofiberSub2 from './Products/MicrofiberSub2';
import MicrofiberSub3 from './Products/MicrofiberSub3';
import MicrofiberSub4 from './Products/MicrofiberSub4';
import MicrofiberSub5 from './Products/MicrofiberSub5';
import MicrofiberSub6 from './Products/MicrofiberSub6';
import MicrofiberSub7 from './Products/MicrofiberSub7';
import MicrofiberSub8 from './Products/MicrofiberSub8';
import MicrofiberSub9 from './Products/MicrofiberSub9';
import MicrofiberSub10 from './Products/MicrofiberSub10';
import MicrofiberSub11 from './Products/MicrofiberSub11';
import BengalineSub1 from './Products/BengalineSub1';
import BengalineSub2 from './Products/BengalineSub2';
import BengalineSub3 from './Products/BengalineSub3';
import BengalineSub4 from './Products/BengalineSub4';
import BengalineSub5 from './Products/BengalineSub5';
import BengalineSub6 from './Products/BengalineSub6';
import BengalineSub7 from './Products/BengalineSub7';
import BengalineSub8 from './Products/BengalineSub8';
import BengalineSub9 from './Products/BengalineSub9';
import BengalineSub10 from './Products/BengalineSub10';
import BengalineSub12 from './Products/BengalineSub12';
import BengalineSub13 from './Products/BengalineSub13';
import BengalineSub14 from './Products/BengalineSub14';
import BengalineSub15 from './Products/BengalineSub15';
import BengalineSub16 from './Products/BengalineSub16';
import BengalineSub11 from './Products/BengalineSub11';
import BengalineSub17 from './Products/BengalineSub17';
import History from './History/History';
import { useState } from 'react';
function App() {
  const [ar, setAr] =  useState(localStorage.getItem('lang') ? localStorage.getItem('lang') : "eng");

  return (
  <>
  <div class="home-style-3">
    <div class="page-wrapper">
    {/* { ar === 'ar' && < NavbarArab setAr={setAr}/> } */}
    {/* {  ar === 'eng' && 
    < Navbar setAr={setAr}/>} */}

  <Navbar/>
  <Routes>
    
{/* {ar ==='ar'&&
  <>
 <Route path='/about' element={<Aboutarab/> }/> 
 </>

} */}

{/* {ar ==='eng'&&
 <> */}
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/galleryHome' element={<GalleryHome/>}/>
    <Route path='/branch1' element={<Branch1/>}/>
    <Route path='/branch2' element={<Branch2/>}/>
<Route  path='/blog1' element={<Blog1/>}/>
<Route  path='/blog2' element={<Blog2/>}/>
<Route  path='/blog3' element={<Blog3/>}/>
<Route  path='/blog4' element={<Blog4/>}/>
<Route  path='/blog5' element={<Blog5/>}/>
<Route  path='/blog6' element={<Blog6/>}/>
<Route  path='/blog7' element={<Blog7/>}/>
<Route  path='/blog8' element={<Blog8/>}/>
<Route  path='/blog9' element={<Blog9/>}/>
<Route  path='/blog10' element={<Blog10/>}/>
<Route  path='/products' element={<Products/>}/>
<Route  path='/dyedStretch' element={<DyedStretch/>}/>
<Route  path='/rozalin' element={<Rozalin/>}/>
<Route  path='/scuba' element={<Scuba/>}/>
<Route  path='/soft' element={<Soft/>}/>
<Route  path='/stretch' element={<Stretch/>}/>
<Route  path='/printedRozalin' element={<PrintedRozalin/>}/>
<Route  path='/printedScuba' element={<PrintedScuba/>}/>
<Route  path='/microfiber' element={<Microfiber/>}/>
<Route  path='/bengaline' element={<Bengaline/>}/>
<Route  path='/lycra' element={<Lycra/>}/>
<Route  path='/twill' element={<Twill/>}/>
<Route  path='/dyedStretchSub1' element={<DyedStretchSub1/>}/>
<Route  path='/dyedStretchSub2' element={<DyedStretchSub2/>}/>
<Route  path='/dyedStretchSub3' element={<DyedStretchSub3/>}/>
<Route  path='/dyedStretchSub4' element={<DyedStretchSub4/>}/>
<Route  path='/dyedStretchSub5' element={<DyedStretchSub5/>}/>
<Route  path='/dyedStretchSub6' element={<DyedStretchSub6/>}/>
<Route path='/dyedRozaline' element={<DyedRozaline/>}/>
<Route path='/dyedScuba' element={<DyedScuba/>}/>
<Route path='/dyedLycra' element={<DyedLycra/>}/>
<Route  path='/printedStretchSub1' element={<PrintedStretchSub1/>}/>
<Route  path='/printedStretchSub2' element={<PrintedStretchSub2/>}/>
<Route  path='/printedStretchSub3' element={<PrintedStretchSub3/>}/>
<Route  path='/printedStretchSub4' element={<PrintedStretchSub4/>}/>
<Route  path='/printedStretchSub5' element={<PrintedStretchSub5/>}/>
<Route  path='/printedStretchSub6' element={<PrintedStretchSub6/>}/>
<Route  path='/microfiberSub1' element={<MicrofiberSub1/>}/>
<Route  path='/microfiberSub2' element={<MicrofiberSub2/>}/>
<Route  path='/microfiberSub3' element={<MicrofiberSub3/>}/>
<Route  path='/microfiberSub4' element={<MicrofiberSub4/>}/>
<Route  path='/microfiberSub5' element={<MicrofiberSub5/>}/>
<Route  path='/microfiberSub6' element={<MicrofiberSub6/>}/>
<Route  path='/microfiberSub7' element={<MicrofiberSub7/>}/>
<Route  path='/microfiberSub8' element={<MicrofiberSub8/>}/>
<Route  path='/microfiberSub9' element={<MicrofiberSub9/>}/>
<Route  path='/microfiberSub10' element={<MicrofiberSub10/>}/>
<Route  path='/microfiberSub11' element={<MicrofiberSub11/>}/>
<Route  path='/bengalineSub1' element={<BengalineSub1/>}/>
<Route  path='/bengalineSub2' element={<BengalineSub2/>}/>
<Route  path='/bengalineSub3' element={<BengalineSub3/>}/>
<Route  path='/bengalineSub4' element={<BengalineSub4/>}/>
<Route  path='/bengalineSub5' element={<BengalineSub5/>}/>
<Route  path='/bengalineSub6' element={<BengalineSub6/>}/>
<Route  path='/bengalineSub7' element={<BengalineSub7/>}/>
<Route  path='/bengalineSub8' element={<BengalineSub8/>}/>
<Route  path='/bengalineSub9' element={<BengalineSub9/>}/>
<Route  path='/bengalineSub10' element={<BengalineSub10/>}/>
<Route  path='/bengalineSub11' element={<BengalineSub11/>}/>
<Route  path='/bengalineSub12' element={<BengalineSub12/>}/>
<Route  path='/bengalineSub13' element={<BengalineSub13/>}/>
<Route  path='/bengalineSub14' element={<BengalineSub14/>}/>
<Route  path='/bengalineSub15' element={<BengalineSub15/>}/>
<Route  path='/bengalineSub16' element={<BengalineSub16/>}/>
<Route  path='/bengalineSub17' element={<BengalineSub17/>}/>
<Route path='/history' element={<History/>}/>
{/* </>} */}




  </Routes>

  {/* {ar ==='ar'&&  <Footerarab/>} */}
 {/* {  ar=== 'eng'&&  */}
 <Footer />
  {/* } */}
 </div></div>
  </>
  );
}

export default App;