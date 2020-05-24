require("dotenv").config()
const sgMail = require('@sendgrid/mail')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};


exports.handler = function (event, context, callback) {
  sgMail.setApiKey(process.env.RED_SENDGRID_API_KEY)
  
  console.log('SENDGRID STARTED');
  console.log('BODY: ',event.body);

  if (!event.body) {
    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify('No data passed')
    });
    return ;
  }
  
  
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

    var response = {
      message: message,
      body: 'Successfull'
    }

    callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(response)
      });

  })
}