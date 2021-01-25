const functions = require('firebase-functions');
const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.set('Cache-Control', 'private, max-age=300, s-maxage=600');
});

app.get('/test', (req, res) => {
    res.send("testing, testing");
})

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
