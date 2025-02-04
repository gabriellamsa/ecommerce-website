import { useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";

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
            {images.map((image, index) => (
              <img
                src={image.image}
                key={index}
                className="w-full h-full"
                alt=""
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
