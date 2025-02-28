import { useSelector, useDispatch } from "react-redux";
import { selectTotalPrice } from "../redux/slice/cartSlice";
import BgImage from "../assets/common/Frame.png";
import { Title } from "../components/common/CustomComponents";
import { CartActions } from "../redux/slice/cartSlice";
import { IoTrashOutline, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { StripeCheckoutForm } from "../components/checkout/StripeCheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51QxG2gFs6Hb4V5G3LZX3oAA2dtECfhvimoUhHrrlOrYFErmWjGwvweN4yhHwgHjMu8xYpzXoocWBMrjowYQP8wHg00s7g78YRy"
);

export const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  return (
    <>
      <section className="mt-16">
        <div className="h-[50vh]">
          <div className="images absolute top-0 left-0 w-full h-1/2">
            <img src={BgImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="text absolute top-48 left-[45%]">
            <Title level={1}>Cart</Title>
          </div>
        </div>
        <div className="container flex justify-between">
          <div className="w-2/3">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs text-primary uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-16 py-5">
                      Thumbnail
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <CartPageCard
                        key={item.id}
                        id={item.id}
                        cover={item.cover}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.totalPrice}
                        dispatch={dispatch}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        No items in cart.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-2/5 ml-16">
            <div className="bg-gray-100 p-5">
              <p className="text-lg font-medium text-primary">Cart</p>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Subtotal</p>
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Shipping</p>
                <p className="text-sm font-normal w-42">
                  Enter your address to view shipping options.
                </p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Total</p>
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <Elements stripe={stripePromise}>
                <StripeCheckoutForm total={totalPrice} dispatch={dispatch} />
              </Elements>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const CartPageCard = ({
  id,
  cover,
  name,
  price,
  quantity,
  totalPrice,
  dispatch,
}) => {
  return (
    <tr>
      <td className="px-16 py-5">
        <img src={cover} alt={name} className="w-16 h-16 object-cover" />
      </td>
      <td className="px-6 py-3">{name}</td>
      <td className="px-6 py-3">${price.toFixed(2)}</td>
      <td className="px-6 py-3">
        <div className="flex flex-col items-center">
          <button
            onClick={() => dispatch(CartActions.removeFromCart(id))}
            className="mb-1"
          >
            <IoTrashOutline size={18} />
          </button>
          <div className="flex items-center border rounded">
            <button
              onClick={() =>
                dispatch(
                  CartActions.updateQuantity({ id, quantity: quantity - 1 })
                )
              }
              disabled={quantity <= 1}
              className="px-2 py-1"
            >
              <IoRemoveOutline size={18} />
            </button>
            <span className="px-3 py-1">{quantity}</span>
            <button
              onClick={() =>
                dispatch(
                  CartActions.updateQuantity({ id, quantity: quantity + 1 })
                )
              }
              className="px-2 py-1"
            >
              <IoAddOutline size={18} />
            </button>
          </div>
        </div>
      </td>
      <td className="px-6 py-3">${totalPrice.toFixed(2)}</td>
    </tr>
  );
};
