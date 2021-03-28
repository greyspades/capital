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
import dynamic from 'next/dynamic'
//import {Fade} from 'react-slideshow-image'
//import {OPacityCarousel} from 'react-opacity-carousel'
import {
    Container,  
    Row,
    Col,
    Button
} from 'reactstrap'
import Slide from 'react-slick'
//import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: save },
{ url: loan },
{ url: writing},

     
    ];

    const OpacityCarousel=dynamic(()=>import('react-opacity-carousel'),
  {ssr:false}
)




const Slider=()=>{
    const [main,setMain]=useState()


      const slideImages=[
        save,loan,hold,stack
      ]
      const settings = {
       arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        
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
            <Container>
              <Row>
                <Col md={8}>
                <Slide autoplay={true} className='slider' {...settings}>
          <div className='writing' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${writing})`}}>
              <div className='overlay'>
              ludex gundyr
              </div>
          </div>
          <div className='save' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${loan})`}}>
          <div className='overlay'>
              ludex gundyr
              </div>
          </div>
          <div className='stack' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${writing})`}}>
                          <div className='overlay'>
              ludex gundyr
              </div>
          </div>
          <div className='holding' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${stack})`}}>
                          <div className='overlay'>
              ludex gundyr
              </div>
          </div>
          <div className='loan' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${save})`}}>
                          <div className='overlay'>
              ludex gundyr
              </div>
          </div>
          <div className='slide'>
                          <div className='overlay'>
              ludex gundyr
              </div>
          </div>
        </Slide>
                </Col>

                <Col md={4}>
                  <Card>
                    <CardBody className='gold-card'>
                      ludex gundyr
                    </CardBody>
                  </Card>
                </Col>
              </Row>

            </Container>
        
        </div>
    )
}
export default Slider