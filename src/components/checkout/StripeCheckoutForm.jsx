import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { CartActions } from "../../redux/slice/cartSlice";

export const StripeCheckoutForm = ({ total, dispatch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setMessage("Stripe was not initialized correctly.");
      setIsSuccess(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setMessage("Error retrieving card field.");
      setIsSuccess(false);
      return;
    }

    setIsProcessing(true);
    setMessage("");

    try {
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setMessage(error.message);
        setIsSuccess(false);
      } else {
        setMessage("Payment successfully authorized!");
        setIsSuccess(true);
        dispatch(CartActions.clearCart());
      }
    } catch (err) {
      setMessage("Error processing payment.");
      setIsSuccess(false);
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <CardElement className="border p-3 rounded" />
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="primary-btn mt-3"
      >
        {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
      </button>
      {message && (
        <p className={`mt-2 ${isSuccess ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
};
