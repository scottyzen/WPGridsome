require("dotenv").config()
const sgMail = require('@sendgrid/mail')

exports.handler = function (event, context, callback) {
  sgMail.setApiKey(process.env.RED_SENDGRID_API_KEY)
//   let body = JSON.parse(event.body)
    const {name, email} = JSON.parse(event.body)
    console.log('name: ' + name);
    console.log('email: ' + email);
    

  let msg = {
    to: email,
    from: 'website@wpgridsome.com',
    subject: `New donation from ${name}`,
    text: 'Someone has filled out a form on your website, check out the message they left and get in touch with them :)',
    html: '<p>Hello HTML world!</p>'
  }


//   sgMail.send(msg);
  sgMail.send(msg).then(message => {
    
    callback(null, {
        statusCode: 200,
        body: {
            mailStatus: 'Successful',
            responce: message
        }
    });

  }).catch(e => {
    console.error(e.toString())
    callback(e.toString())
  })
}