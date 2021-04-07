import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
//const users =require('../../middleware/models')

const info = async (req, res) => {
        //const data=JSON.stringify(req.body.item)
        const data=req.body.item
        console.log(data.username)
        console.log('gotten')
        users.findOne({username:data.username})
        .then((item)=>{
         
          res.send(item)
        })
        .catch((err)=>{
          console.log(err)
          res.send(err)
        })
}
export default connectDB(info);
