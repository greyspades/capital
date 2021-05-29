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
import {CircularProgress} from '@material-ui/core'


const OverLord=({data})=>{

    const[main,setMain]=useState()
    const [mounted,setMounted]=useState(false)
    const [spinner,setSpinner]=useState({
        done:false,
        pending:false
    })
    const [showCheck,setCheck]=useState()
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
       console.log(res.data.info)
       setMounted(true)
       
       //console.log(main)
       }
   }).catch((err)=>{
       console.log(err)
       if(err.response.data='mongo wahala'){
           alert('Network problem please refresh the page')
       }
   })
   },[])

   const spin=(key)=>{
       if(spinner.pending==true && spinner.done==false ){
        return(
            <div style={{width:'100%'}}>
               <CircularProgress style={{width:120,height:120,display:'grid',placeItems:'center',marginLeft:'40%'}} thickness={10} color='goldenrod' />
                
            </div>
        )
       }
       else if(spinner.pending=false && spinner.done==true){
           return(
               <div style={{width:70,height:70,borderRadius:35,backgroundColor:'goldenrod'}}>
                   <Check />
               </div>
           )
       }
   }
   const check=()=>{
       if(showCheck.pending==false && showCheck.done==true){
           return (
               <div style={{backgroundColor:'goldenrod'}}>
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
                    {spin()}
                    </Row>
                    <Row>
                        <Col>
                        <div>
                       
                        {main.map((data)=>(
                            <Container>
                                <Row style={{backgroundColor:' #26253d'}}>
                                
                                    <Col md={4} xs={4}>
                                    <div style={{fontSize:30,color:'white'}}>
                                        {data.username}
                                    </div>
                                    <div style={{fontSize:20,color:'white',marginTop:30,marginBottom:30}}>
                                        {data.firstname} {data.lastname}
                                    </div>
                                    <div style={{fontSize:20,color:'white'}}>
                                       Bal: ${data.balance}
                                    </div>
                                    </Col>
                                    
                                    <Col md={4} xs={8} >
                                      {data.investment.map((req)=>(
                                          <Row style={{backgroundColor:'black'}}>
                                              <Col >
                                              <Button style={{}} onClick={(user)=>{confirm(data.username,req.key,req.amount)}}>
                                                <p style={{textAlign:'center',marginLeft:-30,padding:0,marginRight:-30}}>
                                                    Confirm
                                                </p>
                                              
                                             </Button>
                                              </Col>
                                              <Col>
                                              {req.pair}
                                              </Col>
                                              <Col>
                                              ${req.amount}</Col>
                                              <Col>
                                              <div style={{}}>
                                        {req.date}
                                        </div>
                                              </Col>
                                             
                                             
                                            
                                             
                                          </Row>
                                          
                                      ))}
                                    </Col>
                                    <Col>
                                        <div style={{color:'white',fontSize:20}}>
                                        {data.bomber || 'no bomber'}
                                        </div>
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