import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
//import mailjet from 'node-mailjet'
const mailjet=require('node-mailjet')

const Mail=async (req,res)=>{
    console.log('mailer')
    mailjet.connect('e6c1dc3257c2fcf91d4109c9d682ad6c', '461357dc8cbd902e7dcc01670d974f97')
const request = mailjet.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "pedrogustalvo@gmail.com",
        "Name": "pedro"
      },
      "To": [
        {
          "Email": "greyspades99@gmail.com",
          "Name": "pedro"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

}
export default Mail