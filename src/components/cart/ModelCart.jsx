import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Badges, Title } from "../common/CustomComponents";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectTotalPrice,
  selectTotalQuantity,
} from "../../redux/slice/cartSlice";

export const ModelCart = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const cartItems = useSelector((state) => state.cart.itemList);
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

  return (
    <>
      <button className="relative z-20" onClick={openModel}>
        <IoHeartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">0</Badges>
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
                  0
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
                  />
                ))}

                <div className="total flex items-center justify-between mt-10">
                  <Title level={6}>Subtotal:</Title>
                  <Title level={6}>{totalPrice.toFixed(2)}</Title>
                </div>
                <div className="checkout">
                  <button className="primary-btn w-full">View Cart</button>
                </div>
              </>
            ) : (
              <>product here</>
            )}
          </div>
        </>
      )}
    </>
  );
};

export const CartProduct = () => {
  return <div>ModelCart</div>;
};
