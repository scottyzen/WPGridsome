const fetch = require('node-fetch')
const mailChimpAPI = process.env.MAILCHIMP_API_KEY
const mailChimpListID = process.env.MAILCHIMP_LIST_ID

exports.handler = function (event, context, callback) {
  const formData = JSON.parse(event.body)
  const email = formData.email
  const data = {
    email_address: email,
    status: 'subscribed',
    // merge_fields: {
    //   FNAME: '',
    //   LNAME: '',
    // },
  }
  const subscriber = JSON.stringify(data)

  fetch(`https://api.mailchimp.com/3.0/lists/${mailChimpListID}/members`, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${mailChimpAPI}`,
      'Content-Type': 'application/json',
    },
    body: subscriber,
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      callback(null, {
        statusCode: 200,
        status: 'Successfull',
        body: JSON.stringify(data),
      })
    })
}
