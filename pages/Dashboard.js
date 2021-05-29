import react,{useEffect} from 'react'
import Axios from 'axios'
import {parseCookies} from '../middleware/cookies'

const Dashboard=()=>{
    useEffect((req)=>{
        const user=parseCookies(req)
        let item=JSON.parse(user.key)
        //console.log(item)
       Axios.post('/api/info',{item})
       .then((res)=>{
         //console.log(res.data.balance)
         //setInfo(res.data)
         //console.log(res.data.investment)
         console.log(res.data)
       })
      },[])
    return (
      <div>
        <h1>
          so it works!!!!
        </h1>
      </div>
    )
  }
  export default Dashboard