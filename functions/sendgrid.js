require("dotenv").config()
const sgMail = require('@sendgrid/mail')

exports.handler = function (event, context, callback) {
  sgMail.setApiKey(process.env.RED_SENDGRID_API_KEY)
  
  console.log('SENDGRID STARTED');
  console.log('BODY: ',event.body);
  console.log('PATH: ',event.path);
  console.log('HTTP_METHOD: ',event.httpMethod);
  console.log('HEADERS: ',event.headers);
  console.log('QUERY_STRING_PARAMETERS: ',event.queryStringParameters);

  if (!event.body) {
    callback(null, {
      statusCode: 200,
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

    callback(null, {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify('successful')
      });

  })
}