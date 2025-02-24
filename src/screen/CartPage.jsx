import { useSelector, useDispatch } from "react-redux";
import { selectTotalPrice } from "../redux/slice/cartSlice";
import BgImage from "../assets/common/Frame.png";
import { Title } from "../components/common/CustomComponents";

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
              <table className="w-full text-sm text-left  rtl:text-right">
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
          <div className="w-2/6 ml-16">
            <div className="bg-gray-100 p-5">
              <p className="text-lg font-medium text-primary">Cart</p>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Subtotal</p>{" "}
                <p className="text-sm font-normal">
                  Enter your adress to view shipping options.
                </p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Total</p>{" "}
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>

              <button className="primary-btn mt-5">Checkout</button>
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
}) => {
  return (
    <tr>
      <td className="px-16 py-5">
        <img src={cover} alt={name} className="w-16 h-16 object-cover" />
      </td>
      <td className="px-6 py-3">{name}</td>
      <td className="px-6 py-3">${price.toFixed(2)}</td>
      <td className="px-6 py-3">{quantity}</td>
      <td className="px-6 py-3">${totalPrice.toFixed(2)}</td>
    </tr>
  );
};
