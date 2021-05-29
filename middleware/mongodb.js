import mongoose from 'mongoose';

const uri="mongodb+srv://grey:Vermilion9%23@cluster0.j4dir.mongodb.net/users?retryWrites=true&w=majority"
const uri2="mongodb+srv://grey:Vermilion9%23@cluster0.j4dir.mongodb.net/users?retryWrites=true&w=majority";
const connectDB = handler => async (req, res) => {
  /*if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
    
  }
  // Use new db connection
  await mongoose.connect("mongodb+srv://grey:Vermilion9%23@cluster0.j4dir.mongodb.net/users?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    
  });
  return handler(req, res);*/
   mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('mongodb connected')
    return handler(req, res);
  })
  .catch((err)=>{
    console.log(err)
    console.log('mongo wahala')
    //res.status(500).send('mongo wahala');
    //res.send('mongo wahala')
    //res.send(err)
    //res.status(400).send('Current password does not match');
  })
  
  
};

export default connectDB;