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
import {
  Button,
  Container,
  CardFooter,
  
  ButtonGroup,
  Card,
  CardText,
  CardHeader,
  CardBody,
  CardTitle,
  
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Spinner,
  
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

//import LoadingButton from '@material-ui/lab';
import info from './api/info'
import {motion} from 'framer-motion'
import Dropdown from 'react-dropdown'
import cookieCutter from 'cookie-cutter'
import bitcoinIcon from '../assets/img/bitcoin.svg'
//import cookies from 'cookies'
// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from '../variables/charts'
import dynamic from 'next/dynamic'
import {Formik} from 'formik'
import Axios from "axios";
import { parseCookies } from "./api/cookies.js";
import HyperModal from 'react-hyper-modal'
import Table from 'rc-table'
import { faYenSign } from "@fortawesome/free-solid-svg-icons";
import 'react-dropdown/style.css'

const Popover=dynamic(()=>import('@idui/react-popover'),
  {ssr:false}
)

//import useLocalStorage from 'react-hook-uselocalstorage';

//const cookieCutter=dynamic(()=>import('cookie-cutter'),{ssr:false})



function UserProfile({data}) {
  //const [main,setMain]=useContext(UserContext)
  const [user,setUser]=useState(()=>JSON.parse(data.key))
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
  const [crypto,setCrypto]=useState()
  const [showInvest,setShowInvest]=useState(true)
  const [addressShow,setAddress]=useState(false)
  const [pairIcon,setPairIcon]=useState(bitcoinIcon)
  const [pending,setPending]=useState(false)
  const [showWithdraw,setShowWithdraw]=useState(false)
  const [message,setMessage]=useState({
    item:{},
    show:true,
    type:'invest'

  })
  const [response,setResponse]=useState()
  const [withdrawn, setWithdrawn]=useState({
    done:false,
    pending:false,
  })

  
  useEffect((req)=>{
   let item=user
   /*Axios.post('/api/info',{item})
   .then((res)=>{
     //console.log(res.data.balance)
     setInfo(res.data)
     console.log(res.data.investment)
   })*/
  },[])
  
  const columns=[
    {
      title:'S/N',
      dataIndex:'S/N',
      key:'S/N',
      width:100,
    },
    {
      title:'Plan',
      dataIndex:'plan',
      key:'plan',
      width:100,
    },
    {
      title:'Amount($)',
      dataIndex:'amount',
      key:'amount',
      width:100,
    },
   
    {
      title:'Date',
      dataIndex:'date',
      key:'date',
      width:100,
    },
    {
      title:'Status',
      dataIndex:'Status',
      key:'Status',
      width:100,
    },
   
    {
      title:'Pair',
      dataIndex:'pair',
      key:'pair',
      width:100,
    }
  ]


 
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
    if(withdrawn.done==false && withdrawn.pending==true){
      return (
        <div>
           <CircularProgress color='green' thickness={5} />
        </div>
      )
    }
    else if(withdrawn.pending==false && withdrawn.done==true){
      return (
        <div>
          <Check />
        </div>
      )
    }
    else if(withdrawn.done==false && withdrawn.pending==false && showInvest==false) {
      return (
        <div style={{padding:2,textAlign:'center'}}>
               withdraw
             </div>
      )
    }
    else if(withdrawn.done==false && withdrawn.pending==false &&showInvest==true) {
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
         <Card style={{backgroundColor:"#050124",padding:10,marginLeft:40}}>
           <Button  style={{backgroundColor:'red',width:100,display:'flex',flexDirection:'column',justifyContent:'center'}}
            onClick={()=>{setShowWithdraw(false)}}
           >
            <div style={{textAlign:'center',marginLeft:-10}}>
            close
            </div>
           </Button>
           <CardBody >
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
   <div style={{padding:20,height:600}}>
     <h3 style={{color:'white',textAlign:'center'}}>
       Make withdrawal
     </h3>
      <form>
        
        <Row>
        
          <Col md={9} className='withdraw-group'>
            <div className=''>
      <input 
      className='input invest'
      placeholder='Amount to be Withdrawn'
      type='number'
      onChange={handleChange('amount')}
      value={values.amount}
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
          <Col md={3} xs={12}>

            {/*<Dropdown onChange={handleChange('pair')} placeholderClassName='pair-placeholder' value={'USD'} placeholder={dropPairs[0]} menuClassName='pair-drop-menu' className='pair-drop' options={dropPairs}  />*/}

            <select onChange={handleChange('pair')} className='pair-drop' name='pair' id='pair' defaultValue='BTC'>
              <option value='BTC'>BTC</option>
              <option value='ETH'>ETH</option>
            </select>

          </Col>
          <div className='invest-button'>
          <Button style={{ height:50,width:100,backgroundColor:"#9a7801",display:'flex',flexDirection:'row',}} className='inv-btn' onClick={handleSubmit} > 
             <div className='withdraw-spinner'>
             {spin()}
             </div>
          </Button>
          </div>
          <div>
            {showMessage()}
          </div>
         
        </Row>
    </form>
   </div>
        )}
      </Formik> 
           </CardBody>
         </Card>
        </div>
      ) 
  }

  
  const invest=()=>{
    return (
      <div>
         <Popover fitMaxWidthToBounds className='pop' width='500' maxWidth='500'  trigger='click' content={()=>(
           <Card className='pop-content' >
           <Button  style={{backgroundColor:'red',width:100,display:'flex',flexDirection:'column',justifyContent:'center'}}
            onClick={()=>{setShowInvest(false)}}
           >
            <div style={{textAlign:'center',marginLeft:-10}}>
            close
            </div>
           </Button>
           <CardBody >
           <Formik initialValues={{investment:'',price:'',pair:''}} onSubmit={(value)=>{
             
             
             let today=new Date()
             let year=today.getFullYear()+'-'
             let time=today.getHours()+":"
             let date=year+''+time

             let item={
              investment:value.investment,
              username:user.username,
              pair:value.pair,
              date:date,
            }

             /*setCoin(()=>{
               return {
                 username:user.username,
                 investment:parseInt(values.investment),
                 pair:coin.pair,
                 price:values.price,
                 date:date,
               }
             })*/
             setWithdrawn({
               pending:true,
               done:false,
             })
            Axios.post('/api/invest',{item})
             .then((res)=>{
               console.log(res.data)
                 if(res.data=='SUCCESS'){
                  setWithdrawn({
                    pending:false,
                    done:true,
                  })
                  
                  setMessage({
                    show:true,
                    type:'invest',
                    item:item
                  })
                  console.log(message)
                 }
             })
}} >
  {({handleSubmit,handleChange,values})=>(
   <div style={{padding:20,height:600}}>
     <h3 style={{color:'white',textAlign:'center'}}>
       Make Investment
     </h3>
      <form>
        <div className='pair-container'>
        <select onChange={handleChange('pair')} className='pair-drop' name='pair' id='pair' defaultValue='BTC'>
              <option value='BTC'>BTC</option>
              <option value='ETH'>ETH</option>
            </select>
               
        </div>
        <Row>
          <Col md={8} className='invest-group'>
            <div className=''>
      <input 
      className='input invest'
      placeholder='Amount in USD'
      type='number'
      onChange={handleChange('investment')}
      value={values.investment}
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
    </form>
   </div>
        )}
      </Formik> 
           </CardBody>
         </Card>
         )}>
           <Button>
             invest
           </Button>
         </Popover>
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
    You are required to pay the sum of   which is equivalent to {} 
    to this wallet address   and upload proof of payment
  </div>
      </CardBody>
      </Card>
    )
   }
  }


  return (
    <>
      <div className="content">
        <Row>
            <Col>
              <Row>
                <Col md={12}>
                <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
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
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
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
                <Col md={12}>
                <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
                </Col>

              </Row>
            
            </Col>






          <Col md="4" className='profile-card'>
            <Card className="card-user profile-card ">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one"  />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                     
                    />
                    <h3 className="title">{user.username}</h3>
                  </a>
                  <p className="description">Ceo/Co-Founder</p>
                </div>
                <Container>
                  <Row>
                    <Col xs={4} md={3}>
                        <AccountBalanceWalletIcon className='wallet-icon' style={{width:80,height:80,color:'white'}} />
                    </Col>
                    <Col xs={8} md={9}>
                
                          <Container className='balance'>
                            <Row style={{}} >
                             <h3 style={{marginLeft:10}}>
                              Total Balance
                             </h3>
                            </Row>
                            <Row className='balance-figure'>
                              <div>
                              <AttachMoneyIcon style={{width:50,height:30,marginTop:-5}} className='' />
                                {info.balance || 0}.00
                              </div>
                            </Row>
                          </Container>
                      
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={3}>
                        <BarChartIcon className='wallet-icon' style={{width:100,height:100,color:'white'}} />
                    </Col>
                    <Col xs={8} md={9}>
                    <Container className='balance'>
                            <Row style={{}} >
                             <h3 style={{marginLeft:10}}>
                               Total investment
                             </h3>
                            </Row>
                            <Row className='balance-figure'>
                              <div>
                              <AttachMoneyIcon style={{width:50,height:30,marginTop:-5}} className='' />
                                {user.investment || 0}.00
                              </div>
                            </Row>
                          </Container>
                      
                    </Col>
                  </Row>

                </Container>
                    
                    <Container>
                     <Row>
                       <Col className='transaction-buttons' xs={6} md={6}>
                          {invest()}
                       </Col>
                       
                       <Col className='transaction-buttons' xs={6} md={6}>
                          {showWithdraw ? withdraw() : toggleWithdraw()}
                       </Col>
                     </Row>
                    </Container>

                  <div>
                    <Table columns={columns} data={info.investment} />
                    
                  </div>
                
                
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
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
    data:user
  }
}

