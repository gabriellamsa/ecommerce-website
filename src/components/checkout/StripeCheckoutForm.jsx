import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { CartActions } from "../../redux/slice/cartSlice";

export const StripeCheckoutForm = ({ total, dispatch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // success payment
    setTimeout(() => {
      setMessage("Payment successful!");
      dispatch(CartActions.clearCart());
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <CardElement className="border p-3 rounded" />
      <button type="submit" disabled={!stripe} className="primary-btn mt-3">
        Pay ${total.toFixed(2)}
      </button>
      {message && <p className="text-green-600 mt-2">{message}</p>}
    </form>
  );
};
