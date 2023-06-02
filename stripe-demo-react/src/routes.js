import { Route, Routes } from "react-router-dom";
import { PaymentIntent } from "./payment";
import { Amount } from "./amount";
import { Test } from "./test";
import { paymentCompleted } from "./payment-complete";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/payment-completed" element={<paymentCompleted />} />
      <Route path="/" element={<Amount />}>
        <Route path="/payment-intent" element={<PaymentIntent />} />
      </Route>
    </Routes>
  );
};
