const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.SECRET_KEY);

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	console.log("Payment Request Recieved for this amount >>> ", total);
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: total, // subunits of the currency
			currency: "usd",
		});
		// OK - Created
		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
	}
});

// app.post("/payments/create", async (request, response) => {
// 	const total = request.query.total;

// 	// console.log('Payment Recieved for this amount >>> ', total);
// 	try {
// 		const paymentIntent = await stripe.paymentIntents.create({
// 			amount: total, //subunits of the currency
// 			currency: "usd",
// 		});
// 		// ok - Created
// 		response.status(201).send({
// 			clientSecret: paymentIntent.client_secret,
// 		});
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// });
const port = process.env.PORT || 10000;

// functions.https.onRequest(app);
app.listen(port, (err) => {
	if (err) {
		console.log(err.message);
	} else {
		console.log(`http://localhost:${port}`);
	}
});

// http://127.0.0.1:5001/fir-1a184/us-central1/api
