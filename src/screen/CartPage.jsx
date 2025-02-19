import { useSelector, useDispatch } from "react-redux";
import { selectTotalPrice } from "../redux/slice/cartSlice";
import BgImage from "../assets/common/Frame.png";

export const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  return (
    <>
      <section className="mt-16">
        <div className="h-[50vh]">
          <div className="images absolute top-0 left-0 w-full h-1/2">
            <img src={BgImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
