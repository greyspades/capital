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
import image from "assets/img/bg7.jpg";
import LockIcon from '@material-ui/icons/Lock'
import { Container,Col,Row } from "reactstrap";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [visible,setVisible]=useState('')
  const [eye,setEye]=useState(false)
  const [main,setMain]=useContext(UserContext)
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
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

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Winster invest"
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
        <div className={classes.container}>
          <GridContainer justify="center" >
            <GridItem xs={12} sm={6} md={4}>
              <Card className={classes[cardAnimaton]} className='login'>
               
                  <CardHeader  style={{backgroundColor:"#050124"}} className={classes.cardHeader}>
                    <h4 style={{color:'white'}}>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="primary"
                        onClick={e => e.preventDefault()}
                      >
                       
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="primary"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="primary"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <CardBody style={{}}>
                    
                    <Formik initialValues={{email:'',password:''}} onSubmit={(values)=>{
                      let user={
                        email:values.email,
                        password:values.password
                      }
                      
                      Axios.post('/api/login',{user})
                      .then((res)=>{
                        console.log(res.data)
                        cookieCutter.set('logged-in', 'true')
                        cookieCutter.set('key',JSON.stringify(res.data.info))
                        setMain(res.data.info)
                        
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
                      <CardFooter className={classes.cardFooter}>
                    <Button size="lg" onClick={handleSubmit} style={{width:50,height:30,backgroundColor:'#050124'}}>
                      Login
                    </Button>
                  </CardFooter>
                        </form>
                      )}
                    </Formik>
                  </CardBody>
                  
              
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
