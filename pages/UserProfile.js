/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{useState,useContext,useEffect} from "react";
import {UserContext} from '../components/userContext.js'
// reactstrap components
import { Line, Bar } from "react-chartjs-2";
import classNames from 'classnames'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
// reactstrap components
import Check from '@material-ui/icons/Check'
import {CircularProgress} from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import BarChartIcon from '@material-ui/icons/BarChart'
//import Axios from 'axios'
import Header from "../components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import DoneOutline from '@material-ui/icons/DoneOutline'
import { Modal } from 'react-responsive-modal';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {
  Button,
  Container,
  CardFooter,
  
  ButtonGroup,
  
  CardText,
  CardHeader,
  Alert,
  CardTitle,
  
  Card,
  CardBody,
  
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

//import Card from '../components/Card/Card'
//import CardBody from '../components/Card/CardBody'
//import LoadingButton from '@material-ui/lab';
import info from './api/info'
import {motion} from 'framer-motion'
import Dropdown from 'react-dropdown'
import cookieCutter from 'cookie-cutter'
import bitcoinIcon from '../assets/img/bitcoin.svg'
//import cookies from 'cookies'
// core components
import Cookie from 'js-cookie'
import ExitToAppIcon from '@material-ui/icons/ExitToAppOutlined'
import CreditCardIcon from '@material-ui/icons/CreditCardOutlined'
import LocalAtmIcon from '@material-ui/icons/LocalAtmOutlined'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from '../variables/charts'
import dynamic from 'next/dynamic'
import {Formik,Field,Form} from 'formik'
import Axios from "axios";
import { parseCookies } from "./api/cookies.js";

import Table from 'rc-table'
import { faYenSign } from "@fortawesome/free-solid-svg-icons";
import 'react-dropdown/style.css'
import Router from "next/router";
const Popover=dynamic(()=>import('@idui/react-popover'),
  {ssr:false}
)
//import {Alert} from '@material-ui/core'
//import useLocalStorage from 'react-hook-uselocalstorage';

//const cookieCutter=dynamic(()=>import('cookie-cutter'),{ssr:false})



function UserProfile({data},props) {
  //const [main,setMain]=useContext(UserContext)
  const [showConfirm,setShowConfirm]=useState(false)
  const [user,setUser]=useState(()=>JSON.parse(data.key) || '')
  const [info,setInfo]=useState('')
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const [coin,setCoin]=useState({
    pair:'BTC',
    cryptoPrice:'',
    investment:'',
  })
  const [getOut,setGetOut]=useState(false)
  const [crypto,setCrypto]=useState()
  const [showInvest,setShowInvest]=useState(false)
  const [addressShow,setAddress]=useState(false)
  const [pairIcon,setPairIcon]=useState(bitcoinIcon)
  const [pending,setPending]=useState(false)
  const [showWithdraw,setShowWithdraw]=useState(false)
  const [message,setMessage]=useState({
    item:{},
    show:false,
    type:''

  })
  const [response,setResponse]=useState()
  const [withdrawn, setWithdrawn]=useState({
    done:false,
    pending:false,
  })
  const [invested,setInvested]=useState({
    pending:false,
    done:false,
  })

  
  useEffect((req)=>{
   let item=user
   Axios.post('/api/info',{item})
   .then((res)=>{
     //console.log(res.data.balance)
     setInfo(res.data)
     console.log(res.data.investment)
   })
  },[])
  
  const columns=[
    {
      title:'S/N',
      dataIndex:'S/N',
      key:'S/N',
      width:50,
      fixed:false
    },
    {
      title:'Plan',
      dataIndex:'plan',
      key:'plan',
      width:100,
      fixed:false
    },
    {
      title:'Amount($)',
      dataIndex:'amount',
      key:'amount',
      width:100,
      fixed:false
    },
   
    {
      title:'Date',
      dataIndex:'date',
      key:'date',
      width:100,
      fixed:false
    },
    {
      title:'Status',
      dataIndex:'Status',
      key:'Status',
      width:100,
      fixed:false
    },
   
    {
      title:'Pair',
      dataIndex:'pair',
      key:'pair',
      width:100,
      fixed:false
    }
  ]
  const openInvest=()=>{
    setShowInvest(true)
  }
  const closeInvest=()=>{
    setShowInvest(false)
    setMessage({
      show:false,
      type:'',
      item:''
    })
    setInvested({
      done:false,
      pending:false
    })
  }

  const logOut=()=>{
    cookieCutter.set('logged-in','') 
    cookieCutter.set('key','')
    Router.push('/')
    
  }
  const showGetout=()=>{
    getOut ? setGetOut(false) : setGetOut(true)
  }

  const OpenWithdraw=()=>setShowWithdraw(true)
  const closeWithdraw=()=>{
    setShowWithdraw(false)
    setMessage({
      show:false,
      type:'',
      item:''
    })
  }


  const convert=(item)=>{
    Axios.get(`/api/convert`)
    .then((res)=>{
      
      setCrypto(res.data)
      console.log(res.data)
    })
  }
  


  const showMessage=(item)=>{
    if(message.show && message.type=='withdraw'){
      return(
        <Card style={{marginTop:50,backgroundColor:'white'}} className='address-card'>
        <CardBody>
        <div style={{fontSize:20,color:'white',padding:5}}>
        Your request is being processed
    </div>
    <div style={{color:'black'}}>
      You are about to make a withdrawal of {message.item.amount} which is equivalent to {crypto} to
      the address {message.item.walletId} you will recieve an alert shortly, please inform us if you do not recieve your money within 24 hours
    </div>
        </CardBody>
        </Card>
      )
     
    }
    else if(message.show && message.type=='invest'){
      return(
        <Card style={{marginTop:50,backgroundColor:'white'}} className='address-card'>
        <CardBody>
        <div style={{fontSize:20,padding:5}}>
        Your request is being processed
    </div>
    <div style={{color:'black',}}>
      You are about to make an investment of {message.item.investment} which is equivalent to {crypto} to
      the address  you will recieve an alert shortly, please inform us if you do not recieve your money within 24 hours
    </div>
        </CardBody>
        </Card>
      )
    }
  }
  const spin=()=>{
    if(withdrawn.done==false && withdrawn.pending==true || invested.done==false && invested.pending==true){
      return (
        <div>
           <CircularProgress color='white' thickness={5} />
        </div>
      )
    }
    else if(withdrawn.pending==false && withdrawn.done==true || invested.done==true && invested.pending==false){
      return (
        <div>
          <Check />
        </div>
      )
    }
    else if(withdrawn.done==false && withdrawn.pending==false && showWithdraw==true) {
      return (
        <div style={{padding:2,textAlign:'center'}}>
               withdraw
             </div>
      )
    }
    else if(invested.done==false && invested.pending==false && showInvest==true) {
      return (
        <div style={{padding:2,textAlign:'center'}}>
               invest
             </div>
      )
    }
   
  }


  const withdraw=()=>{
    
      return (
        <div>
          <Button style={{width:50}} onClick={OpenWithdraw}>
            <LocalAtmIcon style={{width:40,height:40,marginLeft:-18,color:'#9a7801'}} />
          </Button>
          <Modal classNames={{
            modal:'pop',

          }} center open={showWithdraw} onClose={closeWithdraw}>
          <div className='pop-content' style={{}}>
         
           
         <Formik initialValues={{amount:'',walletId:'',pair:''}} onSubmit={(value)=>{
           
           let today=new Date()
           let year=today.getFullYear()+'-'
           let time=today.getHours()+":"
           let date=year+''+time

           let item={
             username:user.username,
             amount:value.amount,
             walletId:value.walletId,
             pair:value.pair,
             date:date,
             time:time,
           }

          
          console.log(item)

          setWithdrawn({
            pending:true,
            done:false
          })
          
           Axios.post(`/api/withdraw`,{item})
           .then((res)=>{
             if(res.data=='SUCCESS'){
               //setMessage(true)
               //setCrypto(res.data.value)
               console.log(res.data)
               
               setWithdrawn({
                 pending:false,
                 done:true,
               })
               setMessage({
                 show:true,
                 type:'withdraw',
                 item:item,
               })

             }
           })
           .catch((err)=>{
             console.log(err)
             setWithdrawn({
              pending:false,
              done:false,
            })
            setShowInvest(false)
           })
        
 }} >
 {({handleSubmit,handleChange,values})=>(
 <div style={{height:500,padding:10}}>
   <h3 style={{color:'white',textAlign:'center'}}>
     Make withdrawal
   </h3>
    <form>
      
      <Row>
      
        <Col md={12} className='withdraw-group'>
          <div className=''>
    <input 
    className='input invest'
    placeholder='Amount to be Withdrawn'
    type='number'
    onChange={handleChange('amount')}
    value={values.amount}
    required
    >

    </input>
    </div>
    <div>

    </div>
    <div style={{marginTop:20}}>
    
    <input
    className='input invest'
    placeholder={`Your wallet ID`}
    type='number'
    onChange={handleChange('walletId')}
    value={values.walletId}
    >

    </input>
         
    </div>
        </Col>
        <Col md={12} xs={12}>
          <div className='withdraw-pair'>
          <select onChange={handleChange('pair')} className='pair-drop' name='pair' id='pair' value={values.pair} defaultValue='BTC'>
            <option hidden>Coin</option>
            <option value='BTC'>BTC</option>
            <option value='ETH'>ETH</option>
          </select>

          </div>
        </Col>
        <Col xs={12} md={12} className='withdraw-button'>
        <Button style={{ height:50,width:100,backgroundColor:"#9a7801",display:'flex',flexDirection:'row',}}  onClick={handleSubmit} > 
           <div className='withdraw-spinner'>
           {spin()}
           </div>
        </Button>
        </Col>
        <div>
          {showMessage()}
        </div>
       
      </Row>
  </form>
 </div>
      )}
    </Formik> 
         
       </div>
          </Modal>
        </div>
      ) 
  }
  const closeGetout=()=>setGetOut(false)
  
  const invest=()=>{
    return (
      <div>
        <Button style={{width:50}} onClick={openInvest}>
         <CreditCardIcon style={{width:40,height:40,marginLeft:-18,color:'#9a7801'}} />
        </Button>
        <Modal classNames={{
          modal:'pop'
        }} center open={showInvest} onClose={closeInvest}>
        <div className='pop-content' >
         
           
           <Formik initialValues={{investment:'',price:'',pair:''}} onSubmit={(value)=>{
             
             
             let today=new Date()
             let year=today.getFullYear()+'/'
             let time=today.getHours()+":"
             let month=today.getMonth()+'/'
             let day=today.getDate()
             let date=`${year}${month}${day}`
             

             let item={
              investment:value.investment,
              username:user.username,
              pair:value.pair,
              date:date,
              status:'pending'
            }
            console.log(date)

             /*setCoin(()=>{
               return {
                 username:user.username,
                 investment:parseInt(values.investment),
                 pair:coin.pair,
                 price:values.price,
                 date:date,
               }
             })*/
             setInvested({
               pending:true,
               done:false,
             })
            Axios.post('/api/invest',{item})
             .then((res)=>{
               console.log(res.data)
                 if(res.data=='SUCCESS'){
                 setInvested({
                   pending:false,
                   done:true,
                 })
                  
                  setMessage({
                    show:true,
                    type:'invest',
                    item:item
                  })
                 }
             })
             .catch((err)=>{
               console.log(err)
               setInvested({
                 pending:false,
                 done:false,
               })
             })
}} >
  {({handleBlur,handleSubmit,handleChange,values})=>(
   <div style={{height:500,padding:10}}>
     <h3 style={{color:'white',textAlign:'center'}}>
       Make Investment
     </h3>
     <div></div>
      <Form>
        <div style={{}} className='pair-container'>
        <Field as='select' setFieldValue='BTC' onBlur={handleBlur} onChange={handleChange('pair')} placeholder='coin' className='pair-drop' name='pair' id='pair' value={values.pair} >
              <option hidden>Coin</option>
              <option selected value='BTC'>BTC</option>
              <option value='ETH'>ETH</option>
            </Field>
               
        </div>
        <Row>
          <Col xs={12} md={12} className='invest-group'>
            <div className=''>
      <input 
      className='input invest'
      placeholder='Amount in USD'
      type='number'
      onChange={handleChange('investment')}
      value={values.investment}
      required
      >

      </input>
      </div>
      <div>

      </div>
      <div style={{marginTop:20}}>
      
      <input 
      className='input invest'
      placeholder={`Amount in ${values.pair}`}
      type='number'
      onChange={handleChange('price')}
      value={crypto}
      readOnly
      >

      </input>
    
      </div>
        
      <div className='invest-button'>
        <Button style={{height:50,width:100,backgroundColor:"#9a7801",display:'flex',flexDirection:'row',}} className='inv-btn' onClick={handleSubmit} > 
        <div className='withdraw-spinner'>
             {spin()}
             </div>
        </Button>
      </div>
          </Col>
          <div>
            {showMessage()}
          </div>
         
        </Row>
    </Form>
   </div>
        )}
      </Formik> 
           
         </div>
        </Modal>
      </div>
    )
  }
  
  const toggleWithdraw=()=>{
    return (
      <div>
        <Button onClick={()=>{setShowWithdraw(true)}}>
            Withdraw
       </Button>
      </div>
    )
  }


  const showPending=()=>{
    if(pending){
      return (
        <div  >
          
        </div>
      )
    }
  }

 const toggleInvest=()=>{
   return (
     <div>
       <Button onClick={()=>{setShowInvest(true)}}>
            Invest
       </Button>
     </div>
   )
 }

  const showAddress=(item)=>{
   if(addressShow){
    return(
      <Card style={{marginTop:100,backgroundColor:'#9a7801'}} className='address-card'>
      <CardBody>
      <div style={{fontSize:20,color:'white',padding:5}}>
    You are required to pay the sum of   which is equivalent to 
    to this wallet address   and upload proof of payment
  </div>
      </CardBody>
      </Card>
    )
   }
  }
  const { ...rest } = props;

  return (
    <>
      <div style={{backgroundColor:' #050124',marginTop:50}} className="content">
      <Header
        absolute
        color="github"
        brand="Capital Investment"
        rightLinks={<HeaderLinks />}
        {...rest}
   
      />
        <Modal closeOnOverlayClick={true} closeIcon={false} center onClose={()=>setGetOut(false)} open={getOut} classNames={{
          modal:'log-out',
          overlay:'modal-overlay',
          modalContainer:'',
          closeIcon:'close-icon'
        }}>
           <div className='get-ou'  style={{color:'white',backgroundColor:' #050124',height:'100%',width:'100%',
            margin:'auto',position:'absolute',top:0,left:0,textAlign:'center',right:0
          }}>
           <div  className='get-out'>
             Log Out?
            
           </div>
           
           <div style={{marginTop:20}}>
             <Button onClick={logOut} >
                <div style={{}}>
                  Yes
                </div>
             </Button>
             <Button onClick={closeGetout}>
                No
             </Button>
               
           </div>
           </div>
        </Modal>
        

        <Modal closeOnOverlayClick={true} closeIcon={false} center onClose={()=>setShowConfirm(false)} open={showConfirm} classNames={{
          modal:'confirmation',
          overlay:'modal-overlay',
          modalContainer:'',
          closeIcon:'close-icon'
        }}> 
            <div className='get-ou'  style={{color:'white',backgroundColor:' #050124',height:'100%',width:'100%',
            margin:'auto',position:'absolute',top:0,left:0,textAlign:'center',right:0
          }}>
            
            
            <h3>
              Confirm Investment
            </h3>
            <p >
              Please upload proof of payment using th box bellow
            </p>
            <div style={{borderRadius:5,height:30,width:60,backgroundColor:'goldenrod',display:'grid',placeItems:"center", marginBottom:40, marginTop:40,marginLeft:'40%'}}>

            </div>
            <p>
              Your Deposit will be processed immediately it has been confirmed
            </p>
          </div>
        </Modal>
        <Row>
            <Col md={8}>
              <Row>
                <Col md={12}>
                <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Activity</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Accounts
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Purchases
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Sessions
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
                 
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
                </Col>

                <Col md={12}>
                <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Asset gain</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> {info.balance-500 || ''}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>  
                </Col>
               

              </Row>
            
            </Col>

          <Col md={4} className=''>
            <Card className="card-user profile-card ">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one"  />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <PersonOutlineIcon className='profile-icon' style={{width:100,height:100,color:'#9a7801',marginTop:50,marginBottom:-30}}   />
                    <h3 className="titl username">{user.username}</h3>
                  </a>
                  <Row>
                    <Col style={{}} md={6} xs={12}>
                   <div className='star'>
                   <StarBorderIcon style={{width:60,height:60,color:'#9a7801',marginTop:-20}} />
                   </div>
                    </Col>
                    <Col style={{color:'white'}} className='level-talk' md={6} xs={12}>
                    Level 1 investor
                    </Col>
                  </Row>
                </div>
                <Container style={{marginTop:-50}}>
                  <Row>
                    <Col xs={3} md={3}>
                        <AccountBalanceWalletIcon className='wallet-icon' style={{width:80,height:80,color:'white'}} />
                    </Col>
                    <Col xs={9} md={9}>
                
                          <Container className='balance'>
                           <div style={{marginTop:-35}}>
                           <Row style={{}} >
                             <h3 style={{marginLeft:10}}>
                              Total Balance
                             </h3>
                            </Row>
                            <Row className='balance-figure'>
                              <div style={{color:'#9a7801'}}>
                              <AttachMoneyIcon style={{width:50,height:30,marginTop:-5,marginLeft:-7,marginRight:-17,color:" #9a7801"}} className='' />
                                {info.balance || 0}.00
                              </div>
                            </Row>
                           </div>
                          </Container>
                      
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} md={3}>
                        <BarChartIcon className='wallet-icon' style={{width:100,height:100,color:'white'}} />
                    </Col>
                    <Col xs={9} md={9}>
                    <Container className='balance'>
                           <div style={{marginTop:-35}}>
                           <Row>
                             <h3 style={{marginLeft:10}}>
                               Total Invested
                             </h3>
                            </Row>
                            <Row className='balance-figure'>
                            <div style={{color:' #9a7801'}}>
                              <AttachMoneyIcon style={{width:50,height:30,marginTop:-5,marginLeft:-7,marginRight:-17,color:' #9a7801'}} className='' />
                               0.00
                              </div>
                            </Row>
                           </div>
                          </Container>
                      
                    </Col>
                  </Row>

                </Container>
                    
                    <Container className='transaction-group' style={{marginTop:20}}>
                     <Row style={{backgroundColor:'#050124',borderRadius:5}}>
                       <Col className='transaction-button' xs={5} md={3}>
                          {invest()}
                          Invest
                       </Col>
                       
                       <Col className='transaction-button' xs={5} md={3}>
                          {withdraw()}
                          Withdraw
                       </Col>
                        <Col className='transaction-button' xs={5} md={3}>
                          <Button style={{width:50}} onClick={()=>{setShowConfirm(true)}}>
                           <DoneOutline style={{width:40,height:40,marginLeft:-18,color:'#9a7801'}} color='#9a7801' />
                           
                          </Button>
                          <span style={{}}>Confirmation</span>
                        </Col>
                        <Col className='transaction-button bottom-button' xs={5} md={3}>
                          <Button style={{width:40}} >
                           <ExitToAppIcon style={{width:40,height:40,marginLeft:-18,color:'#9a7801'}} color='#9a7801' />
                          
                          </Button>
                          Sign out
                        </Col>
                     </Row>
                    </Container>
                        
                  <div style={{marginTop:50}}>
                  <h3 style={{marginBottom:-40,textAlign:'center'}}>Pending Investments</h3>
                    <Table className='invest-table' tableLayout='auto' useFixedHeader={false} scroll={{y:true,x:true}} columns={columns} data={info.investment} />
                    
                  </div>
                
                
              </CardBody>
              <CardFooter>
                
              </CardFooter>
            </Card>
          </Col>
            
        </Row>
      </div>
    </>
  );
}

export default UserProfile;

/*UserProfile.getInitialProps=(res)=>{
  const info=JSON.parse(cookieCutter.get('key'))

  return {
    data:info
  }
}*/
UserProfile.getInitialProps=async ({req})=>{
  /*let user=JSON.parse(cookieCutter.get('key'))
  Axios.post('/api/info',{user})
  .then((res)=>{
    return {
      data:res.data
    }
  })*/
  
  const user=parseCookies(req)
  //const info=cookies.key
  //const info =JSON.parse(cookieCutter.parse('key'))
  //info(user)
  
  return {
    data:user || ''
  }
}

