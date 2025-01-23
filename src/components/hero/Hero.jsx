import { useState } from "react";
import PropTypes from "prop-types";
import { herolist } from "../../assets/data/data";
import { BodyOne, Caption, Title } from "../common/CustomComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-20"
      onClick={onClick}
    >
      <MdKeyboardArrowRight
        size={40}
        className="text-black sm:text-gray-700 hover:text-gray-500"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-20"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft
        size={40}
        className="text-black sm:text-gray-700 hover:text-gray-500"
      />
    </div>
  );
}

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <section className="h-auto sm:h-[75vh] mt-[64px] bg-white relative z-10">
        <Slider {...settings}>
          {herolist.map((item) => (
            <HeroItem
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              color={item.color}
              image={item.image}
            />
          ))}
        </Slider>
      </section>
      <Banner className="mt-16 sm:mt-20 lg:mt-24" />
    </div>
  );
};

export const HeroItem = ({ title, description, price, color, image }) => {
  const [selectedColor, setSelectedColor] = useState(color[0].value);
  const [selectedPrice, setSelectedPrice] = useState(
    price.find((p) => p.color === color[0].value)
  );

  const handleColorClick = (newColor) => {
    const newSelectedPrice = price.find((p) => p.color === newColor);
    setSelectedColor(newColor);
    setSelectedPrice(newSelectedPrice);
  };

  return (
    <section className="lg:bg-white-100 content flex flex-col lg:flex-row justify-between items-center lg:px-16 px-6 sm:px-4 h-auto lg:h-full relative z-20">
      <div className="left w-full lg:w-1/2 p-6 sm:p-4">
        <Title
          level={1}
          className="leading-none font-medium text-2xl sm:text-xl md:text-3xl lg:text-6xl lg:leading-tight mb-4"
        >
          {title}
        </Title>
        <BodyOne className="text-sm sm:text-xs lg:text-base">
          {description}
        </BodyOne>
        <div className="flex flex-wrap items-start gap-4 lg:gap-8 my-5">
          <div>
            <Caption className="text-sm sm:text-xs">Price</Caption>
            <div className="mt-3">
              <Title level={5} className="text-base sm:text-sm lg:text-lg">
                ${selectedPrice?.value.toFixed(2)}
              </Title>
            </div>
          </div>
          <div>
            <Caption className="text-sm sm:text-xs">Color</Caption>
            <div className="flex gap-2 mt-3">
              {color.map((c) => (
                <div
                  key={c.value}
                  onClick={() => handleColorClick(c.value)}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                    selectedColor === c.value
                      ? "border-primary-green"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c.value }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 lg:gap-8">
          <button className="primary-btn uppercase text-sm sm:text-xs">
            View Details
          </button>
          <button className="secondary-btn uppercase text-sm sm:text-xs">
            View Shop
          </button>
        </div>
      </div>

      <div className="right w-full lg:w-1/2 flex justify-center items-center bg-white p-5">
        <img
          src={image}
          alt={title}
          className="h-[50vh] sm:h-[40vh] lg:h-[80vh] w-auto object-contain"
        />
      </div>
      <div className="lg:bg-black lg:h-full lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"></div>
    </section>
  );
};

const Banner = ({ className = "" }) => {
  return (
    <div
      className={`py-20 container flex flex-col lg:flex-row items-center gap-5 ${className}`}
    >
      <div>
        <BannerCard
          title="Wooden Water Bottles"
          desc="UP TO 60% OFF"
          cover="./images/hero/product1-1.png"
        />
      </div>
      <div className="flex justify-between flex-col gap-8">
        <BannerCard
          title="Sale Offer"
          desc="Grab it fast"
          cover="./images/hero/product1-2.png"
          className={true}
        />
        <BannerCard
          title="Trending"
          desc="Explore now"
          cover="./images/hero/product1-3.png"
          className={true}
        />
      </div>
    </div>
  );
};

const BannerCard = ({ title, desc, cover }) => {
  return (
    <div className="relative w-full h-full">
      <img src={cover} alt={title} className="w-full h-auto" />
      <div className="absolute bottom-0 p-8 bg-opacity-75 text-white w-full">
        <Title level={2}>{title}</Title>
        <BodyOne>{desc}</BodyOne>
        <div className="w1-1/2 mt-5">
          <button className="secondary-btn flex justify-end">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

HeroItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  color: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
};
