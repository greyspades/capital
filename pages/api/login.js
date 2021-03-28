import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
//const users =require('../../middleware/models')

const handler = async (req, res) => {
 
  console.log(req.body)
  
  users.exists({email:req.body.user.email})
  .then((exists)=>{
    if(exists){
      users.findOne({email:req.body.user.email})
      .then((user)=>{
        if(user.password==req.body.user.password){
          
          res.send({
            status:'LOG IN',
            info:user
          })
          
          console.log('loged in')
        }
        else {
          res.send({status:'WRONG DETAILS'})
          console.log('wrong details')
        }
      })
    }
    else {
      res.send({status:'WRONG DETAILS'})
      console.log('wrong details')
    }
  })
}
  


export default connectDB(handler);
