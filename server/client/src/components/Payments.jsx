import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="KnowMail"
        description="$5 for 5 credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
      />
    );
  }
}

export default Payments;
