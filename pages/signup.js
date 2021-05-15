import React,{useState,useContext,useRef} from "react";
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
import Button from "components/CustomButtons/Button.js";
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
    Alert
} from "reactstrap"
import ReCaptcha from 'react-google-recaptcha'
import cookie from 'js-cookie'
import cookies from 'next-cookies'
import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";
//import ReCaptcha from 'react-google-recaptcha'
import image from "assets/img/bg7.jpg";
import PhoneIcon from '@material-ui/icons/Phone'
import cookieCutter from "cookie-cutter";
//import { Container } from "@material-ui/core";

//dynamic import of google recaptcha



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
    Axios.post('/api/user',{user})
    .then((res)=>{
     if(res.data=='SAVED'){
      console.log('sent')
      //console.log(res)
      cookie.set('key',JSON.stringify(user))
      /*setSpinner({
        pending:false,
        done:true,
      })*/
      Router.push('/UserProfile')
     }
    
      //console.log(userdetail)
    
    })
    
   
   
  }

  const submit=(handleSubmit)=>{
    if(spinner.pending==false && spinner.done==false && startCaptcha==false){
      return (
        <div>
          <button style={{border:0}}>
          <div className='get-started' style={{width:160,height:50,backgroundColor:'#050124'
                     ,borderRadius:5,textAlign:'center',padding:5}} onClick={handleSubmit}>
                      <p style={{color:'white',marginTop:6,fontSize:20}}>
                      Get Started
                      </p>
                     </div>
          </button>
        </div>
      )
    }
    else if(spinner.pending==true && spinner.done==false){
      return (
        <div>
          <Spinner />
      </div>
      )
    }
    else if(spinner.pending==false && spinner.done==true){
      return (
        <div>
          <Check />
        </div>
      )
    }
    else if(startCaptcha==true){
      return (
        <div style={{display:'grid',placeItems:'center',color:'red'}} className='captcha'>
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
  const registerUser=(user)=>{
    console.log(user)
    if(solved==true){
      Axios.post('/api/user',{user})
    .then((res)=>{
     if(res.data=='SAVED'){
      console.log('sent')
      //console.log(res)
      cookieCutter.set('key',JSON.stringify(user))
      setSpinner({
        pending:false,
        done:true,
      })
      Router.push('/UserProfile')
     }
    
      //console.log(userdetail)
    
    })
    }
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

const showCaptcha=(user)=>{
  setCaptcha(true) 
}

const spin=()=>{
  if(showSpin==true){
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
      <Header
        absolute
        color="transparent"
        //brand="Capital Investment"
        rightLinks={<HeaderLinks />}
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
                    console.log(user)
                    setCaptcha(true)
                    //solve()
                    setShowSpin(true)
                    //reRef.current.execute()
                    
                    
                    //setMain({name:'maximus'})
                    /*setSpinner({
                      pending:true,
                      done:false
                    })*/
                    setTimeout(networkError,60000)
                   
                    //registerUser(user)
                   
                  }
                  else if(values.password!=values.nextPassword&&values.firstname&&values.lastname&&values.email){
                    alert('The passwords do not match')
                  }
                  else if(values.password.length<8){
                    alert('Password must contain at least 8 characters')
                  }
                  else if(!values.firstname||!values.lastname||!values.email||!values.password||!values.phone)
                  alert('All fields are required')
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

                    
                            {submit(handleSubmit,user)}
                    
                    
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
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

