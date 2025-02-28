import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";
import { useState } from "react";

export const CheckoutForm = ({ total, handlePaymentSuccess }) => {
  const dispatch = useDispatch();
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handleFakePayment = () => {
    setIsPaymentProcessing(true);

    setTimeout(() => {
      setIsPaymentProcessing(false);
      setIsPaymentSuccess(true);

      handlePaymentSuccess();
      dispatch(clearCart());
    }, 2000);
  };

  return (
    <div>
      <button
        className="w-full bg-gray-200 py-3.5 my-3 font-medium"
        onClick={handleFakePayment}
        disabled={isPaymentProcessing}
      >
        {isPaymentProcessing ? "Processing..." : `Pay $${total?.toFixed(2)}`}
      </button>

      {isPaymentSuccess && (
        <div className="mt-3 text-center text-green-600">
          ✅ Payment Successful!
        </div>
      )}
    </div>
  );
};
