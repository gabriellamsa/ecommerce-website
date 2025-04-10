import { useState } from "react";
import PropTypes from "prop-types";
import { herolist } from "../../assets/data/data";
import { BodyOne, Caption, Title } from "../common/CustomComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-gray-100">
        <MdKeyboardArrowRight size={24} className="text-gray-800" />
      </div>
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-gray-100">
        <MdKeyboardArrowLeft size={24} className="text-gray-800" />
      </div>
    </div>
  );
}

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      <section className="h-auto sm:h-[75vh] mt-[64px] bg-white relative z-0">
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
    <section className="lg:bg-white-100 content flex flex-col lg:flex-row justify-between items-center lg:px-16 px-6 sm:px-4 h-auto lg:h-full relative z-0">
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
            Shop Now
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
      <div className="lg:bg-black lg:h-[64px] lg:absolute lg:top-0 lg:right-0 lg:w-[33.33%] lg:-z-10"></div>
    </section>
  );
};

const Banner = ({ className = "" }) => {
  return (
    <div
      className={`py-20 mx-auto max-w-6xl px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-5 ${className}`}
    >
      <div>
        <BannerCard
          title="Wooden Water Bottles"
          desc="UP TO 60% OFF"
          cover="../../images/hero/product1-1.png"
        />
      </div>

      <div className="flex justify-between flex-col gap-8">
        <BannerCard
          title="Totally Bamboo"
          desc="UP TO 60% OFF"
          cover="../../images/hero/product1-2.png"
        />
        <BannerCard
          title="Jumbo Tote Bag"
          desc="UP TO 60% OFF"
          cover="../../images/hero/product1-3.png"
          alignRight={true}
        />
      </div>
    </div>
  );
};

const BannerCard = ({
  title,
  desc,
  cover,
  alignRight = false,
  buttonInline = false,
}) => {
  return (
    <div className="relative w-full h-full rounded-lg">
      <img src={cover} alt={title} className="w-full h-auto object-cover" />

      <div
        className={`absolute inset-0 flex flex-col ${
          alignRight
            ? "justify-end items-end text-right"
            : "justify-end items-start"
        } text-white p-6`}
      >
        <div
          className={`mb-4 ${buttonInline ? "flex items-center gap-4" : ""}`}
        >
          <Title level={2} className="text-lg font-semibold sm:text-xl">
            {title}
          </Title>
          <BodyOne className="text-sm sm:text-base">{desc}</BodyOne>
        </div>

        <button className="secondary-btn flex justify-end">Shop Now</button>
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
