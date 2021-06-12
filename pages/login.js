import React,{useState,useContext} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import {UserContext} from '../components/userContext'
// core components
import Head from 'next/head'
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {Formik} from 'formik'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Axios from 'axios'
import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";
import cookieCutter from 'cookie-cutter'
import cookie from 'js-cookie'
import image from "assets/img/bg7.jpg";
import LockIcon from '@material-ui/icons/Lock'
import { Container,Col,Row } from "reactstrap";
import Router from "next/router";
import {Check} from '@material-ui/icons/Check'

import {
  Spinner,
  
}
from 'reactstrap'
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [visible,setVisible]=useState('')
  const [eye,setEye]=useState(false)
  const [main,setMain]=useContext(UserContext)
  const [error,setError]=useState('')
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [spinner,setSpinner]=useState({
    pending:false,
    done:false,
  })
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  
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
  const submit=(handleSubmit)=>{
    if(spinner.pending==false && spinner.done==false){
      return (
       <div>
         <button style={{border:0}}>
         <div className='get-started' style={{width:100,height:50,backgroundColor:'#050124'
                     ,borderRadius:5,textAlign:'center',padding:5}} onClick={handleSubmit}>
                      <p style={{color:'white',marginTop:6,fontSize:20}}>
                      Sign in
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
  }
  const networkError=(() => {
    setSpinner({
        pending:false,
        done:false
      })
      alert('Unable to connect to the server check your internet connection and try again')
})


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
        <div className={classes.container}>
          <GridContainer justify="center" >
            <GridItem xs={12} sm={6} md={4}>
              <Card className={classes[cardAnimaton]} className='login'>
               
                  <CardHeader  style={{backgroundColor:"#050124"}} className={classes.cardHeader}>
                    <h4 style={{color:'white'}}>Login</h4>
                    
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <CardBody style={{}}>
                    
                    <Formik initialValues={{email:'',password:''}} onSubmit={(values)=>{
                      let user={
                        email:values.email,
                        password:values.password
                      }
                      
                      setSpinner({
                        pending:true,
                        done:false
                      })

                      //setTimeout(networkError,40000)
                      Axios.post('/api/login',{user})
                      .then((res)=>{
                        if(res.data.status=='LOG IN'){
                          console.log(res.data)
                        cookieCutter.set('logged-in', 'true')
                        //cookieCutter.set('key',JSON.stringify(res.data.info))
                        cookie.set('key',JSON.stringify(res.data.info))
                        /*setSpinner({
                          pending:false,
                          done:true,
                        })*/
                        //setMain(res.data.info)
                        Router.push('/Dashboard')
                        }
                        else if(res.data.status=='WRONG DETAILS'){
                          alert('The password you have provided is incorect')
                          setSpinner({
                            pending:false,
                            done:false
                          })
                        }
                      })

                      .catch((err)=>{
                        console.log(err.response.data)
                        //console.log('wahala')
                       if(err.response.data=='mongo wahala'){
                        alert('Unnable to connect to the server please try again later')
                        setSpinner({
                          pending:false,
                          done:false
                        })
                       }
                       else if(err.response.data=='no user'){
                         alert('invalid email address')
                         setSpinner({
                          pending:false,
                          done:false
                        })
                       }
                      })
                    }}  >
                      {({handleChange,handleSubmit,values})=>(
                        <form className={classes.form,'login'}>
                          <Container>
                        <Row>
                          <Col md={2} xs={2}>
                          <EmailIcon style={{width:40,height:40,}} className='login-name-icon' />
                          </Col>
                          <Col md={10} xs={10}>
                          <input
                               style={{
                                
                               }}
                              
                               className='input'
                               placeholder='Email'
                               required
                               type='email'
                               name='email'
                               onChange={handleChange('email')}
                               value={values.email}
                               />
                          </Col>
                         
                        </Row>
                        <Row>
                        <Col md={2} xs={2}>
                          <LockIcon style={{width:40,height:40,}} className='login-name-icon' />
                          </Col>
                        <Col md={10} xs={10}>
                          <input
                               style={{
                                
                               }}
                              
                               className='input'
                               placeholder='Password'
                               required
                               type={visible}
                               name='firstname'
                               onChange={handleChange('password')}
                               value={values.password}
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
                      </Container>
                     <div style={{textAlign:'center',marginBottom:30}}>
                     <p style={{color:'blue',}}>
                        Not yet a member? 
                      </p>
                      <div style={{marginTop:20}}>
                      <a href='/Register'>Sign up now</a>
                      </div>
                     </div>
                      <CardFooter  className={classes.cardFooter}>
                        <div style={{color:'red'}}>
                          {error}
                        </div>
                   
                     {submit(handleSubmit)}
                  
                  </CardFooter>
                        </form>
                      )}
                    </Formik>
                  </CardBody>
                  
              
              </Card>
            </GridItem>
          </GridContainer>
        </div>
    
      </div>
    </div>
  );
}
