
import React,{useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom';
import dyedStretch1 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 3/DSC_9230.jpg';
import dyedStretch2 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 8/DSC_9710.jpg';
import dyedStretch3 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 18/DSC_9610.jpg';
import dyedStretch4 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 22/DSC_9586.jpg';
import dyedStretch5 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 26/DSC_9563.jpg';
import dyedStretch6 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 27/DSC_9568.jpg';
import dyedStretch7 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 29/DSC_9551.jpg';
import dyedStretch8 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 30/DSC_9544.jpg';
import dyedStretch9 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 34/DSC_9516.jpg';
import dyedStretch10 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 53/DSC_9323.jpg';
import dyedStretch11 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 55/DSC_9315.jpg';
import dyedStretch12 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 57/DSC_9283.jpg';
import dyedStretch13 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 58/DSC_9278.jpg';
import dyedStretch14 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 59/DSC_9269.jpg';
import dyedStretch15 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 60/DSC_9252.jpg';
import dyedStretch16 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 61/DSC_9259.jpg';
import dyedStretch17 from '../images/Products/Printed Bengaline Light for T-Shirt with Lycra - ‎بنجالين لايت مطبوع قميص وتيشرت/New Folder With Items 62/DSC_9248.jpg';



export default function Bengaline() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 

  return (
<>
<div class="page-title">
            <div class="container">
            <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'80px'}}>
            {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
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
          <div class="entry-media">
            <img src={dyedStretch1} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub1' style={{textDecoration:'none'}} class="read-more">
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
        </div>
      </Fade>
    </div>
  
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch2} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        }</a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub2' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch3} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub3' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3" >
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch4} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        }</a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub4' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
  
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch5} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub5' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch6} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub6' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch7} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub7' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch8} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub8' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch9} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub9' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch10} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub10' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch11} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub11' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch12} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub12' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch13} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub13' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch14} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub14' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch15} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub15' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch16} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub16' style={{textDecoration:'none'}} class="read-more">     {
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
        </div>
      </Fade>
    </div>
    <div class="col-md-4 p-3">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={dyedStretch17} style={{width:'100%', height:'300px', objectFit:'cover'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>    {
         localStorage.getItem("lang") === "eng" 
          ? "Printed Bengaline Light for T-Shirt with Lycra"
          :localStorage.getItem("lang")=== "egp" 
            ? "‎بنجالين لايت مطبوع قميص وتيشرت" 
            :localStorage.getItem("lang")=== "fr" 
              ? "Bengaline Légère Imprimée pour T-Shirt avec Lycra" 
              :localStorage.getItem("lang")=== "spain" 
                ? "Luz Bengalina Estampada para Camiseta con Lycra " 
                : ""
        } </a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/bengalineSub17' style={{textDecoration:'none'}} class="read-more">     {
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
