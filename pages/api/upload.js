import formidable from 'formidable';
import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';

export const config = {
  api: {
    bodyParser: false,
  },
};

const confirm=async(req, res) => {
    //const person=req.body.user
    console.log(req.body)
    console.log('work')
  const form = new formidable.IncomingForm();
  form.uploadDir = "./";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files,user) => {
    console.log(files,user);
    console.log(files);
    /*users.findOne({username:person})
    .then((data)=>{
        console.log('found user')
        users.updateOne({username:person},{$push:{proof:file}})
        .then((item)=>{
           res.send('SUCCESS')
            console.log('uploaded confirmation')
        })
    })*/
  });
};
export default connectDB(confirm)