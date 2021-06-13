import React,{useState,useContext,useRef,useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Router from "next/router";
// core components
//import Header from "components/Header/Header.js";
//import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {Formik} from 'formik';
import {motion} from 'framer-motion';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import {UserContext} from '../components/userContext'
//import useCookies from 'next-cookies'
//mport {parseCookies} from './api/cookies'
import Axios from 'axios'
import {Check} from '@material-ui/icons/Check'
import {CircularProgress} from '@material-ui/core'
import dynamic from 'next/dynamic'
import Header from '../components/Header/Header'
import HeaderLinks from '../components/Header/HeaderLinks'
//import useLocalStorage from 'react-hook-uselocalStorage'
//import useLocalStorage from '../hooks/localStorage'
import {
    
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
    Spinner,
    Alert,
    Button

} from "reactstrap"
import Head from 'next/head'
import ReCaptcha from 'react-google-recaptcha'
import cookie from 'js-cookie'
import cookies from 'next-cookies'
import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";
//import ReCaptcha from 'react-google-recaptcha'
import image from "assets/img/bg7.jpg";
import PhoneIcon from '@material-ui/icons/Phone'
import cookieCutter from "cookie-cutter";
//import { Container } from "@material-ui/core";

//email js
import emailjs from 'emailjs-com';



const useStyles = makeStyles(styles);

export default function Registration(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [eye,setEye]=useState(false)
  const [userDetails,setUserDetails]=useState(props || '')
  const [error,setError]=useState('')
  const [visible,setVisible]=useState('')
  const [startCaptcha,setCaptcha]=useState(false)
  //const [cookie, setCookie]=useCookies(['user'])
  //const {executeRecaptcha}=useGoogleReCaptcha()
  const [solved,setSolved]=useState(false)
  const reRef=useRef()
  const [user,setUser]=useState()
  const [showButton,setShowButton]=useState(true)
  const [showClick,setClick]=useState(true)
  const [buton,setButon]=useState(true)
  const [showSpiner,setSpiner]=useState(false)
  
  const [spinner,setSpinner]=useState({
    pending:false,
    done:false,
  })
  const [showSpin,setShowSpin]=useState(false)

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  
  
  const solve=()=>{
    //setSolved(true)
    let per={
      name:user.firstname,
      mail:user.email
    }
   
    //setShowSpin(true)
    Axios.post('/api/user',{user})
    .then((res)=>{
      console.log(res.data)
     if(res.data=='SAVED'){
      console.log('sent')
      //console.log(res)
      cookie.set('key',JSON.stringify(user))
      /*setSpinner({
        pending:false,
        done:true,
      })*/
      mail(per)
      Router.push('/success')
     }
     else if(res.data=='THAT EMAILL ADDRESS IS TAKEN'){
       alert('Sorry the email address or username is already taken')
       setShowSpin(false)
       setClick(true)
       setCaptcha(false)
     }
    
      //console.log(userdetail)
    
    })
    .catch((err)=>{
      console.log(err.response.data)
      //console.log('wahala')
     if(err.response.data=='mongo wahala'){
      alert('Unnable to connect to the server please try again later')
      setShowSpin(false)
     }
    })
    
   
   
  }
  useEffect(()=>{
    console.log('mounted')
    //init("user_i5h5cumEytlzj4MMhNWzU");
    
  })
  const mail=(user)=>{
    setShowSpin(true)
    setShowButton(false)
    Axios.post('/api/mail',{user})
    .then((res)=>{
      console.log('sent mail')
      console.log(res.data)
    })
    //console.log(mail,name)
  }

  
  const submit=()=>{
    if(showButton==true){
      return (
        <div>
          
        </div>
      )
    }
    else if(showSpin==true && showButton==false){
      return (
        <div>
            <Spinner />
        </div>
      )
    }
    
    else if(startCaptcha==true){
      return (
        <div style={{display:'grid',placeItems:'center',color:'red'}} className='captcha'>
        <ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  ref={reRef}
  //size='invisible'
  //onChange={captcha}
  badge='inline'
  onChange={solve}
  
  />
        </div>
      )
  }
  
  }
  const showItems=(handleSubmit)=>{
    if(buton==true){
      return (
        <div style={{width:'100%'}}>
          <Button style={{border:0,padding:10,display:'grid',placeItems:'center',marginRight:'20%'}} onClick={handleSubmit}>
            <div className='get-started' style={{width:140,height:50,backgroundColor:'#050124'
                       ,borderRadius:5,textAlign:'center',padding:5}}>
                        <p style={{color:'white',marginTop:6,fontSize:20}}>
                        Get Started
                        </p>
                       </div>
            </Button>
        </div>
      )
    }
    
  }

  const showCaptcha=()=>{
    if(startCaptcha==true){

      return (
        <div style={{display:'grid',placeItems:'center',height:100}} className='captcha'>
          <div style={{textAlign:'center',color:'blue'}}>
            Please confirm you are human
          </div>
        <ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  ref={reRef}
  size='invisible'
  //onChange={captcha}
  badge='inline'
  onChange={solve}
  
  />
        </div>
      )
  }
  }

  const registerUser=()=>{
    
    
  }
  
  const showEye=()=>{
    if(eye){
      setVisible('text')
      return (
        <VisibilityIcon style={{width:40,height:40}} />
      )
    }
    else if(!eye) {
      setVisible('password')
      return(
        <VisibilityOffIcon style={{width:40,height:40}} />
      )
    }
  }
  const networkError=(() => {
    setCaptcha(false)
    setShowSpin(false)
      alert('Unable to connect to the server check your internet connection and try again')
})
function captcha(value){
  console.log('captured',value)
}



const spin=()=>{
  if(showSpiner==true){
    return (
      <div>
          <Spinner />
      </div>
    )
  }
}

  //const token = executeRecaptcha("Register");
  return (
    <div>
      <Head>
        <script type="text/javascript" dangerouslySetInnerHTML={{__html:`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60bce4f64ae6dd0abe7cc090/1f7gtsphd';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
`
}} />
    </Head>
      <Header
        absolute
        color="transparent"
        //brand="Capital Investment"
        //rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div>
       
      
        </div>
        <div className={classes.container}>
          <GridContainer justify="center" >
            <GridItem xs={12} sm={6} md={8}>
              <Card className={classes[cardAnimaton],'register'}>
                <Formik initialValues={{firstname:'',lastname:'',email:'',password:'',nextPassword:'',phone:'',username:'',}} onSubmit={(values)=>{
                  let user={
                    firstname:values.firstname,
                    lastname:values.lastname,
                    email:values.email,
                    password:values.password,
                    phone:values.phone,
                    username:values.username,
                    balance:0.00
                   
                  }
                 
                  
                  if(values.password==values.nextPassword&&values.password.length>=8 &&values.firstname&&values.lastname&&values.phone&&values.email&&values.username){
                    setUser({
                      firstname:values.firstname,
                    lastname:values.lastname,
                    email:values.email,
                    password:values.password,
                    phone:values.phone,
                    username:values.username,
                    balance:0.00
                    })
                    setButon(false)
                    setSpiner(true)
                    let per={
                      name:user.firstname,
                      mail:user.email
                    }
                    Axios.post('/api/user',{user})
                    .then((res)=>{
                      console.log(res.data)
                     if(res.data=='SAVED'){
                      console.log('sent')
                      //console.log(res)
                      cookie.set('key',JSON.stringify(user))
                      /*setSpinner({
                        pending:false,
                        done:true,
                      })*/
                      mail(per)
                      Router.push('/success')
                     }
                     else if(res.data=='THAT EMAILL ADDRESS IS TAKEN'){
                       alert('Sorry the email address or username is already taken')
                       setSpiner(false)
                       setButon(true)
                       
                     }
                    
                      //console.log(userdetail)
                    
                    })
                    .catch((err)=>{
                      console.log(err.response.data)
                      //console.log('wahala')
                     if(err.response.data=='mongo wahala'){
                      alert('Unnable to connect to the server please try again later')
                      setSpiner(false)
                       setButon(true)
                     }
                    })
                    

                   
                  }
                 
                  else if(values.password!=values.nextPassword&&values.firstname&&values.lastname&&values.email){
                    alert('The passwords do not match')
                    setSpiner(false)
                    setButon(true)
                  }
                  else if(values.password.length<8){
                    alert('Password must contain at least 8 characters')
                    setSpiner(false)
                    setButon(true)
                  }
                  else if(!values.firstname||!values.lastname||!values.email||!values.password||!values.phone)
                  alert('All fields are required')
                    setSpiner(false)
                    setButon(true)
                }}>
                  {({handleChange,handleSubmit,values,user})=>((
                    <form className={classes.form,'login'}>
        
                    <CardHeader  style={{backgroundColor:"#050124"}} className={classes.cardHeader}>
                      <h4 style={{color:'white'}}>Sign Up</h4>
                      
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                      <div style={{}}>
                      <CardBody style={{}}>
                     
                      <Container>
                        <Row style={{marginTop:-30,textAlign:'center'}}>
                          <Col style={{textAlign:'center'}}>
                          Already member? <a style={{color:'blue',marginLeft:10}} href='/login'> Log in</a>
                          </Col>
                        </Row>
                          <Row>
                              <Col md={2} xs={2}>
                  
                              <PersonIcon style={{width:40,height:40,}} className='reg-name-icon' />
                              </Col>
 
                              <Col md={4} xs={10} className=''>
                               
                               <motion.input
                               style={{
                                
                               }}
                              
                               className='input'
                               placeholder='First name'
                               required
                               type='text'
                               name='firstname'
                               onChange={handleChange('firstname')}
                               value={values.firstname}
                               />
                           
                              </Col>
   
                              <Col md={4} >
                              <motion.input
                               style={{
                                
                               }}
                               className='input last-name'
                               placeholder='Last name'
                               required
                               type='text'
                               name='lastname'
                               onChange={handleChange('lastname')}
                               value={values.lastname}
                             
                               />
                              </Col>
                          </Row>
                          <Row>
                            <Col xs={2} md={2} style={{}}>
                            <PhoneIcon style={{height:40,width:40}} className='phone-icon' />
                            </Col>
                            <Col xs={10}>
                            <motion.input
                               style={{
                                
                               }}
                               className='input phone'
                               placeholder='Phone number'
                               required
                               type='number'
                               name='phone'
                               onChange={handleChange('phone')}
                               value={values.phone}
                             
                               />
                            </Col>
                          </Row>
                          <Row className='mail-row'>
                            <Col xs={2} md={2} >
                            <EmailIcon style={{width:40,height:40}} className='reg-mail-icon' />
                            </Col>
                             <Col md={4} className='mail-input'>
                               <motion.input
                               style={{
                                
                               }}
                               className='input mail'
                               placeholder='Email'
                               required
                               type='email'
                               name='email'
                               onChange={handleChange('email')}
                               value={values.email}
                         
                               />
 
                             </Col>
                             
                             <Col md={4}>
                             <motion.input
                               style={{
                                
                               }}
                               className='input last-name'
                               placeholder='Username'
                               required
                               type=''
                               name=''
                               onChange={handleChange('username')}
                               value={values.username}
                             
                               />
                             </Col>
                          </Row>
                          <Row>
                            <Col className='password-input' md={5} xs={5}>
                            <motion.input
                               style={{
                                
                               }}
                              
                               className='input password-main'
                               placeholder='Password'
                               required
                               type={visible}
                               name='first name'
                               onChange={handleChange('password')}
                               
                               value={values.password}
                               
                               
                               />
                            </Col>
                            <Col className='password-input' md={4} xs={5}>
                            <motion.input
                               style={{
                                
                               }}
                              
                               className='input'
                               placeholder='Confirm Password'
                               required
                               type={visible}
                               name='nextPassword'
                               onChange={handleChange('nextPassword')}
                               value={values.nextPassword}
                               
                               
                               />
                            </Col>
                          
                           
                          </Row>
                          <Row>
                          <Col md={12} xs={12} className='password-icon'>
                           
                            <div  onClick={()=>{
                               eye?setEye(false):setEye(true)   
                            }}>
                                {showEye()}
                            </div>
                            </Col>
                          </Row>
                          <Row className='captcha-row' style={{width:'100%'}}>
                         
                          
                          
                          </Row>
                          <Row className='privacy-row'>
                            <Col>
                               <p style={{color:'blue'}} className='policy-agreement'>
                                 By clicking bellow you agree to our privacy policy
                               </p>
                            </Col>
                          </Row>
                      </Container>
                      
                      {/*<GoogleReCaptcha onVerify={()=>{console.log('verified')}} />*/}
                     </CardBody>
                      </div>
                    <CardFooter className={classes.cardFooter}>

                    
                            <div style={{marginRight:'8%'}}>
                            {showItems(handleSubmit)}
                            </div>
                            <Row>
                            <div>
                            <ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  ref={reRef}
  size='invisible'
  //onChange={captcha}
  badge='bottomleft'
  onChange={solve}
  
  />
                            </div>
                            
                    
                            </Row>
                            <Row>
                            
                            </Row>
                    
                    </CardFooter>
                  </form>
                  ))}
                </Formik>
                
               <Container>
                 <Row style={{width:'100%'}}>
                 <div style={{display:'grid',alignItems:'center',marginLeft:'50%',marginTop:-60}}>
                     {spin()}
                     </div>
                 </Row>
               </Container>
               <CardFooter style={{height:50}}>
              
        
               </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
      </div>
    </div>
  );
}

