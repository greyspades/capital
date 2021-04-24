import React,{useState,useContext,useEffect} from 'react'
import {MyContext} from '../../components/context'
import PolicyIcon from '@material-ui/icons/Policy';
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
import {
    
    Container,
    UncontrolledTooltip,
    Row,
    Col,
    Card,
    CardBody,
    Button,
   
} from "reactstrap"

const Plans=()=>{
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
                   <div className='loan-talk' style={{color:'white',padding:10}}>
                 
                 Introducing Crypto Loans. With Capitalinvestmentoption.com, you can instantly borrow USD or EUR against your cryptocurrency assets. The loans range in size from $500 to $500,000 and in duration from a week to a year.
                 </div>
                
                   </Col>
               </Row>
               <div className='plans-border' style={{}}>

               </div>
               <Row style={{marginTop:70}}>
                   <Col md={4}>
                   <img className='afiliate-icon' src={afiliate}></img>
                   </Col>
                   <Col  md={8}>
                   <h3 style={{textAlign:'center',color:'goldenrod',marginTop:-20}}>
                         Affiliate Links
                    </h3>
                    <div style={{color:'white',padding:10}} className='loan-talk'>
                    You may use, reproduce and share any links to any page of this Website. You should use Your individual referral link to take part in the affiliate program. 
The affiliate program is a way to get extra earnings for referring other people to the products and services offered through this Website. 

                    </div>
                   </Col>
               </Row>
               </Col>
               <Col md={6} xs={12}>
               <img className='loan-image' src={loan}></img>
           
               </Col>
           </Row>
           <h3 style={{textAlign:'center',marginTop:60,color:'goldenrod'}}>
               Affiliate Policy
           </h3>
           <div className='afiliate-ctd' >
               You do not have to make a deposit or have an active investment to get affiliate bonuses.

Clients are not allowed to send SPAM or any kind of unsolicited commercial e-mail to promote the Company, its products and services.

Our affiliate rewards program offers earning at four levels and pays 8% of the deposits made by your first-line referrals, 2% of the deposits made by you second-line referrals (the people invited by your first-line referrals), 1% of the deposits of your third-line referrals (the people invited by your second-line referrals) and 1% of the deposits of your fourth-line referrals (the people invited by your third-line referrals)

               </div>
            <Container fluid className='plans-container'>
            <Container fluid style={{}} className='plans'>
               
                <Row className='tales' style={{}}>
                    <Col xs={12} md={3} style={{}} className='plans-co'>
                      <div className='plans-card plans-one'>
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
                       </div>
                
                    </Col>
                    <a>
                    <Col xs={12} md={3}  className='pla'>
                       <div  className='plans-card second-card' >
                       <span style={{width:200,backgroundColor:'white',height:40,marginBottom:15,borderBottomLeftRadius:10,borderBottomRightRadius:10,textAlign:'center',color:'black',padding:5,fontSize:20}}>Basic</span>
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
                       </div>
                    </Col>
                    
                    </a>
                    <Col xs={12} md={3} className='plans-co'>
                       <div  className='plans-card'>
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
                       </div>
                    </Col>
                </Row>
               
            </Container>
            </Container>
            <Container className='affiliate' style={{}}>
              
                
            </Container>
            <Container>
                <Row>
                    <h3 style={{color:'#9a7801',textAlign:'center'}}>
                        Privacy-policy
                    </h3>
                    <div>

                    </div>
                </Row>
            </Container>
            <Container style={{marginTop:50}} className='why-choose' >
                <Row >
                    <h3 style={{color:'#9a7801',marginTop:50}}>
                        Why choose Capital Investment Option
                    </h3>
                </Row>
                <div style={{marginBottom:-20,fontSize:20,color:'white'}}>
                        By Selecting any of our services you are ensured of
                    </div>
                <Row style={{marginTop:30}} className='license-talk' >
                    <Col xs={12} md={3} lg={3} style={{textAlign:'center',backgroundColor:'goldenrod',borderRadius:5,padding:10,marginTop:30}} className='policy'>
                        <PolicyIcon style={{height:70,width:70,marginBottom:20,color:'white'}} />
                        <h4>Reliability</h4>
                        <p>
                        You can always contact us whenever you have questions and we'll get back to you within 24 hours.
                        </p>
                    </Col>
                    <Col xs={12} md={3} lg={3} style={{textAlign:'center',backgroundColor:'goldenrod',borderRadius:5,padding:10,marginTop:30}} className='policy'>
                        <AssignmentTurnedInIcon style={{height:70,width:70,marginBottom:20,color:'white'}} />
                        <h4>Trust</h4>
                        <p>
                            Your funds are protected by industry leading protocols.
                        </p>
                    </Col>
                    <Col xs={12} md={3} lg={3} style={{textAlign:'center',backgroundColor:'goldenrod',borderRadius:5,padding:10,marginTop:30}} className='policy'>
                        <LockIcon style={{height:70,width:70,marginBottom:20,color:'white'}} />
                        <h4>Privacy</h4>
                        <p>
                        We will never share your private data without your permission.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Plans