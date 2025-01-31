import { FilterDiscover } from "../../components/hero/FilterDiscover";
import {
  Banner,
  Hero,
  Product,
  ProductSlide,
  ShippingInfo,
} from "../../router";

export const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <ShippingInfo />
      <Banner />
      <ProductSlide />
      <FilterDiscover />
    </>
  );
};
