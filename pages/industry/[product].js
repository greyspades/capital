import React,{useState,useContext,useEffect} from 'react'
import {MyContext} from '../../components/context'
//import './home.css'
//import {motion} from 'framer-motion'
//import Image from 'next/image'
import tech1 from "assets/img/tech1.jpg"

import tech2 from "assets/img/tech2.jpg"
import {useRouter} from 'next/router'
//import tech1 from "assets/img/tech1"
import {motion} from 'framer-motion'
import Footer from 'components/footer/footer.js'
import chain from 'assets/img/chain.jpg'
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    UncontrolledTooltip,
    Row,
    Col,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
} from "reactstrap";
//import IndexNavbar from "components/Navbars/ExamplesNavbar.js";


const Industries = () => {
    const [main,setmain]=useContext(MyContext)
    const [item,setItem]=useState({})
    const [img,setImg]=useState()
    const router=useRouter()
    var {product} =router.query
    //var  name='foo fighters'
    //var  beat='name'
    //const [main,setmain]=useState()
   
    useEffect(()=>{
       if(product=='software'){
           setItem(main.software)
       }
       else if(product=='finance'){
           setItem(main.finance)
       }
       else if(product=='travel'){
        setItem(main.travel)
        }
        else if(product=='healthcare'){
            setItem(main.healthcare)
        }
        else if(product=='verticals'){
            setItem(main.verticals)
        }
    })
    return (
        <div style={{height:1200,backgroundColor:'#050124',}} className='background'>
           <div style={{backgroundColor:'rgb(255,255,255,0.2)',height:70,}}>
             <Container>
                <Row>
                    <Col>
                    
                    </Col>
                    <Col style={{display:'inline-flex',marginTop:20}}>
                    <li style={{marginRight:30,listStyle:'none',color:'white'}}><a style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:15}} href=''>Home</a></li>
                    <li style={{marginRight:30,listStyle:'none',color:'white'}}><a style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:15}} href=''>Contact</a></li>
                    <li style={{marginRight:30,listStyle:'none',color:'white'}}><a style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:15}} href=''>About</a></li>
                    <li style={{marginRight:30,listStyle:'none',color:'white'}}><a style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:15}} href=''>Register</a></li>
                    </Col>
                </Row>
                
             </Container>
           </div>
            <div style={{}}>
            <Container className='main-details' style={{}}>
                <h3 className='title' style={{color:'white',}}>
                    {item.title}
                </h3>
              <Row>
                  <Col md={10}>
                  <Row style={{padding:15,backgroundImage:"url(" + require("assets/img/chain.png") + ")",backgroundRepeat:'no-repeat',backgroundSize:'cover',}} className='transparent-container blockquote blockquote-info'>
                    <Col xs={12} md={7} style={{width:300}}>
                    <img
                      alt="..."
                      className=" img-fluid home-image"
                      src={tech1}
                      style={{backgroundSize:'cover',width:700,borderRadius:10}}
                    ></img>
                    </Col>
                    
                    <Col md={5} xs={12} style={{marginTop:0,width:500}} >
                        
                        <p style={{color:'white'}}>
                            {item.writup}
                        </p>
                    </Col>
                    <Col >
                        <div style={{width:150,height:70,background:'rgb(255,255,255,0.4)',textAlign:'center',padding:14,borderRadius:5}}>
                            <p  style={{color:'white'}}>
                                click
                            </p>
                        </div>
                    </Col>
                   
                    </Row>
              
                <Row style={{backgroundColor:'#050124',}} className='second' >
                    <Col  className='mini-sections'  xs={12} md={4} 
                    style={{width:200,padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <img
                      alt="..."
                      className=" img-fluid"
                      src={tech2}
                      style={{backgroundSize:'contain',height:150,width:300,}}
                    ></img>
                        <div>
                            <h4 style={{color:'white'}}>
                                {main.software.subHeading1}
                            </h4>
                        <p style={{color:'white'}}>
                        {item.subWritup1}
                        </p>
                        </div>
                        
                    </Col>
                
                    <Col   xs={12} md={4} 
                    style={{width:200,padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                         <img
                      alt="..."
                      className="img-fluid"
                      src={tech2}
                      style={{backgroundSize:'contain',height:150,width:300,}}
                    ></img>
                        <div>
                            <h4 style={{color:'white'}}>
                                {main.software.subHeading1}
                            </h4>
                        <p style={{color:'white'}}>
                        {item.subWritup1}
                        </p>
                        </div>
                      
                    </Col>
                   </Row>
                
                  </Col>
                  <Col className='side-bar' style={{marginLeft:'auto',backgroundColor:'#050124'}} xs={12} md={1}>
                  <div className='side-top' style={{}}></div>
                    <Container className='side-group' style={{}}>
                    <Row className='row1'>
                    <Col xs={3} md={12}>
                    <motion.li whileHover={{scale:1.5,borderColor:'white',textShadow:'0px 0px 8px rgb(255,255,255)'}} className='side-elements' style={{listStyle:'none',color:'white'}}><a style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:15}} href=''>Home</a></motion.li>
                    </Col>
                    <Col xs={3} md={12}>
                    <motion.li whileHover={{scale:1.5,borderColor:'white',textShadow:'0px 0px 8px rgb(255,255,255)'}} className='side-elements' style={{listStyle:'none',color:'white'}}><a style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:15}} href=''>Home</a></motion.li>
                    </Col>
                    <Col xs={3} md={12}>
                    <motion.li whileHover={{scale:1.5,borderColor:'white',textShadow:'0px 0px 8px rgb(255,255,255)'}} className='side-elements' style={{listStyle:'none',color:'white'}}><a style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:15}} href=''>Home</a></motion.li>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={3} md={12}>
                    <motion.li whileHover={{scale:1.5,borderColor:'white',textShadow:'0px 0px 8px rgb(255,255,255)'}} className='side-elements' style={{listStyle:'none',color:'white'}}><a style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:15}} href=''>Home</a></motion.li>
                    </Col>
                    <Col xs={3} md={12}>
                    <motion.li whileHover={{scale:1.5,borderColor:'white',textShadow:'0px 0px 8px rgb(255,255,255)'}} className='side-elements' style={{listStyle:'none',color:'white'}}><a style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:15}} href=''>Home</a></motion.li>
                    </Col>
                    <Col xs={3} md={12}>
                    <motion.li whileHover={{scale:1.5,borderColor:'white',textShadow:'0px 0px 8px rgb(255,255,255)'}} className='side-elements' style={{listStyle:'none',color:'white'}}><a style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:15}} href=''>Home</a></motion.li>
                    </Col>
                    </Row>
                  
                    
                    </Container>
                    </Col>
              </Row>
                
            </Container>
            </div>
            <Footer />
        </div>
    )
}
export default Industries
