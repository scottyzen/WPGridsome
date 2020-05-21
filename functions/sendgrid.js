require("dotenv").config()
const sgMail = require('@sendgrid/mail')

exports.handler = function (event, context, callback) {
  sgMail.setApiKey(process.env.RED_SENDGRID_API_KEY)
//   let body = JSON.parse(event.body)

  let msg = {
    to: 'scottyzen@me.com',
    from: 'scottyzen@me.com',
    subject: 'Website Contact Form',
    text: 'Someone has filled out a form on your website, check out the message they left and get in touch with them :)',
    html: '<p>Hello HTML world!</p>'
  }


  sgMail.send(msg).then(message => {
    console.log(`Contact form sent`)
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({message})
      });
  }).catch(e => {
    console.error(e.toString())
    callback(e.toString())
  })
}