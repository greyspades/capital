import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
//import { errors } from 'formidable';

const Admin =async(req,res)=>{
    users.find({'investment.status':'pending'})
    .then((data)=>{
        //res.send('danuek')
        //console.log(JSON.parse(data))
        
        //const info=data.stringify()
        console.log(data)
        let item={
            status:'DONE',
            info:data
        }
        res.send({
            status:'DONE',
            info:data
        })
        //res.status(401).send('failed');
        return {
            data:data
        }
        
    })
    .catch((err)=>{
        res.send(err)
        //res.status(401).send('failed');
    })
    
}

export default connectDB(Admin);