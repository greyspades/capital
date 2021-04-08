import React,{useState,useContext,useEffect} from 'react'
import {MyContext} from '../../components/context'
import PolicyIcon from '@material-ui/icons/Policy';
import {useRouter} from 'next/router'
//import tech1 from "assets/img/tech1"
import {motion} from 'framer-motion'
import Footer from 'components/footer/footer.js'
import AssignmentTurnedInIcon from  '@material-ui/icons/AssignmentTurnedIn'
import LockIcon from '@material-ui/icons/Lock'
import Filter1Icon from '@material-ui/icons/Filter1'
import Filter2Icon from '@material-ui/icons/Filter2'
import Filter3Icon from '@material-ui/icons/Filter3'
//import LibraryAddCheck from 'material-ui'
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
    Card,
    CardBody,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
} from "reactstrap"

const Plans=()=>{
    return (
        <div>
            <Container fluid style={{}} className='plans'>
                <Row className='tales' style={{}}>
                    <Col xs={12} md={3} style={{}} className='plans-co'>
                      <div className='plans-card'>
                      <Card  className='plans-col'>
                       <CardBody   style={{}}>
                            <Filter1Icon style={{height:70,width:70,color:'white'}} className='plans-icon' />
                            <h4 style={{color:"white"}}>
                                STARTER
                            </h4>
                            <div className='plans-text'>
                            <p style={{color:"white"}}>Minimum:$100.0</p>
                            <p style={{color:"white"}}>Maximum:$999.0</p>
                            </div>
                        </CardBody>
                       </Card>
                      </div>
                    </Col>
                    <a>
                    <Col xs={12} md={3}  className='pla'>
                       <div  className='plans-card second-card' >
                           <Card  className='plans-col' >
                           <CardBody  className=''>
                           <Filter2Icon style={{height:70,width:70,color:'#c6c5c8'}} className='plans-icon'  />
                       <h4 style={{color:"silver",}}>
                                SILVER
                            </h4>
                            
                           <div className='plans-text'>
                           <p style={{color:'white'}}>Minimum:$1000.0</p>
                           <p style={{color:'white'}}>Maximum:$9999.0</p>
                           </div>
                        </CardBody>
                           </Card>
                       </div>
                    </Col>
                    
                    </a>
                    <Col xs={12} md={3} className='plans-co'>
                       <div  className='plans-card'>
                           <Card  className='plans-col'>
                           <CardBody whileHover={{scale:1.2,borderColor:'goldenrod'}} className='third-card'>
                           <Filter3Icon style={{height:70,width:70,color:'goldenrod'}} className='plans-icon'  />
                       <h4 style={{color:"gold",}}>
                            Gold    
                            </h4>
                           <div className='plans-text'>
                           <p style={{color:'white'}}>Minimum:$10000.0</p>
                           
                            <p style={{color:'white'}}>Maximum:$29999.0</p>
                           </div>
                        </CardBody>
                           </Card>
                       </div>
                    </Col>
                </Row>
                <Row>
                    <div className='line'>

                    </div>
                    <div className='line-2'>

                    </div>
                    <div className='line-3'>

                    </div>
                </Row>
            </Container>
            <Container style={{marginTop:50}} >
                <Row style={{textAlign:'center'}}>
                    <h4>
                        Why choose Winster
                    </h4>
                </Row>
                <Row style={{marginTop:30}} className='license-talk' >
                    <Col xs={12} md={3} lg={3} style={{textAlign:'center',backgroundColor:'goldenrod',borderRadius:5,padding:10,marginTop:30}} className='policy'>
                        <PolicyIcon style={{height:70,width:70,marginBottom:20}} />
                        <h4>Reliability</h4>
                        <p>
                        You can always contact us whenever you have questions and we'll get back to you within 24 hours.
                        </p>
                    </Col>
                    <Col xs={12} md={3} lg={3} style={{textAlign:'center',backgroundColor:'goldenrod',borderRadius:5,padding:10,marginTop:30}} className='policy'>
                        <AssignmentTurnedInIcon style={{height:70,width:70,marginBottom:20}} />
                        <h4>Trust</h4>
                        <p>
                            Your funds are protected by industry leading protocols.
                        </p>
                    </Col>
                    <Col xs={12} md={3} lg={3} style={{textAlign:'center',backgroundColor:'goldenrod',borderRadius:5,padding:10,marginTop:30}} className='policy'>
                        <LockIcon style={{height:70,width:70,marginBottom:20}} />
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