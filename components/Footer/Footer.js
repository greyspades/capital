/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import AddressIcon from '@material-ui/icons/LocationCity'
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import Button from '../CustomButtons/Button'

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import {
  Container,
  Col,
  Row,
} from 'reactstrap'
import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";
import HeaderLinks from '../Header/HeaderLinks'
const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div>
          <Container>
            <Row>
                <Col xs={12} md={5}>
                 <Row className='' style={{}}>
                    
                    <Col className='footer-link' xs={6} md={6} style={{}}>
                    <a style={{color:'white'}} href='/signup'>
                    Get Started
                    </a>
                  </Col>
                    
                  <Col xs={6} md={6} style={{}} className='footer-link' xs={6} md={6}>
                    <a href='/login' style={{color:'white'}}>
                      Login
                    </a>
                  </Col>
                 </Row>
                </Col>
               <Col md={7} xs={12}>
               <Row>
                <Col>
                <a href="https://www.facebook.com/capitalinvestmentoption.uk/">
                <FacebookIcon style={{color:'#9a7801'}} />
                </a>
              </Col>
              <Col>
                <a  href="https://instagram.com/capitalinvestmentoption?utm_medium=copy_link">
                <InstagramIcon style={{color:'#9a7801'}} />
                </a>
              </Col>
              <Col>
                <a href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg">
                <YouTubeIcon style={{color:'#9a7801'}} />
                </a>
              </Col>
              <Col>
                <a href="https://www.linkedin.com/in/capital-investment-option-412501182">
                <LinkedInIcon style={{color:'#9a7801'}} />
                </a>
              </Col>
              <Col >
                <a href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.pinterest.com/Capitalinvestmentoption/&ved=2ahUKEwjVmPDpm-HwAhVExIUKHcrRBvcQFjABegQIBhAC&usg=AOvVaw3GPtVggFT7_dgREoPGwJFV">
                <PinterestIcon style={{color:'#9a7801'}} />
                </a>
              </Col>
                </Row>
               </Col>
               
            </Row>
           <Row style={{marginTop:-10}}>
            <Col xs={12}>
              <Row style={{textAlign:'left'}}>
              <Col md={12} xs={12}>
              <PhoneIcon style={{color:'#9a7801'}} />
             <span style={{marginLeft:5}}>
             Phone: +48732121453
             </span>

            </Col>
            <Col style={{marginTop:30,marginBottom:30}} md={12} xs={12}>
              <EmailIcon style={{color:'#9a7801'}} />
              <span style={{marginLeft:5}}>
             E-mail: capitalinvestmentoption@gmail.com</span>
            </Col>
            <Col md={12} xs={12}>
              <AddressIcon style={{color:'#9a7801'}} />
              <span style={{marginLeft:5}}>
                Address: 63 ul. Słowackiego Juliusza Street, Mikolow, Poland 43-19
             </span>
            </Col>
            
            
              </Row>
            </Col>
            
           </Row>
          </Container>
        </div>
        <div className={classes.right}>
          &copy; {2013}

          <a
            href="/landing"
            className={aClasses}
            target="_blank"
            style={{color:'#9a7801'}}
          >
            Capital Investment Option
          </a>{" "}
            It all starts with You.
          
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
