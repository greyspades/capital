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
import Head from 'next/head'
import Header from "../components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from '../components/Footer/Footer'
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
import {Field,Form} from 'formik'
import {Formik} from 'formik'
import Axios, {post} from "axios";
import { parseCookies } from "./api/cookies.js";
import CryptoCompare from "react-crypto-compare";
import Table from 'rc-table'

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
  //const [user,setUser]=useState(()=>JSON.parse(data.key) || '')
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
  const [walletId,setWalletId]=useState('')
  const [message,setMessage]=useState({
    item:{},
    show:false,
    type:''

  })
  const [loading,setLoad]=useState(true)
  const [response,setResponse]=useState()
  const [withdrawn, setWithdrawn]=useState({
    done:false,
    pending:false,
  })
  const [invested,setInvested]=useState({
    pending:false,
    done:false,
  })
  const [file,setFile]=useState(null)

  const [confirmSpin,setConfirmSpin]=useState({
    pending:false,
    done:false,
  })
  const [place,setPlace]=useState('')
  const [InvestAmount,setInvestAmount]=useState()

  const [pair,setPair]=useState(" ")
  const [proof,setProof]=useState('')

  const [dp, setDp]=useState({
    status:'Nill',
    url:'' || 'default'
  })
  
  useEffect((req)=>{
    const user=parseCookies(req)
    let item=JSON.parse(user.key)
    
   
   Axios.post('/api/info',{item})
   .then((res)=>{
     console.log(res.data)
     
     setInfo(res.data)
     setLoad(false)
     //console.log(res.data.investment)
     //console.log(pricecrypto)
   })
   .catch((err)=>{
    console.log(err.response.data)
    //console.log('wahala')
   if(err.response.data=='mongo wahala'){
    alert('Unnable to connect to the server please try again later')
    
   }
  })
  },[])

  const conSpin=()=>{
    if(confirmSpin.pending==true && confirmSpin.done==false){
      return (
        <CircularProgress thickness={10} />
      )
    }
    else if(confirmSpin.pending==false && confirmSpin.done==true){
      return (
        <Check />
      )
    }
  }
const closeConfirmSpinner=()=>{
  setConfirmSpin({
    pending:false,
    done:true
  })
  setShowConfirm(false)
}
  
  
const fileChange=(e)=>{
  setFile(
    e.target.files[0]
  )
}
const closeConfirm=()=>{
  setShowConfirm(false)
  setConfirmSpin({
    done:false,
    pending:false
  })
}

