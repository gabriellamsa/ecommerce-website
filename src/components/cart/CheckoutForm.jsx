import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";
import StripeCheckout from "react-stripe-checkout";

export const CheckoutForm = ({ total, handlePaymentSuccess }) => {
  const dispatch = useDispatch();

  const handleToken = (token) => {
    if (token) {
      handlePaymentSuccess();
      dispatch(clearCart());
    }
  };

  return (
    <StripeCheckout
      token={handleToken}
      stripeKey="pk_test_51QxG2gFs6Hb4V5G3LZX3oAA2dtECfhvimoUhHrrlOrYFErmWjGwvweN4yhHwgHjMu8xYpzXoocWBMrjowYQP8wHg00s7g78YRy"
      amount={total * 100}
      name="Lunacart Ecommerce"
      email="email@example.com"
      description="Payment test using Stripe"
    >
      <button className="w-full bg-gray-200 py-3.5 my-3 font-medium">
        Pay ${total?.toFixed(2)}
      </button>
    </StripeCheckout>
  );
};
