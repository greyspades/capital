import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';

const Confirm=async(req,res)=>{
    let person=req.body.user.username
    //console.log(person)
    users.findOne({username:person})
    .then((data)=>{
        console.log('found you')
       
    })
}

export default connectDB(Confirm)