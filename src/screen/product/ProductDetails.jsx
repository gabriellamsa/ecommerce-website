import { useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";
import {
  BodyOne,
  Caption,
  Title,
} from "../../components/common/CustomComponents";
import { RenderRatingStars } from "../../components/product/ProductCard";
import { useState } from "react";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";

const colorsValue = {
  red: "#fe7fef",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  white: "#f8f8f8",
  brown: "#a52a2a",
  clear: "#ffffff",
  "dark brown": "#654321",
  light: "#f5f5dc",
  black: "#000000",
  natural: "#8b4513",
  "light brown": "#deb887",
  dark: "#696969",
  gray: "#808080",
  beige: "#f5f5dc",
};

export const ProductDetail = () => {
  const { productId } = useParams();
  const product = productlists.find(
    (product) => product.id === parseInt(productId)
  );
  const { title, images, price, description, discount, rating, color } =
    product;
  const [selectedColor, setSelectedColor] = useState(color[0].value);
  const [selectedPrice, setSelectedPrice] = useState(
    price.find((price) => price.color === color[0].value)
  );
  const handleColorClick = (color) => {
    const newSelectedPrice = price.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <section className="container mt-32 slideproduct">
        <div
          className="flex justify-between flex-col lg:flex-row"
          key={productId}
        >
          <div className="images lg:w-1/2">
            {images.slice(0, 1).map((image, index) => (
              <img
                src={image.image}
                key={index}
                className="w-full h-full"
                alt=""
              />
            ))}
          </div>

          <div className="details lg:w-1/2 px-16 pt-16">
            <button className="feature-btn bg-indigo-500 mb-2">
              SALE {discount}% OFF
            </button>
            <Title level={2} className="my-2">
              {title}
            </Title>
            <div className="flex items-center gap-2 -mt-5 mb-5">
              <div className="flex items-center gap-1">
                {RenderRatingStars(rating)}
              </div>
              <p>{product.rating} Reviews</p>
            </div>
            <p className="text-[15px]">{description}</p>
            <br />
            <div>
              <Caption>Colors</Caption>
              <div className="flex items-center gap-3 mt-5">
                {color.map((colorOption, index) => (
                  <div
                    key={index}
                    onClick={() => handleColorClick(colorOption.value)}
                    className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border-gray-300 ${
                      selectedColor === colorOption.value ? "selected" : ""
                    }`}
                    style={{ backgroundColor: colorsValue[colorOption.value] }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <Caption>Price</Caption>
              <div className="flex items-cnter gap-3">
                <BodyOne className=" line-through mt-4">
                  ${selectedPrice.value}
                </BodyOne>
                <Title level={3} className="text-primary-green mt-2">
                  ${" "}
                  {(
                    selectedPrice.value -
                    (selectedPrice.value * product.discount) / 100
                  ).toFixed(2)}
                </Title>
              </div>
            </div>
            <br />
            <div className="flex items-center gap-3">
              <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                <BiPlus size={20} />
              </button>
              <input
                type="text"
                value="1"
                className="w-12 h-12 text-primary outline-none border border-gray-300 px-6"
              />
              <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                <BiMinus size={20} />
              </button>
              <button className="primary-btn">ADD TO CART</button>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <button className="flex items-center gap-2 secondary-btn">
                <BiHeart size={20} />
                Add to Wishlist
              </button>
            </div>
            <hr className="my-5" />
            <label htmlFor="">
              <span className="text-primary font-bold">Category: </span>Stylish
              Wooden
            </label>
            <br />
            <label htmlFor="">
              <span className="text-primary font-bold">REF: </span>
              WOOD-1234567890
            </label>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row my-10">
          <div className="lg:w-1/2">
            <Title level={3}>Timeless Elegance in Wood</Title>
            <Caption>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligna
              exquisita artis natura inspirata formant elegantiam et
              rusticitatem in unum. Texturae naturales et fibras ligneas
              conferunt calorem et sofisticationem, dum durabilitas et
              versatilitas faciunt ex ligno materiam aeternam.
            </Caption>
            <Title level={3} className="mt-5">
              Specifications
            </Title>
            <div className="flex flex-col gap-3 mt-2">
              <Caption>Material: Premium natural wood, smooth texture</Caption>
              <Caption>Size: Various dimensions, adjustable thickness</Caption>
              <Caption>Features: Durable, minimalist, eco-friendly</Caption>
              <Caption>Uses: Furniture, decor, flooring, crafts</Caption>
              <Caption>Finish: Matte/gloss varnish, water-resistant</Caption>
              <Caption>
                Care: Wipe dry, avoid moisture, oil for longevity
              </Caption>
              <Caption>Clean. Simple. Timeless.</Caption>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
