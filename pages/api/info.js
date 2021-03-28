import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
//const users =require('../../middleware/models')

const info = async (req, res) => {
        
        users.findOne({username:req.body.user.username})
        .then((item)=>{
          console.log(item)
          res.send(item)
        })
}
export default connectDB(info);
