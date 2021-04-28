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
import Check from '@material-ui/icons/Check'

const OverLord=({data})=>{

    const[main,setMain]=useState()
    const [mounted,setMounted]=useState(false)
    const [spinner,setSpinner]=useState({
        done:false,
        pending:false
    })
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

   const spin=(key)=>{
       if(spinner.pending==true && spinner.done==false ){
        return(
            <div>
                <Spinner />
            </div>
        )
       }
       else if(spinner.pending=false && spinner.done==true){
           return(
               <div>
                   <Check />
               </div>
           )
       }
   }
   function confirm(name,id,amount){
       //let name='tim'
       let user={
            username:name,
            key:id,
            amount:amount
       }
       setSpinner({
           pending:true,
           done:false
       })
    Axios.post('/api/confirm',{user})
    .then((res)=>{
        if(res.data=='SUCCESS'){
            setSpinner({
                pending:false,
                done:true
            })
            
        }
    })
   }
    if(mounted){
        return (
            <div>
                <Container>
                    <Row>
                        <h1>
                            Overlord
                        </h1>
                     
                    </Row>
                    <Row>
                        <Col>
                        <div>
                        {main.map((data)=>(
                            <Container>
                                <Row style={{backgroundColor:' #26253d'}}>
                                    <Col md={4} xs={4}>
                                        {data.username}
                                    </Col>
                                    {spin()}
                                    <Col md={4} xs={8} >
                                      {data.investment.map((req)=>(
                                          <Row style={{backgroundColor:'black'}}>
                                              <Col>
                                              <Button onClick={(user)=>{confirm(data.username,req.key,req.amount)}}>
                                                {req.amount}
                                              
                                             </Button>
                                              </Col>
                                              <Col>
                                              {req.pair}
                                              </Col>
                                              <Col>
                                              {req.bomber}
                                              </Col>
                                            
                                             
                                          </Row>
                                          
                                      ))}
                                    </Col>
                                   

                                    
                                </Row>
                                
                            </Container>
                        ))}
                        </div> 
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