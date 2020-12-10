require("dotenv").config()
const fetch = require("node-fetch");
const TOKEN = Buffer.from(`${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}`).toString('base64');

exports.handler = function (event, context, callback) {

    // Only allow POST requests
    if (event.httpMethod !== "POST" || !event.body) {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const query = event.body;
      fetch( process.env.GRAPHQL_URL, { 
          method: 'POST',
          headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Basic ${TOKEN}`
            },
            body: JSON.stringify({query})
        })
        .then(res => res.json())
        .then(data => {
            callback(null, {
                statusCode: 200,
                status: 'Successfull',
                body: JSON.stringify(data.data)
            });
        })
        .catch(error => {
            callback(null, {
                statusCode: 500,
                body: error
            });
        });

}