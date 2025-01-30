import Slider from "react-slick";
import { BodyOne, Title } from "../common/CustomComponents";
import { productlists } from "../../assets/data/data";
import { ProductCard } from "./ProductCard";
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

export const ProductSlide = () => {
  return (
    <>
      <section className="py-20 bg-white slideproduct">
        <div className="container">
          <Title level={4}>New Trends</Title>
          <div className="flex items-center gap-3 uppercase">
            <BodyOne className="text-sm">DISCOVER THE NEWS TRENDS</BodyOne>
          </div>

          <ProductSlideCard />
        </div>
      </section>
    </>
  );
};

export const ProductSlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <Slider {...settings} className="gap-4">
        {" "}
        {/* Adicionando espaçamento entre os slides */}
        {productlists.map((product) => (
          <div key={product.id} className="px-2">
            {" "}
            {/* Pequeno espaçamento lateral */}
            <ProductCard
              id={product.id}
              title={product.title}
              description={product.description}
              images={product.images}
              price={product.price}
              discount={product.discount}
              rating={product.rating}
              featured={product.featured}
              category={product.category}
              color={product.color}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
