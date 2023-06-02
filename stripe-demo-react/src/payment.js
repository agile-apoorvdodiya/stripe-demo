import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

export const PaymentIntent = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-completed",
      },
    });
    console.log("payment response ", result);
    if (result.error) {
      console.log(result.error.message);
    } else {
      //  methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <>
      <form onSubmit={handlePayment}>
        <PaymentElement></PaymentElement>
        <AddressElement options={{ mode: "billing" }}></AddressElement>
        <button>Submit</button>
      </form>
    </>
  );
};