const fileSubmit=(e)=>{
  e.preventDefault()
  let user={
    username:info.username,
    file:file
  }
  let peep='tim'
  setConfirmSpin({
    pending:true,
    done:false,
  })
  setTimeout(closeConfirmSpinner,10000)
  // Stop form submit
    fileUpload(file).then((response)=>{
      console.log(response.data);
      
    })
    Axios.post('/api/upload',{peep})
    .then((res)=>{
      console.log(res)
    })
}
const fileUpload=()=>{
  const url = '/api/upload';
  const formData = new FormData();
  let user=info.username
  formData.append('file',file)
  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
  return  post(url, formData,config,user)
}


  const columns=[
    
    {
      title:'Amount($)',
      dataIndex:'amount',
      key:'amount',
      width:50,
      fixed:false
    },
    {
      title:'Pair',
      dataIndex:'pair',
      key:'pair',
      width:50,
      fixed:false
    },
   
    {
      title:'Date',
      dataIndex:'date',
      key:'date',
      width:50,
      fixed:false
    },
    
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
    setPlace('')
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
    setWithdrawn({
      pending:false,
      done:false
    })
    
    
  }


  const convert=(item)=>{
    Axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870')
     .then((res)=>{
       console.log(res.data)
     })
  }
  
  const displayPic=()=>{
    if(dp.status=='SET'){
      return (
        <image src={dp.url}>
  
        </image>
      )
    }
    else {
      return (
        <div style={{width:'100%'}}>
                  <div style={{width:200,height:200, marginLeft:'23%', backgroundColor:' #050124',borderRadius:100,textAlign:'center',display:'grid',placeItems:'center'}}>
                     <PersonOutlineIcon className='profile-icon' style={{width:150,height:150,color:'#9a7801',marginBottom:-10,}}   />
        </div>
        </div>
      )
    }
  }
  
  const newDp=()=>{
    const url = '/api/upload';
  const formData = new FormData();
  let user=info.username
  formData.append('file',file)
  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
  return  post(url, formData,config,user)
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
      You are about to make a withdrawal of {message.item.amount} to
      the address {message.item.walletId} you will recieve an alert shortly, please inform us if you do not recieve your money within 24 hours
    </div>
        </CardBody>
        </Card>
      )
     
    }
    else if(message.show && message.type=='invest'){
      return(
        <Card style={{marginTop:50,backgroundColor:'white',width:320}} className='address-card'>
    <CardBody style={{width:290}}>
        <div style={{fontSize:20,padding:5,color:'black'}}>
        Your request is being processed
    </div>
    <div style={{color:'black',}}>
      You are about to make an investment of <span style={{color:'blue'}}>${message.item.investment}</span> which is equivalent to <span style={{color:'blue'}}><CryptoCompare style={{color:'blue'}} from='USD'  to={pair} amount={InvestAmount} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /></span>
      please pay the amount to the address <a style={{color:'blue'}}>{walletId}</a> and click the confirmation button when done.
    </div>
        </CardBody>
        </Card>
      )
    }
  }
  const spin=()=>{
    if(withdrawn.done==false && withdrawn.pending==true || invested.done==false && invested.pending==true && pair){
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

  const Load=()=>{
    if(loading==true){
      return (
        <div>
         <CircularProgress color='white' thickness={5} />
        </div>
      )
    }
    else if(loading==false){
      return (
        <div>
          {info.username}
        </div>
      )
    }
  }

  const loadLink=()=>{
    if(loading==true){
      return (
        <div>
         <CircularProgress color='white' thickness={3} />
        </div>
      )
    }
    else if(loading==false){
      return (
        <div>
           <h4 style={{textAlign:'center'}}>
        Your referal link is: <a style={{color:'#9a7801'}} >https://www.capitalinvestmentoption.com/landing/{info.username}</a>
          </h4>
        </div>
      )
    }
  }

  const convertCurrency=(pair,amount)=>{
    Axios.get(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${pair}&api_key=9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870`)
     .then((res)=>{
       //console.log(res.data.BTC.toString())
       //let coin=eval(pair)
       if(pair=='BTC'){
         let final=res.data.BTC*amount
        setPlace(final.toString())
       }
       else if(pair=='ETH'){
        let final=res.data.ETH*amount
        setPlace(final.toString())
       }
     })
  }

  const withdraw=()=>{
    
      return (
        <div>
          <Button style={{width:50}} onClick={OpenWithdraw}>
            <LocalAtmIcon style={{width:40,height:40,marginLeft:-18,color:'#9a7801'}} />
          </Button>
          <Modal classNames={{
            modal:'investment-modal',
            overlay:'modal-overlay',
            modalContainer:'',
            closeIcon:'close-icon'

          }} closeOnOverlayClick={true} center open={showWithdraw} onClose={closeWithdraw}>
          <div className='pop-content' style={{color:'white',backgroundColor:' #050124',height:'100%',width:'100%',
            margin:'auto',position:'absolute',top:0,left:0,textAlign:'center',right:0}}>
         
           
         <Formik initialValues={{amount:'',walletId:'',pair:''}} onSubmit={(value)=>{
           
           let today=new Date()
           let year=today.getFullYear()+'-'
           let time=today.getHours()+":"
           let date=year+''+time

           let item={
             username:info.username,
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
            console.log(err.response.data)
            //console.log('wahala')
           if(err.response.data=='mongo wahala'){
            alert('Unnable to connect to the server please try again later')
            setWithdrawn({
              pending:false,
              done:false,
            })
            setShowInvest(false)
           }
          })
           
        
 }} >
 {({handleSubmit,handleChange,values})=>(
 <div style={{height:500,padding:10}}>
   <h3 style={{color:'white',marginRight:30}}>
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
    type='text'
    onChange={handleChange('walletId')}
    value={values.walletId}
    >

    </input>
         
    </div>
        </Col>
        <Col md={12} xs={12}>
          <div className='withdraw-pair'>
          <select required onChange={handleChange('pair')} className='pair-drop' name='pair' id='pair' value={values.pair} defaultValue='BTC'>
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
          
          modal:'investment-modal',
          overlay:'modal-overlay',
          modalContainer:'',
          closeIcon:'close-icon'
        }} closeOnOverlayClick={true} center open={showInvest} onClose={closeInvest}>
        <div className='pop-content' style={{color:'white',backgroundColor:' #050124',height:'100%',width:'100%',
            margin:'auto',position:'absolute',top:0,left:0,textAlign:'center',right:0}} >
         
           
           <Formik initialValues={{investment:'',price:'',pair:''}} onSubmit={(value)=>{
             
             
             let today=new Date()
             let year=today.getFullYear()+'/'
             let time=today.getHours()+":"
             let month=today.getMonth()+'/'
             let day=today.getDate()
             let date=`${year}${month}${day}`
             

             let item={
              investment:value.investment,
              username:info.username,
              pair:value.pair,
              date:date,
              status:'pending'
            }
            //console.log(date)
              setPair(value.pair)
              setInvestAmount(value.investment)
             /*setCoin(()=>{
               return {
                 username:info.username,
                 investment:parseInt(values.investment),
                 pair:coin.pair,
                 price:values.price,
                 date:date,
               }
             })*/

             if(value.pair=='ETH'){
               setWalletId('19iDNESQnhrutam6WStfkPBQ2ANendYnm1')
               setPair("ETH")
             }
             else if(value.pair=='BTC'){
               setWalletId('0x0eb64b011ac0c4F414f2A13eEAf32649A49E39A2')
               setPair("BTC")
             }
            
             setInvested({
               pending:true,
               done:false,
             })
             convertCurrency(value.pair,value.investment)
           if(value.pair){
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
              console.log(err.response.data)
              //console.log('wahala')
             if(err.response.data=='mongo wahala'){
              alert('Unnable to connect to the server please try again later')
              setInvested({
                pending:false,
                done:false,
              })
             }
            })
           }
           else if(!value.pair){
             alert('Please pick a pair')
           }
}} >
  {({handleBlur,handleSubmit,handleChange,values})=>(
   <div style={{height:500,padding:10}}>
     <h3 style={{color:'white',marginRight:30}}>
       Make Investment
     </h3>
     <div></div>
     
      <Form>
        <div style={{}} className='pair-container'>
        <Field required  as='select' setFieldValue='BTC'  onChange={handleChange('pair')} placeholder='coin' className='pair-drop' name='pair' id='pair' value={values.pair} >
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
      placeholder={place}
      type='number'
      onChange={handleChange('price')}
      value={values.price}
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

  const signOut=()=>{
    cookieCutter.set('key', '')
    Router.push('/')
  }

  return (
    <>
      <div style={{backgroundColor:' #050124',}} className="content">
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
        
        color="dark"
        
        changeColorOnScroll
        
        rightLinks={
          <a href='#' style={{color:'#9a7801'}}  onClick={()=>{setGetOut(true)}}>
            Log out
            <ExitToAppIcon style={{marginLeft:10}} />
          </a>

        }
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
        

        <Modal  closeOnOverlayClick={true} closeIcon={true} center onClose={closeConfirm} open={showConfirm} classNames={{
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
              Please upload proof of payment using the box bellow
            </p>
            <form onSubmit={fileSubmit}>
        
        <input required  style={{backgroundColor:'goldenrod',width:250,borderRadius:2,borderColor:'goldenrod',marginTop:20}} type="file" onChange={fileChange} />
          <div style={{marginTop:20}}>
  
  
          <Button style={{padding:5}} type="submit">Upload</Button>
          </div>
          <div>
            {conSpin()}
          </div>
      </form>
            <p>
              Your Deposit will be processed immediately it has been confirmed
            </p>
          </div>
        </Modal>
        <Row>
            

          <Col md={4} className=''>
          <h2 style={{marginTop:-30}}>
                Dashboard
              </h2>



            <Card className="card-user profile-card ">
             
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one"  />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <div style={{display:'grid',placeItems:"center"}} onClick={(e) => e.preventDefault()}>

                  
                        {displayPic()}
                    

                  </div>
                  <div style={{marginTop:20}}>
                  <h3 className="titl username">{Load()}</h3>
                  </div>
                  
                  <Row style={{marginTop:35}}>
                    <Col style={{}} md={6} xs={12}>
                   <div className='star'>
                   <StarBorderIcon style={{width:35,height:35,color:'#9a7801',marginTop:-8,marginBottom:20}} />
                   </div>
                    </Col>
                    <Col style={{color:'white'}} className='level-talk' md={6} xs={12}>
                    Level 1 investor
                    </Col>
                  </Row>
                </div>
                <Container style={{marginTop:-70}}>
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
                  <Row style={{marginTop:-10}}>
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
                    
                    <Container className='transaction-group' style={{marginTop:-20}}>
                     <Row style={{backgroundColor:'#050124',borderRadius:5}}>
                       <Col className='transaction-button' xs={3} md={3}>
                          {invest()}
                          Invest
                       </Col>
                       
                       <Col className='transaction-button' xs={3} md={3}>
                          {withdraw()}
                          Withdraw
                       </Col>
                        <Col className='transaction-button' xs={3} md={3}>
                          <Button style={{width:50}} onClick={()=>{setShowConfirm(true)}}>
                           <DoneOutline style={{width:40,height:40,marginLeft:-18,color:'#9a7801'}} color='#9a7801' />
                           
                          </Button>
                          <span style={{}}>Confirmation</span>
                        </Col>
                       
                     </Row>
                    </Container>
                    <Container>
                      {loadLink()}
                    </Container>
                        
                  <div style={{marginTop:10}}>
                  <h4 style={{marginBottom:-40,textAlign:'center'}}>Pending Investments</h4>
                    <Table className='invest-table' tableLayout='auto' useFixedHeader={false} scroll={{y:true,x:false}} columns={columns} data={info.investment} />
                    
                  </div>
                
                
              </CardBody>
              <CardFooter>
                
              </CardFooter>
            </Card>
          </Col>
          
          <Col className='chart-row' md={8}>
          
              <Row style={{}}>
                <Col md={12}>
                <h3 stle={{color:'white',marginLeft:10}}>
              Track Progress
            </h3>
                <Card className="card-chart">
              <CardHeader>
                <Row style={{marginTop:-2}}>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Activity</CardTitle>
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

                <Col style={{}} md={12}>
                <h3 style={{marginTop:40,marginLeft:10}}>
                    Track Assets
                  </h3>
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
            
        </Row>
<div style={{marginTop:-70}}>
<Footer  />
</div>
      </div>
    </>
  );
}

export default UserProfile;