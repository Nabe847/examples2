const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51LjpgFGCsUu088ddj1FuER1W4ytRvuYZSg02YFgDxcTdxZCppTMpP8NaUILr5QvMyuhRR0ru9wipwud7zBy5KX0f00cU8JtDeq');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "jpy",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));