import React, {useState,useEffect} from 'react'
import {
    Col,
    Container,
    Row,
    Button,
    Spinner
} from 'reactstrap'
import Admin from '../pages/api/admin'
import Axios from 'axios'

const OverLord=({data})=>{

    const[main,setMain]=useState()
    const [mounted,setMounted]=useState(false)
useEffect(()=>{
   //console.log(JSON.serialise(data))
   Axios.get('/api/admin')
   .then((res)=>{
       //console.log(res.data.status)
       if(res.data.status=='DONE'){
            //let item=JSON.parse(res.data[0])
       //console.log(res.data[0].username)
       
      // console.log(item)
       //let data=JSON.parse(res.data[0])

       setMain(res.data.info)
       console.log(main)
       setMounted(true)
       
       //console.log(main)
       }
   })
   },[])
   function confirm(user){
       let name='tim'
    Axios.post('/api/confirm',{user})
    .then((res)=>{
        console.log(res.data)
    })
   }
    if(mounted){
        return (
            <div>
                <Container>
                    <Row>
                        <h1>
                            Admin 
                        </h1>
                        <Button onClick={()=>{console.log(main[0].investment)}} >
                            click
                        </Button>
                    </Row>
                    <Row>
                        <Col>
                        <h2>
                        {main.map((data)=>(
                            <Container>
                                <Row>
                                    <Col md={4} xs={4}>
                                        {data.username}
                                    </Col>
                                    <Col md={4} xs={4}>
                                      {data.investment.map((req)=>(
                                          <div>
                                              {req.amount}
                                          </div>
                                      ))}
                                    </Col>
                                    <Col md={4} xs={4}>
                                      {data.investment.map((req)=>(
                                          <div>
                                              {req.pair}
                                          </div>
                                      ))}
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    <Button onClick={(user)=>{confirm(data)}}>
                                        Confirm?
                                    </Button>
                                </Row>
                            </Container>
                        ))}
                        </h2> 
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
    else return(
        <div>
            <Spinner/>
        </div>
    )
}
export default OverLord

/*export async function getServerSideProps(context){

    
    const info='tim'
    const raw= await Admin()
    
    
    
    return {
        props:{
            data:raw ?? null
        }
    }
}*/