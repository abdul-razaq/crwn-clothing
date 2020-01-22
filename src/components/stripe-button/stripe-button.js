import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // Convert price in value to cents which is the standard that stripe wants
  const priceForStripe = price * 1000;
  const publishableKey = 'pk_test_sFArHTQOpsvQkrNUC6IOaaX100ypCGof3O';

  const onToken = token => {
    // This is the token that you pass on to the backend which then creates the charge
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
