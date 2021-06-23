import React,{useState,useContext,useEffect} from 'react'
import {MyContext} from '../../components/context'
import PolicyIcon from '@material-ui/icons/Policy';
import Head from 'next/head'
import {useRouter} from 'next/router'
//import tech1 from "assets/img/tech1"
import {motion} from 'framer-motion'
import AssignmentTurnedInIcon from  '@material-ui/icons/AssignmentTurnedIn'
import LockIcon from '@material-ui/icons/Lock'
import Filter1Icon from '@material-ui/icons/Filter1'
import Filter2Icon from '@material-ui/icons/Filter2'
import Filter3Icon from '@material-ui/icons/Filter3'
import loan from '../../assets/img/loan.jpg'
import cryptloan from '../../assets/img/cryptoloan.svg'
import afiliate from '../../assets/img/afiliate.svg'
//import LibraryAddCheck from 'material-ui'
import Router from 'next/router'
//import { TickerTape,MarketOverview,CryptoCurrencyMarket,TechnicalAnalysis } from "react-ts-tradingview-widgets";
import {
    
    Container,
    UncontrolledTooltip,
    Row,
    Col,
    Card,
    CardBody,
    Button,
   
} from "reactstrap"

const Plans=(props)=>{
    const Router=useRouter()
    const {slug}=Router.query

  
    return (
        <div className=''>
            
           <Row>
              
               <Col className='loan-container' xs={12} md={6}>
               <Row>
                   <Col md={4}>
                   <img className='crypto-loan-icon' src={cryptloan}></img>
                   </Col>
                   <Col md={8}>
                   <h3 style={{textAlign:'center',marginTop:-10,color:'goldenrod'}}>
                     Crypto Loans
                    </h3>
                   <div className='loan-talk' style={{color:'white',padding:10,textAlign:'center'}}>
                 
                 Introducing Crypto Loans. With Capital investment option, you can instantly borrow USD or EUR against your cryptocurrency assets. The loans range in size from $500 to $500,000 and in duration from a week to a year.
                 </div>
                
                   </Col>
               </Row>
               <div className='plans-border' style={{}}>

               </div>
               <Row style={{marginTop:70}}>
                   <Col md={4}>
                   <motion.img animate={{rotate:[90,180,360]}} transition={{duration:10}} className='afiliate-icon' src={afiliate}></motion.img>
                   </Col>
                   <Col  md={8}>
                   <h3 style={{textAlign:'center',color:'goldenrod',marginTop:-20}}>
                         Affiliate Links
                    </h3>
                    <div style={{color:'white',padding:10,textAlign:'center'}} className='loan-talk'>
                    You may use, reproduce and share any links to any page of this Website. You should use Your individual referral link to take part in the affiliate program. 
The affiliate program is a way to get extra earnings for referring other people to the products and services offered through this Website. 

                    </div>
                   </Col>
               </Row>
               </Col>
               <Col md={6} xs={12}>
               <motion.img initial={{x:-300}} animate={{x:0}}  className='loan-image' src={loan}></motion.img>
           
               </Col>
           </Row>
           <h3 style={{textAlign:'center',marginTop:60,color:'#9a7801'}}>
               Affiliate Policy
           </h3>
           <div className='afiliate-ctd' style={{textAlign:'center'}} >
               You do not have to make a deposit or have an active investment to get affiliate bonuses.

Clients are not allowed to send SPAM or any kind of unsolicited commercial e-mail to promote the Company, its products and services.

Our affiliate rewards program offers earning at four levels and pays 8% of the deposits made by your first-line referrals, 2% of the deposits made by you second-line referrals (the people invited by your first-line referrals), 1% of the deposits of your third-line referrals (the people invited by your second-line referrals) and 1% of the deposits of your fourth-line referrals (the people invited by your third-line referrals)

               </div>
             
            <Container fluid className='plans-container'>
            <div>
             <h2 style={{color:'#9a7801',textAlign:'center',marginTop:90,marginBottom:-60}}>
                       Our Plans
                   </h2>
             </div>
            <Container fluid style={{}} className='plans'>
               <Row>
                  
               </Row>
                <Row className='tales' style={{}}>
                    <Col xs={12} md={3} style={{}} className='plans-co'>
                      <motion.div onClick={()=>{Router.push(`../Register/${props.bomber}`)}} whileHover={{scale:1.2}}  className='plans-card plans-one'>
                      <span style={{width:200,backgroundColor:'white',height:40,marginBottom:15,borderBottomLeftRadius:10,borderBottomRightRadius:10,textAlign:'center',color:'black',padding:5,fontSize:20}}>Basic</span>
                      <div  className='plans-col'>
                      
                            <Filter1Icon style={{height:70,width:70,color:'white'}} className='plans-icon' />
                            <h4 style={{color:"#9a7801",textAlign:'center'}}>
                                Friends and Family
                            </h4>
                            <div className='plans-text'>
                            <p style={{color:'white'}}>Bonus:<span style={{color:'goldenrod',marginLeft:10}}>10% Return</span></p>
                            <p style={{color:'white'}}>Pay:<span style={{color:'goldenrod',marginLeft:10}}>5% Return</span></p>
                           <p style={{color:'white'}}>For:<span style={{color:'goldenrod',marginLeft:10}}>21 Months</span></p>
                           <p style={{color:'white'}}>Amount Spent:<span style={{color:'goldenrod',marginLeft:3}}>$1500-$10500</span></p>
                           <p style={{color:'white'}}>Max Loan:<span style={{color:'goldenrod',marginLeft:10}}>$38,000</span></p>
                           <p style={{color:'white'}}>Principal:<span style={{color:'goldenrod',marginLeft:10}}>Back</span></p>
                           <p style={{color:'white'}}>Profit:<span style={{color:'goldenrod',marginLeft:10}}>Calender Days</span></p>

                            </div>
                            <div className='plans-button'>
                               
                            </div>
                        </div>
                       </motion.div>
                
                    </Col>
                    
                    <Col xs={12} md={3} >
                       <motion.div onClick={()=>{Router.push(`../Register/${props.bomber}`)}} whileHover={{scale:1.2}}  className=' second-card plans-card ' >
                       <span style={{width:200,backgroundColor:'white',height:40,marginBottom:15,borderBottomLeftRadius:10,borderBottomRightRadius:10,textAlign:'center',color:'black',padding:5,fontSize:20}}>Silver</span>
                           <div  className='plans-col' >
                           <div  className=''>
                           <Filter2Icon style={{height:70,width:70,color:'#c6c5c8'}} className='plans-icon'  />
                       <h4 style={{color:"#9a7801",textAlign:'center'}}>
                                Equipment Lease
                            </h4>
                            
                           <div className='plans-text'>
                           <p style={{color:'white'}}>Bonus:<span style={{color:'goldenrod',marginLeft:10}}>15%</span></p>
                           <p style={{color:'white'}}>Pay:<span style={{color:'goldenrod',marginLeft:10}}>5% Return</span></p>
                           <p style={{color:'white'}}>For:<span style={{color:'goldenrod',marginLeft:10}}>21 Months</span></p>
                           <p style={{color:'white'}}>Amount Spent:<span style={{color:'goldenrod',marginLeft:10}}>$3550-19500</span></p>
                           <p style={{color:'white'}}>Max Loan:<span style={{color:'goldenrod',marginLeft:10}}>112,000</span></p>
                           <p style={{color:'white'}}>Principal:<span style={{color:'goldenrod',marginLeft:10}}>Back</span></p>
                           <p style={{color:'white'}}>Profit:<span style={{color:'goldenrod',marginLeft:10}}>Calender Days</span></p>
                           </div>
                        </div>
                           </div>
                       </motion.div>
                    </Col>
                    
                    
                    <Col xs={12} md={3} className='plans-co'>
                       <motion.div onClick={()=>{Router.push(`../Register/${props.bomber}`)}} whileHover={{scale:1.2}}  className='plans-card'>
                       <span style={{width:200,backgroundColor:'white',height:40,marginBottom:15,borderBottomLeftRadius:10,borderBottomRightRadius:10,textAlign:'center',color:'black',padding:5,fontSize:20}}>Gold</span>
                           <div  className='plans-col'>
                           <div  className='' style={{marginTop:10}}>
                           <Filter3Icon style={{height:70,width:70,color:'goldenrod'}} className='plans-icon'  />
                       <h4 style={{color:"#9a7801",textAlign:'center'}}>
                            Commercial Mortgage
                            </h4>
                           <div className='plans-text'>
                           <p style={{color:'white'}}>Bonus:<span style={{color:'goldenrod',marginLeft:10}}>25%</span></p>
                           <p style={{color:'white'}}>Pay:<span style={{color:'goldenrod',marginLeft:10}}>4% Return</span></p>
                           <p style={{color:'white'}}>For:<span style={{color:'goldenrod',marginLeft:10}}>30 Months</span></p>
                           <p style={{color:'white'}}>Amount Spent:<span style={{color:'goldenrod',marginLeft:3}}>$49300-$2.5M</span></p>
                           <p style={{color:'white'}}>Max Loan:<span style={{color:'goldenrod',marginLeft:10}}>$1500000</span></p>
                           <p style={{color:'white'}}>Principal:<span style={{color:'goldenrod',marginLeft:10}}>include</span></p>
                           <p style={{color:'white'}}>Profit:<span style={{color:'goldenrod',marginLeft:10}}>Buisiness Days</span></p>
                           </div>
                        </div>
                           </div>
                       </motion.div>
                    </Col>
                </Row>
               
            </Container>
            </Container>
            <Container>
                <div>
                <h3 className='privacy-header' style={{color:'#9a7801',textAlign:'center',marginTop:60}}>
                        Privacy Policy
                    </h3>
                </div>
                <Row>
                    <div style={{color:'white',padding:5,textAlign:'center'}}>
                    Please read the following terms regarding our privacy policy. An important part of the relationship we have with our Clients is the information you share with us.
                     We want you to know how we treat your private information. capitalinvestmentoption.com protects our clients privacy and does its best to provide their safety and convenience online. 
                     The capitalinvestmentoption.com website is subject to this Privacy Policy. It regulates
                     data accumulation and usage on the website. Using the capitalinvestmentoption.com website infers your consent to the data practices given in this statement.
                    </div>
                </Row>
            </Container>
            
            <Container style={{marginTop:50}} className='why-choose' >
                <Row >

                <div ref={props.about}>
                <Container className='about-us' style={{}}>
                <div style={{}} className='about-overlay'>
                <h3 className='about-header' style={{}}>
                About Capital Investment Option
              </h3>
              <p style={{color:'white',textAlign:'center'}}>
              Capital Investment Option is an investment company whose main assumption is to generate the largest, safe profit possible. The team of our specialists ensures that transactions are secure and risk-free for our investors.
       In order to ensure financial security, increase potential profit and reach clients all over the world, our company has been registered on two continents. You can check our certifications below. All our employees have careers in large corporations dealing with the multiplication of clients money.
       Based on their professional experience, they invest using all available forms such as investing in gold, currencies, oil, real estate, listed companies and the most popular and profitable field of Cryptocurrency, start-ups and ICOs. All of the above factors influence our generation of profits up to 20% in 1 day.
Meanwhile provision has been made by this platform to grant Crypto Loans in order to create a financial support to our clients  especially students and business owners as well as others active members in this platform.

              </p>
                </div>
            </Container>
                </div>
                </Row>
                <h3 style={{marginBottom:-20,fontSize:20,color:'white',marginTop:60}}>
                        By Selecting any of our services you are ensured of
                    </h3>
                <Row style={{marginTop:30}} className='license-talk' >
                    <Col xs={12} md={4} lg={4} style={{display:'grid',placeItems:'center',textAlign:'center',borderRadius:5,padding:10,marginTop:30,width:100}} >
                       <div style={{}} className='policy'>
                       <PolicyIcon style={{height:70,width:70,marginBottom:20,color:'white'}} />
                        <h3 style={{color:"#050124"}}>Reliability</h3>
                        <p>
                        You can always contact us whenever you have questions and we'll get back to you within 24 hours.
                        </p>
                       </div>
                    </Col>
                    <Col xs={12} md={4} lg={4} style={{display:'grid',placeItems:'center',textAlign:'center',borderRadius:5,padding:10,marginTop:30}} >
                       <div style={{}} className='policy'>
                       <AssignmentTurnedInIcon style={{height:70,width:70,marginBottom:20,color:'white'}} />
                        <h3 style={{color:"#050124"}}>Trust</h3>
                        <p>
                            Your funds are protected by industry leading protocols,dedicated to efficiency and flexibility, while maintaining ease of use
                        </p>
                       </div>
                    </Col>
                    <Col xs={12} md={4} lg={4} style={{display:'grid',placeItems:'center',textAlign:'center',borderRadius:5,padding:10,marginTop:30}} >
                        <div style={{}} className='policy'>
                        <LockIcon style={{height:70,width:70,marginBottom:20,color:'white'}} />
                        <h3 style={{color:"#050124"}}>Privacy</h3>
                        <p>
                        We will never share your private data without your permission, you are always in control of your information and privacy
                        </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Plans