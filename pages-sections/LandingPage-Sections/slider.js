import React, {useState,useEffect,useContext} from 'react';
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import particle from "../../assets/img/particle.jpg";
//import SimpleImageSlider from 'react-simple-image-slider'
import hold from "../../assets/img/holdcoin.jpg"
import writing from "../../assets/img/writing.jpg"
import loan from "../../assets/img/loan.jpg"
import save from "../../assets/img/save2.jpg"
import stack from "../../assets/img/stack.jpg"
import 'react-slideshow-image/dist/styles.css'
import opening from '../../assets/img/opening.jpg'
import dynamic from 'next/dynamic'
//import {Fade} from 'react-slideshow-image'
//import {OPacityCarousel} from 'react-opacity-carousel'
import {
    Container,  
    Row,
    Col,
    Button
} from 'reactstrap'
import Router from 'next/router'
import Slide from 'react-slick'
//import SimpleImageSlider from "react-simple-image-slider";
import { TickerTape } from "react-ts-tradingview-widgets";


const images = [
  { url: save },
{ url: loan },
{ url: writing},

     
    ];

 




const Slider=(props)=>{
    const [main,setMain]=useState()


      const slideImages=[
        save,loan,hold,stack
      ]
      const settings = {
       arrows:false,
        infinite: true,
        
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:400,
        
        
      };

    return (
        <div>
           {/*<Fade indicators={true}>
          <div className="">
            <div style={{'backgroundImage': `url(${slideImages[0]})`,backgroundColor:'rgb(0,0,0,0.3)'}} className='slide'>
              <span style={{opacity:1}}>Create your own personal crypto and cash wallets eith our plans  dedicated to ensuring asset security</span>
            </div>
          </div>
          <div className="" style={{backgroundColor:'rgb(0,0,0,0.3)'}}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`,backgroundColor:'rgb(0,0,0,0.3)'}}  className='slide'>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}} className='slide'>
              <span>Slide 3</span>
            </div>
          </div>
    </Fade>*/}
    <TickerTape colorTheme="dark"></TickerTape>
            <Container fluid className='slider-container'>
              <Row >
                <Col  md={8}>
                <Slide autoplay={true} className='slider' {...settings}>
          <div className='writing' style={{position:'relative',height:50,width:200,backgroundImage:`url(${writing})`}}>
              <div style={{fontSize:20,bottom:0,left:0,}} className='overlay'>
              
              </div>
          </div>
          <div className='save' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${loan})`}}>
          <div className='overlay'>
              
              </div>
          </div>
          <div className='stack' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${writing})`}}>
                          <div className='overlay'>
              
              </div>
          </div>
          <div className='holding' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${stack})`}}>
                          <div className='overlay'>
              
              </div>
          </div>
          <div className='loan' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${save})`}}>
                          <div className='overlay'>
              
              </div>
          </div>
          
        </Slide>
                </Col>

                <Col md={4}>
                  <div className='talk-2' style={{color:'white'}}>
                    

                  We are committed in creating wealth for you whenever, wherever. You can always trust us to deliver. Capital investment option is always for their customers and will continually do our best to bring meaningful returns on investments as well as adopting an unlimited CapitalLoan protocol which is aimed at creating financial assistance to everyone across the platform.


                  </div>
                  {/*<div className='gold-line'></div>
                  <div className='gold-line'></div>
  <div className='gold-line'></div>*/}

               
                </Col>
              </Row>
              <h3 className='getting-started' style={{color:'goldenrod',textAlign:'center'}}>
                      Getting Started
                    </h3>
                  <div className='afiliate-ctd'>
To access the features and benefits being provided by capital investment option kindly<Button onClick={()=>{Router.push(`../Register/${props.bomber}`)}} ><span style={{marginLeft:-30,marginRight:-30,marginTop:-7,marginBottom:-7}}>Sign up</span></Button> with credentials and get started. It's quite easy and doesn't take 
much time, of which you get an offer to become an investor and earn profit. For that reason you mandated to complete the registration process. In order to register yourself as a member of capitalinvestmentoption.com, click on the Create Account button, fill in the registration form and press Register. Your account is ready to use! You are obliged to provide only complete and accurate information about yourself (the Registration Data) when registering as a Member.

                  </div>

            </Container>
            
        
        </div>
    )
}
export default Slider