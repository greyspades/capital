import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
//const users =require('../../middleware/models')

const Register = async (req, res) => {
 
  
    const newUser=new users({
      
      email:req.body.user.email,
      password:req.body.user.password,
      firstname:req.body.user.firstname,
      lastname:req.body.user.lastname,
      phone:req.body.user.phone,
      balance:req.body.user.balance,
  
    })
    //console.log(req.body.user)
   users.exists({email:req.body.user.email})
   .then((exists)=>{
     if(exists){
       res.send('THAT EMAIL ADDRESS IS TAKEN')
       
     }
     else {
      newUser.save()
      .then(()=>{
        console.log('user saved')
        res.send('SAVED')
      })
      .catch((error)=>{
        console.log(error);
      })
     }
   })
    //console.log(req.body)
  
};

export default connectDB(Register);

