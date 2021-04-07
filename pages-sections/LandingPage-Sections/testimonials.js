import React, {useState,useEffect,useContext} from 'react';
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import particle from "../../assets/img/particle.jpg";
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'
import CountUp from 'react-countup'
import {Waypoint} from 'react-waypoint'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import AccountBalance from '@material-ui/icons/AccountBalance'
// photos
import jay from "assets/img/faces/jay.jpg";
import jules from "assets/img/faces/jules.jpg";
import camp from "assets/img/faces/camp.jpg";

import Slide from 'react-slick'



const Testimonials =()=>{
    const [main,setMain]=useState()

    const settings = {
        arrows:false,
         infinite: true,
         
         slidesToShow: 1,
         slidesToScroll: 1,
         speed:200,
         
         
       };

    return (
        <div>
            <Container style={{marginTop:-50}}>
              <Row>
                <div>
                  <h4>
                    Here what some happy investors have to say
                  </h4>
                </div>
                <Col md={8}>
                <Slide autoplay={true} className='slider' {...settings}>
          <div className='camp' style={{position:'relative',height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${camp})`}}>
              <div style={{fontSize:20,bottom:0,left:0,}} className='overlay'>
              <p style={{marginTop:130,position:'absolute',}}>
              best investment
              </p>
              </div>
          </div>
          <div className='jay' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${jay})`}}>
          <div className='overlay'>
              in everything
              </div>
          </div>
          <div className='jules' style={{height:50,width:200,backgroundColor:'blue',backgroundImage:`url(${jules})`}}>
                          <div className='overlay'>
              
              </div>
          </div>
        

        </Slide>
                </Col>

                <Col md={4}>
                  
                </Col>
              </Row>

            </Container>
        </div>
    )
}

export default Testimonials