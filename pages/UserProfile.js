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
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import BarChartIcon from '@material-ui/icons/BarChart'
import Axios from 'axios'
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
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import cookieCutter from 'cookie-cutter'
//import cookies from 'cookies'
// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from '../variables/charts'
import dynamic from 'next/dynamic'

import axios from "axios";
//import { parseCookies } from "./api/cookies.js";
//import useLocalStorage from 'react-hook-uselocalstorage';

//const cookieCutter=dynamic(()=>import('cookie-cutter'),{ssr:false})



function UserProfile({data}) {
  //const [main,setMain]=useContext(UserContext)
  //const [user,setUser]=useState(()=>JSON.parse(cookieCutter.get('key')))
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  
  //const user=JSON.parse(cookieCutter.get('key'))
  /*useEffect(()=>{
    setUser(JSON.parse(cookieCutter.get('key')))
    console.log(user)
  },[])*/
  //const detail=JSON.parse(cookieCutter.get('userDetails'))
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
                    <h3 className="title"></h3>
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
                               Balance
                             </h3>
                            </Row>
                            <Row className='balance-figure'>
                              <div>
                              <AttachMoneyIcon style={{width:50,height:30,marginTop:-5}} className='' />
                                .00
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
                               Investment
                             </h3>
                            </Row>
                            <Row className='balance-figure'>
                              <div>
                              <AttachMoneyIcon style={{width:50,height:30,marginTop:-5}} className='' />
                                .00
                              </div>
                            </Row>
                          </Container>
                      
                    </Col>
                  </Row>
                </Container>
                
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
/*UserProfile.getInitialProps=async ({req})=>{
  /*let user=JSON.parse(cookieCutter.get('key'))
  Axios.post('/api/info',{user})
  .then((res)=>{
    return {
      data:res.data
    }
  })
  const cookies=parseCookies(req)
  const info=cookies.key
  return {
    data:info
  }*/

