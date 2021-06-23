import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
//import mailjet from 'node-mailjet'


const Mail=async (req,res)=>{
    var user=req.body.user
    console.log(user)
    console.log('mailer')
const mailjet=require('node-mailjet')
  .connect('e6c1dc3257c2fcf91d4109c9d682ad6c', '461357dc8cbd902e7dcc01670d974f97')
const request = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
  "Messages":[
    {
      "From": {
        "Email": "capitalinvestmentoption1@hotmail.com",
        "Name": "Capital investment option"
      },
      "To": [
        {
          "Email": `${user.mail}`,
          "Name": `${user.name}`
        }
      ],
      "Subject": "Welcome to Capital investment option.",
      "TextPart": "Congratulations on signing up",
      "HTMLPart": `<h3>Dear ${user.name}, welcome to <a href='https://www.capitalinvestmentoption.com/'>Capital investment option</a>!</h3><br /><div>please click the link bellow to confirm your account</div>
      <a href="/www.capitalinvestmentoption.com/Dashboard">capitalinvestmentoption</a>`,
      "CustomID": "confirmation mail"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
    res.send(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

}
export default Mail