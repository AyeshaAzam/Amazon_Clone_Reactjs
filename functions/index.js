const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
//const { config } = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51HSpeDEIjpMf2sNdMapOLtAODYkoPYvFkOmGfrSCFbq5GrmgeoiPiGC0CPldpyQ26Fh5Pybm4EgWKvHq1EvJ6wnl00XuhLxdxS"
);

// whole functions folder is for full back-end ( cloud functions)
// we will build an Express app and POST it on a cloud function

//-to set up the API, we need these below stuffs:
// so These are the setups needed to get the back-end express app running on the cloud function

//-App config
const app = express();

//-Middleware
app.use(cors({ origin: true })); // is to do with security
app.use(express.json()); // send data and pass it in json format

//-API routes
app.get("/", (request, response) =>
  response.status(200).send("Hello Ayesha Azam! ")
);

// app.get("/ayesha", (request, response) =>
//   response.status(200).send("Hello Ayesha, how is cloning going on.... ")
// );

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created something/payment
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-Listen command
exports.api = functions.https.onRequest(app);

//Example Endpoint:
//http://localhost:5001/challenge-e2a0d/us-central1/api
