import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { CartActions } from "../../redux/slice/cartSlice";
import PropTypes from "prop-types";

export const StripeCheckoutForm = ({ total, dispatch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    if (retryCount > 0) {
      const timer = setTimeout(() => {
        setRetryCount(0);
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [retryCount]);

  const validateForm = () => {
    if (!stripe || !elements) {
      setMessage("Stripe was not initialized correctly.");
      setIsSuccess(false);
      return false;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setMessage("Error retrieving card field.");
      setIsSuccess(false);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsProcessing(true);
    setMessage("");

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
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
      if (retryCount < MAX_RETRIES) {
        setRetryCount((prev) => prev + 1);
        setMessage(
          `Network error. Retrying... (${retryCount + 1}/${MAX_RETRIES})`
        );
      } else {
        setMessage("Unable to process payment. Please try again later.");
      }
      setIsSuccess(false);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="relative">
        <CardElement
          className="border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {isProcessing && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`primary-btn mt-3 ${
          isProcessing ? "opacity-75 cursor-not-allowed" : ""
        }`}
      >
        {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
      </button>
      {message && (
        <p
          className={`mt-2 ${
            isSuccess ? "text-green-600" : "text-red-600"
          } transition-colors duration-200`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

StripeCheckoutForm.propTypes = {
  total: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};
