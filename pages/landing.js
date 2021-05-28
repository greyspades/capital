import React,{useState,useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Head from 'next/head'

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Plans from '../pages-sections/LandingPage-Sections/plans.js'
import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

import rc from '../assets/img/rc.jpg'
import Slider from "../pages-sections/LandingPage-Sections/slider"
import Testimonials from '../pages-sections/LandingPage-Sections/testimonials'
import {CircularProgress} from '@material-ui/core'

import {
 
  Row,
  Col,
  //Button
} from "reactstrap";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";


import ActiveUsers from '../pages-sections/LandingPage-Sections/activeUsers'
import cookies from "next-cookies";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props,{data}) {
  const classes = useStyles();
  const { ...rest } = props;
  //const [windowWidth,setWindowWidth]=useState(window.innerWidth)
  const [parallax,setParallax]=useState(false)
  const [loading,setLoading]=useState(true)
  

  useEffect(()=>{
    /*const handleResize=()=>{
      setWindowSize(window.innerWidth)
    }
    console.log(windowSize)
    window.addEventListener('resize',handleResize)
    return ()=>widow.removeEventListener('resize',handleResize)*/
    let width=window.innerWidth
    if(width<400){
      setParallax(true)
    }
    console.log(window.innerWidth)
    setLoading(false)
  },[])
  const Review=()=>{
    if(main==''){ 

    }
  }
  const convert=()=>{
    
  }

  const showLanding=()=>{
    return (
      <div>
        <Head>
          <title>
            Capital Investment Option
          </title>
        </Head>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax className='parallax-top landing-parallax' small={parallax}  filter  image={require("assets/img/header.jpg")}  >
          <div className={classes.container} style={{}}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <img src={rc} className='logo' />
                <div style={{}} className='intro-talk'>
                  
                </div>
  
                <br />
             
              
              </GridItem>
              <Row className='landing-buttons'>
                 <Col md={6} xs={6}>
              <div className='parallax-button' style={{}}>
              <a href='/signup'>
              <Button className='para-btn' style={{backgroundColor:'#050124',border:'#9a7801 solid 5px',borderRadius:7,fontSize:15,padding:5}}>Get started</Button>
              </a>
              </div>
                 </Col>
                 <Col md={6} xs={6}>
                 <div className='parallax-button'>
              <a href='/login'>
              <Button className='para-btn' style={{backgroundColor:'#050124',border:'#9a7801 solid 5px',borderRadius:7,fontSize:15,padding:5}}>Log In</Button>
              </a>
              </div>
                 </Col>
               </Row>
            
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)} style={{backgroundColor:'#050124'}}>
          <div  className={classes.container}>
            <ProductSection />

          </div>
          <div>
          <div className={classes.containerFluid}>
          <Slider />
              
          </div>
          <div>
            
          </div>
          <ActiveUsers />
           <Plans />
           <TeamSection />
 
           
           
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const showSpinner=()=>{
    return (
      <div className='opening-spinner'>
        <CircularProgress  style={{height:200,width:200,color:' #9a7801'}}  thickness={10} />
      </div>
    ) 
  }

  return (
    <div >
      {loading ? showSpinner() : showLanding()}
    </div>
  )

 

  //const user=cookieCutter.get('person')
  
}
/*LandingPage.getInitialValues=async ({req,res})=>{
  const cookieData=parseCookies(req)
  return {
    data:cookieData
  }
}*/
/*export async function getServerSideProps({req,res}) {
  const cook=req.cookies.room
  return {
    props:{token:cook}
  }
}*/