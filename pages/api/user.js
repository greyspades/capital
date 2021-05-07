import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
import { validate } from 'uuid';
//const users =require('../../middleware/models')

const Register = async (req, res) => {
 
  
    const newUser=new users({
      
      email:req.body.user.email,
      password:req.body.user.password,
      firstname:req.body.user.firstname,
      lastname:req.body.user.lastname,
      phone:req.body.user.phone,
      balance:req.body.user.balance,
      username:req.body.user.username,
      
  
    })

  
    console.log(req.body.user)
   users.exists({email:req.body.user.email, username:req.body.user.username })
   .then((exists)=>{
     if(exists){
       res.send('THAT EMAILL ADDRESS IS TAKEN')
       
     }
     else {
      newUser.save()
      .then((item)=>{
        console.log('user saved')
        res.send('SAVED')
        //console.log(item)
      })
      .catch((error)=>{
        console.log(error);
      })
     }
   })
   .catch((error)=>{
    console.log(error);
    res.send('CONNECTION ERROR')
  })
    //console.log(req.body)
  
};

export default connectDB(Register);

