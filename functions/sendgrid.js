require("dotenv").config()
const sgMail = require('@sendgrid/mail')

exports.handler = function (event, context, callback) {
  sgMail.setApiKey(process.env.RED_SENDGRID_API_KEY)
  
  console.log('SENDGRID STARTED');
  
//   let body = JSON.parse(event.body)
    const {name='Mr. X', email="scottyzen@gmail.com"} = JSON.parse(event.body)
    console.log('name: ' + name);
    console.log('email: ' + email);
    

  let msg = {
    to: email,
    from: 'website@wpgridsome.com',
    subject: `New donation from ${name}`,
    text: 'Someone has filled out a form on your website, check out the message they left and get in touch with them :)',
    html: '<p>Hello HTML world!</p>'
  }

  sgMail.send(msg).then(message => {

    callback(null, {
        statusCode: 200,
        status: 'Successfull',
        body: JSON.stringify('successful')
      });

  })
}