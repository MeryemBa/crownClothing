const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const path = require("path");
const compression = require('compression');
const mailchimp = require("@mailchimp/mailchimp_marketing");



const enforce = require('express-sslify');


if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//mailchimp configuration
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_KEY.split("-")[1]
})

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(enforce.HTTPS({ trustProtoHeader: true }))
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});


app.post("/newsletter", async(req, res) => {
  const {email}=req.body;
  
  const listId = process.env.MAILCHIMP_LIST_ID;
  try {
    
    
 
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
    });
    
  
   
    return res.status(201).json({ message: null });
  } catch (error) {
    
    return res.status(400).json({
      message: `Something went wrong. Please Try again.`,
    });

   
  }
  
});
