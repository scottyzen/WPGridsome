require("dotenv").config()
const sgMail = require('@sendgrid/mail')

exports.handler = function (event, context, callback) {
  sgMail.setApiKey(process.env.RED_SENDGRID_API_KEY)
  
  console.log('SENDGRID STARTED');
  console.log(event.body);
  
  
    const {name, email} = JSON.parse(event.body);
    console.log('name: ' + name);
    console.log('email: ' + email);
    

  let msg = {
    to: 'scottyzen@gmail.com',
    from: 'website@wpgridsome.com',
    subject: `New donation from XXXXX`,
    text: 'Someone has filled out a form on your website, check out the message they left and get in touch with them :)',
    html: '<p>Hello HTML world!</p>'
  }

  sgMail.send(msg).then(message => {

    callback(null, {
        statusCode: 200,
        body: JSON.stringify('successful')
      });

  })
}