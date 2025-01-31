import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BodyOne, Title } from "../../components/common/CustomComponents";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";

export const RenderRatingStars = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} color="#ff8a00" />);
    } else if (hasHalfStar && i === fullStars + 1) {
      stars.push(<FaStarHalfAlt key="half-star" color="#ff8a00" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ff8a00" />);
    }
  }
  return stars;
};

export const ProductCard = ({
  id,
  title,
  description,
  images,
  price,
  discount,
  rating,
  featured,
  disableQuickView = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!disableQuickView) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="product card">
        <div className="images h-96 relative">
          {images.map((cover, index) => (
            <img
              key={index}
              src={cover?.image}
              alt={id}
              className="w-full h-full object-cover"
            />
          ))}
          <div className="flex justify-between w-full p-5 absolute top-0 left-0">
            {discount && <button className="discount-btn">{discount}%</button>}
            {featured && (
              <button className="feature-btn text-primary-green text-white">
                Featured
              </button>
            )}
          </div>
          <div className="overlay flex items-center gap-2 justify-center absolute bottom-0 left-0 right-0 m-5">
            <button
              onClick={openModal}
              className={`quick-view-btn product-btn primary-btn ${
                disableQuickView ? "" : ""
              }`}
              disabled={disableQuickView}
            >
              Quick View
            </button>
            <button className="add-to-card-btn product-btn primary-btn">
              <IoCart size={23} />
            </button>
            <button className="love-btn product-btn primary-btn">
              <IoMdHeart size={23} />
            </button>
          </div>
        </div>
        <div className="details flex items-center flex-col bg-white pt-6">
          <NavLink to={`/product-details/${id}`}>
            <BodyOne>{title}</BodyOne>
          </NavLink>
          <div className="flex items-center gap-2 -mt-2 mb-2">
            {RenderRatingStars(rating)}
          </div>
          <div className="flex items-center gap-3">
            {price.slice(0, 1).map((priceItem, index) => (
              <div key={index} className="flex gap-2 items-center">
                <BodyOne className="line-through">${priceItem.value}</BodyOne>
                <BodyOne className="text-primary-green">
                  $
                  {(
                    priceItem.value -
                    (priceItem.value * discount) / 100
                  ).toFixed(2)}
                </BodyOne>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-xl"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                {images.slice(0, 1).map((cover, index) => (
                  <img
                    key={index}
                    src={cover?.image}
                    alt={id}
                    className="w-full h-full object-cover rounded"
                  />
                ))}
              </div>
              <div className="modal-details w-1/2 h-[500px] overflow-scroll p-9">
                <button className="feature-btn bg-indigo-500 mb-2">
                  SALE {discount}% OFF
                </button>
                <Title level={2}>{title}</Title>
                <div className="flex items-center gap-1 mt-4">
                  {RenderRatingStars(rating)}
                </div>
                {price.slice(0, 1).map((priceItem, index) => (
                  <div key={index} className="mt-4 flex items-center gap-2">
                    <BodyOne className="line-through relative flex items-center">
                      ${priceItem.value}
                    </BodyOne>
                    <Title
                      level={3}
                      className="text-primary-green flex items-center"
                    >
                      $
                      {(
                        priceItem.value -
                        (priceItem.value * discount) / 100
                      ).toFixed(2)}
                    </Title>
                  </div>
                ))}
                <BodyOne className="text-sm leading-6 mt-3">
                  {description}
                </BodyOne>
                <div className="flex items-center gap-3 mt-4">
                  <input
                    type="text"
                    value="1"
                    className="w-12 h-12 text-primary outline-none border-2 border-primary px-4 text-center"
                  />
                  <button className="primary-btn">ADD TO CART</button>
                </div>
                <hr className="my-5" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-5">
                    <Title level={5} className="text-lg">
                      Category :
                      <span className="font-normal"> Wooden Product</span>
                    </Title>
                  </div>
                  <div className="flex items-center gap-5">
                    <Title level={5} className="text-lg">
                      Tag :<span className="font-normal"> Wooden</span>
                    </Title>
                  </div>
                  <div className="flex items-center gap-5">
                    <Title level={5} className="text-lg">
                      Share :
                    </Title>
                    <div className="flex items-center gap-3 justify-center">
                      <FaFacebook className="text-lg" />
                      <AiFillInstagram className="text-lg" />
                      <FaTwitter className="text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
