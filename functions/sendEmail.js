require("dotenv").config()
const fetch = require("node-fetch");

exports.handler = function (event, context, callback) {
    const {name, email, subject, message} = JSON.parse(event.body);
    const body = `
    Name: <strong>${name}</strong>
    Message: ${message}
    `

    const mutation = `
    mutation SEND_EMAIL ($subject: String, $body: String, $from: String) {
    sendEmail(
        input: {
            from: $from
            subject: $subject
            body: $body
        }) 
        {
            origin
            sent
            message
        }
    }`;

      fetch( process.env.GRAPHQL_URL, { method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: mutation,
            variables: { subject, body }
        })
      }).then(res => res.json())
        .then(data => {
            callback(null, {
                statusCode: 200,
                status: 'Successfull',
                body: JSON.stringify(data.data)
            });
        });

}