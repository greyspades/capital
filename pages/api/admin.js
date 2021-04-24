import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';

const Admin =async(req,res)=>{
    users.find({'investment.status':'pending'})
    .then((data)=>{
        //res.send('danuek')
        //console.log(JSON.parse(data))
        
        //const info=data.stringify()
        //console.log(data)
        let item={
            status:'DONE',
            info:data
        }
        res.send({
            status:'DONE',
            info:data
        })
        return {
            data:data
        }
        
    })
    .catch((err)=>{
        res.send(err)
    })
    
}

export default connectDB(Admin);