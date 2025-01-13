import { useState } from "react";
import PropTypes from "prop-types";
import { herolist } from "../../../assets/data/data";
import { BodyOne, Caption, Title } from "../CustomComponents";

export const Hero = () => {
  return (
    <div>
      <section className="h-[50vh] lg:h-[90vh] mt-20 bg-white-100 relative z-1">
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
      </section>
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
    <section className="content flex flex-col lg:flex-row justify-between items-center lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
      <div className="left w-full lg:w-1/2 p-8 lg:p-16">
        <Title
          level={1}
          className="leading-none font-medium text-3xl lg:text-6xl lg:leading-tight mb-6"
        >
          {title}
        </Title>
        <BodyOne>{description}</BodyOne>
        <div className="flex items-start gap-8 my-5">
          <div>
            <Caption>Price</Caption>
            <div className="mt-3">
              <Title level={5}>${selectedPrice?.value.toFixed(2)}</Title>
            </div>
          </div>
          <div>
            <Caption>Color</Caption>
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
        <div className="flex items-center gap-8">
          <button className="uppercase bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition">
            View Details
          </button>
        </div>
      </div>

      <div className="right w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="object-cover h-[300px] lg:h-[400px]"
        />
      </div>
    </section>
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
