import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE, API, CURRENCY_LIST } from "./constants";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchRequest } from "./api.service";
const stripePromise = loadStripe(STRIPE.PK);

export const Amount = () => {
  const [amount, setAmount] = useState(12);
  const [currency, setCurrency] = useState("inr");
  const [options, setOptions] = useState(null);
  const navigate = useNavigate();

  const createPaymentIntent = async (params) => {
    try {
      if (amount) {
        const response = await fetchRequest.post(
          `${API.BASE}${API.PAYMENT_INTENT}`,
          {
            amount: params.amount * 100,
            method: "card",
            currency: params.currency,
          }
        );
        console.log(response);
        if (response.client_secret) {
          setOptions({
            clientSecret: response.client_secret,
          });
          navigate("/payment-intent");
        }
      } else {
        setOptions(null);
      }
    } catch (error) {
      console.log("error >> ", error);
    }
  };
  return (
    <>
      <div>Stripe payment</div>
      <form>
        <select
          onBlur={() => createPaymentIntent({ amount, currency })}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {CURRENCY_LIST.map((c, i) => {
            return (
              <option value={c.currency} key={c.currency}>
                {c.symbol}
              </option>
            );
          })}
        </select>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onBlur={() => createPaymentIntent({ amount, currency })}
          type="number"
          placeholder="Please enter Amount"
        />
      </form>
      {options ? (
        <Elements stripe={stripePromise} options={options}>
          <Outlet />
        </Elements>
      ) : (
        <>Please enter amount</>
      )}
    </>
  );
};
