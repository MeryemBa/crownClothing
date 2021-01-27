import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import {clearItemsArray} from "../../redux/cart/cart-action";

function StripeCheckoutButton({clearItemsArray, price, ...otherProps }) {
  const priceForStripe = price * 100; //stripe accept price in cents

  const stripeAPIKey =
    "pk_test_51H1YL3DWswFwTW5Ru2NzSKMEZ8FTc7Ud8n8h0MXlWkA1M2QNaPj6itwdWinEq7wNopvWztkyQSOv4Flz0I1OX6t800HNMtN080";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("succesful payment");
        clearItemsArray();
      })
      .catch((error) => {
        console.log("payment problem: " + error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripeAPIKey}
      {...otherProps}
    />
  );
}
const mapDispatchToProps = (dispatch) => ({
  clearItemsArray:()=>dispatch(clearItemsArray())
});
export default connect(null,mapDispatchToProps)(StripeCheckoutButton);