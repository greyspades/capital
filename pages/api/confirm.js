import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';

const Confirm=async(req,res)=>{
    const person=req.body.user.username
    const amount=req.body.user.amount
    const key=req.body.user.key

    console.log(req.body)
    users.findOne({username:person})
    .then((data)=>{
        console.log('found user')
        let update=data.balance+amount
        users.updateOne({username:person},{$set:{balance:update},$pull:{investment:{key:key}}})
        .then((item)=>{
           res.send('SUCCESS')
            console.log('updated balance')
        })
    })
}

export default connectDB(Confirm)