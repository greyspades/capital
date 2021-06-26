import React,{useState,useContext,useEffect} from 'react'

import Head from 'next/head'
import {useRouter} from 'next/router'
//import tech1 from "assets/img/tech1"
import {motion} from 'framer-motion'
import { parseCookies } from "./api/cookies.js";
import Header from '../components/Header/Header'
import HeaderLinks from '../components/Header/HeaderLinks'
import Footer from '../components/Footer/Footer'
import Axios from 'axios'
import {
    Container,
    Col,
    Row,
    Card,
    CardBody,
    CardHeader,
    Button,
} from 'reactstrap'
import cookieCutter from 'cookie-cutter'
const Success=(props)=>{

    const dashboardRoutes = [];
    const { ...rest } = props;


    const mail=()=>{
        
        const person=parseCookies(req)
       let item=JSON.parse(person.key)
       let user={
           name:item.firstname,
           mail:item.email
       }
        Axios.post('/api/mail',{user})
        .then((res)=>{
          console.log('sent mail')
          console.log(res.data)
        })
        //console.log(mail,name)
      }

    return(
        <div>
            
            <Container>
                <Card style={{}} className='success-card'>
                    <CardHeader>
                        <h2 style={{textAlign:'center'}}>
                            Your Registration was successful
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <div style={{textAlign:'center'}}>
                        Please check your email to confirm your account and unlock all features 
                        </div>
                        <div style={{textAlign:'center'}}>
                            did not recieve email ? <Button onClick={mail}>click here to resend</Button>
                        </div>
                        <div style={{marginTop:40,textAlign:'center'}}>
                            Or login and go directly to your <a style={{color:'goldenrod'}} href="/Dashboard">Dashboard</a>

                        </div>
                    
                    </CardBody>
                </Card>
            </Container>
            <Footer />
        </div>
    )
}
export default Success