import { IoCartOutline, IoHeartOutline, IoTrashOutline } from "react-icons/io5";
import { Badges, Title } from "../common/CustomComponents";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTotalPrice,
  selectTotalQuantity,
  CartActions,
  clearCart,
} from "../../redux/slice/cartSlice";
import {
  selectTotalFavorites,
  favoriteActions,
} from "../../redux/slice/favoriteSlice";
import { NavLink } from "react-router-dom";
import { CheckoutForm } from "./CheckoutForm";

export const ModelCart = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectTotalQuantity);
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalFavorites = useSelector(selectTotalFavorites);
  const favoriteItems = useSelector(
    (state) => state.favorites.favoritesItemList
  );
  const totalPrice = useSelector(selectTotalPrice);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");

  const openModel = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden";
  };

  const closeModel = () => {
    setIsClosing(true);
    document.body.style.overflowX = "auto";

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePaymentSuccess = () => {
    console.log("==============================");
    console.log("Payment Success");
    console.log("==============================");
    dispatch(clearCart());
  };

  return (
    <>
      <button className="relative z-20" onClick={openModel}>
        <IoHeartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">{totalFavorites}</Badges>
        </div>
      </button>

      <button className="relative z-20" onClick={openModel}>
        <IoCartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">{totalQuantity}</Badges>
        </div>
      </button>

      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closeModel}></div>

          <div
            className={`cartmodel p-16 text-primary ${
              isClosing ? "closing" : "open"
            }`}
          >
            <div className="flex justify-between gap-5">
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "cart" ? "text-primary" : ""
                }`}
                onClick={() => handleTabChange("cart")}
              >
                Shopping Cart
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                  {totalQuantity}
                </span>
              </button>

              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "wishlist" ? "text-primary" : ""
                }`}
                onClick={() => handleTabChange("wishlist")}
              >
                Wishlist
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                  {totalFavorites}
                </span>
              </button>
            </div>
            <div className="line-container">
              <div
                className={`line ${activeTab === "cart" ? "active" : ""}`}
              ></div>
              <div
                className={`line ${activeTab === "wishlist" ? "active" : ""}`}
              ></div>
            </div>

            {activeTab === "cart" ? (
              <>
                {cartItems.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onRemove={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }
                    onChangeQuantity={(qty) =>
                      dispatch(
                        CartActions.updateQuantity({
                          id: item.id,
                          quantity: qty,
                        })
                      )
                    }
                  />
                ))}

                <div className="total flex items-center justify-between mt-10">
                  <Title level={6}>Subtotal:</Title>
                  <Title level={6}>${totalPrice.toFixed(2)}</Title>
                </div>
                <div className="checkout">
                  <CheckoutForm
                    total={totalPrice}
                    handlePaymentSuccess={handlePaymentSuccess}
                  />
                </div>
                <NavLink to="/cart">
                  <button className="primary-btn w-full">View Cart</button>
                </NavLink>
              </>
            ) : (
              <>
                {favoriteItems.map((item) => (
                  <FavoriteProduct
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    name={item.name}
                    price={item.price}
                    onRemove={() =>
                      dispatch(favoriteActions.removeFromFavorites(item.id))
                    }
                  />
                ))}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export const CartProduct = ({
  cover,
  name,
  price,
  quantity,
  onRemove,
  onChangeQuantity,
}) => {
  return (
    <div className="mt-5 border-b-2 border-gray-200 pb-5 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="images w-20 h-20">
          {cover && <img src={cover} alt={name} />}
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-primary-green">{name}</p>
          <p className="text-gray-500">Qty: {quantity}</p>
          <p className="font-medium">${price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <button onClick={onRemove} className="mb-1">
          <IoTrashOutline size={18} />
        </button>
        <select
          value={quantity}
          onChange={(e) => onChangeQuantity(Number(e.target.value))}
          className="border rounded px-3 py-1 text-center"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export const FavoriteProduct = ({ cover, name, price, onRemove }) => {
  return (
    <div className="mt-5 border-b-2 border-gray-200 pb-5 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="images w-20 h-20">
          {cover && <img src={cover} alt={name} />}
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-primary-green">{name}</p>
          <p className="font-medium">${price.toFixed(2)}</p>
        </div>
      </div>

      <button onClick={onRemove}>
        <IoTrashOutline size={18} />
      </button>
    </div>
  );
};
