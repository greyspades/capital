import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
import cookieCutter from 'cookie-cutter';


const price=require('crypto-price')

const withdraw=async(req,res)=>{
    let coin=req.body.item.pair
    console.log(req.body.item)
   price.getCryptoPrice('USD',coin).then(obj => { // Base for ex - USD, Crypto for ex - ETH 
        
        let cryptoPrice=obj.price
        
        
    users.updateOne({username:req.body.item.username},{$push:{withdrawal:{amount:req.body.item.amount,pair:req.body.item.pair,value:cryptoPrice,time:req.body.item.time,walletId:req.body.item.walletId}},$set:{balance:4000}})
    .then((item)=>{
      console.log('withdrawn')
      res.send('SUCCESS')
      console.log(item)
    
    

      res.send({
          status:'SUCCESSFUL',
          value:obj.price
      })
    })
    .catch((err)=>{
      console.log(err)
    })


    })
   
    
}
export default connectDB(withdraw)