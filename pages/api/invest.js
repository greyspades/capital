import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';


const price=require('crypto-price');

const invest=async(req,res)=>{
  let coin=req.body.item.pair
   
        
    //let cryptoPrice=obj.price

    //let worth=cryptoPrice*req.body.item.investment
    //console.log(req.body.item)
    users.findOne({username:req.body.item.username})
   .then((user)=>{
     let newBalance=req.body.item.investment+user.balance
     let id =Date.now()
    users.updateOne({username:req.body.item.username},{$push:{investment:{amount:req.body.item.investment,
      pair:req.body.item.pair,date:req.body.item.date,status:req.body.item.status,key:id}}}).then((da)=>{
      res.send('SUCCESS')
      console.log('invested')
      console.log(id)
      console.log(user)
    })
    .catch((err)=>{
      console.log(err)
      res.send(err)
    })
    

   })
   
    .catch((err)=>{
      console.log(err)
      res.send(err)
    })
   
 
}
export default connectDB(invest)