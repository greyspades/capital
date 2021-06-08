import React, {useState,useEffect,useContext} from 'react';
//import Card from "../../components/Card/Card";
//import CardBody from "../../components/Card/CardBody";
import particle from "../../assets/img/particle.jpg";
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    
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
        <div style={{marginTop:500}}>
            <Container style={{}}>
            <div>
                  <h4>
                    Here what some happy investors have to say
                  </h4>
                </div>
              <Row>
               
                <Col style={{width:'100%'}} xs={12} md={4}>
                  <Card style={{width:'100%'}}>
                    <img className='testimonial-image' src={camp}></img>
                    <CardBody>
                      <h4 style={{}}>Maye Schowalter</h4>
                      <div style={{color:"white"}}>Cook Islands</div>
                      <div style={{width:'90%',height:4,backgroundColor:'#9a7801',borderRadius:2}}></div>
                      <div style={{color:"white"}}>Investment: $6700</div>
                      <div style={{color:"white"}}>Return: $10000</div>
                      <div style={{color:"white"}}>Maturity: 5 days</div>
                      <div style={{color:"white"}}>Date: 2021-06-12</div>
                    </CardBody>
                  </Card>
                </Col>

                <Col style={{width:'100%'}} xs={12} md={4}>
                  <Card style={{width:'100%'}}>
                    <img className='testimonial-image' src={jay}></img>
                    <CardBody>
                      <h4 style={{}}>Seth Lubowitz</h4>
                      <div style={{color:"white"}}>Moldova</div>
                      <div style={{width:'90%',height:4,backgroundColor:'#9a7801',borderRadius:2}}></div>
                      <div style={{color:"white"}}>Investment: $10000</div>
                      <div style={{color:"white"}}>Return: $15000</div>
                      <div style={{color:"white"}}>Maturity: 7 days</div>
                      <div style={{color:"white"}}>Date: 2021-06-11</div>
                    </CardBody>
                  </Card>
                </Col>

                <Col style={{width:'100%'}} xs={12} md={4}>
                  <Card style={{width:'100%'}}>
                    <img className='testimonial-image' src={jules}></img>
                    <CardBody>
                      <h4 style={{}}>Cecilia Davis</h4>
                      <div style={{color:"white"}}>Falklan Islands</div>
                      <div style={{width:'90%',height:4,backgroundColor:'#9a7801',borderRadius:2}}></div>
                      <div style={{color:"white"}}>Investment: $3400</div>
                      <div style={{color:"white"}}>Return: $5100</div>
                      <div style={{color:"white"}}>Maturity: 5 days</div>
                      <div style={{color:"white"}}>Date: 2021-06-09</div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

            </Container>
        </div>
    )
}

export default Testimonials