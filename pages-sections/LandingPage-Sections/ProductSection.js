import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import dynamic from 'next/dynamic'
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import SectionCarousel from '../Components-Sections/SectionCarousel.js'
//importing icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons'
import {faPiggyBank} from '@fortawesome/free-solid-svg-icons'
import {faMoneyCheckAlt} from  '@fortawesome/free-solid-svg-icons'
import {faCoins} from  '@fortawesome/free-solid-svg-icons'


import software from "assets/img/software.svg"
import finance from "assets/img/finance.svg"
import factory from "assets/img/factory.svg"
import health from "assets/img/healthcare.svg"
import loans from "assets/img/loans.svg"
import travel from "assets/img/travel.svg"
//import {Popover,PopoverBody} from 'reactstrap'
import {motion} from 'framer-motion'
//import HyperModal, {ModalStack} from 'react-hyper-modal'

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import { Container, Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Popover=dynamic(()=>import('@idui/react-popover'),
  {ssr:false}
)

export default function ProductSection() {
  const classes = useStyles();
  const [pop,setPop]=useState(false)
  return (
    <div className={classes.section}>
      <GridContainer justify="center" >
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description,'talk'}  style={{}}>
         
              
          </h5>
        </GridItem>
      </GridContainer>
      <div>
      <h5 className='talk' style={{}}>
     
              </h5>
      </div>
      <div>
        <GridContainer className='product-grid'>
        <GridItem xs={12} sm={12} md={3}>
              <Popover trigger='hover' content={()=>(<div className='modal-content'>We offer loans for businesses, students, and the like to enable fast productivity, our interest rates are reasonable and without worry</div>)}>
             <div >
             <div  className='product-card'>
                  
                
                  <FontAwesomeIcon icon={faHandHoldingUsd} style={{width:100,height:100}} className='product-logo' />
                  
                   <h5 style={{color:'white'}} >Loans</h5>
                   </div>
             </div>
              </Popover>
          </GridItem>
         
          <GridItem xs={12} sm={12} md={3}>
           <Popover trigger='hover' content={()=>(<div style={{color:'goldenrod'}}>Invest in our crypto trades and get live trade data and analysis with a 25% guarante in all our investments</div>)}>
           <div>
           <div  className='product-card'>
                
                  <FontAwesomeIcon icon={faPiggyBank} style={{width:100,height:100}} className='product-logo' />
                  
                  <h5 style={{color:'white'}}>Investment</h5>
            </div>
           </div>
           </Popover>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <Popover trigger='hover' content={()=>(<div style={{color:'goldenrod'}}>Conduct live crypto and cash transactions which are completely transparent and encrypted by our team of data encryption experts</div>)}>
          <div >
          <div className='product-card' >
              
            
              <FontAwesomeIcon icon={faMoneyCheckAlt} style={{width:100,height:100}} className='product-logo' />
              
                  <h5 style={{color:'white'}}>Transactions</h5>
           </div>
          </div>
          </Popover>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <Popover trigger='hover' content={()=>(<div style={{color:'goldenrod'}}>Invest in our state of the art crypto mining services using the latest blockcain and cryptographic technologies</div>)}>
          <div  className='product-card'>
              
                  
                    <FontAwesomeIcon icon={faCoins} style={{width:100,height:100}} className='product-logo' />
                    
                  <h5 style={{color:'white'}}>Crypto Mining</h5>
           </div>
          </Popover>
          </GridItem>
  </GridContainer>
  
        <div style={{}} className='second-row'>
        
        <Container fluid>

  </Container>
  </div>
  </div>
  </div>
  
  );
}
