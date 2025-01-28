import { BodyOne, Title } from "../common/CustomComponents";

export const ProductSlide = () => {
  return (
    <>
      <section className="py-20 bg-white slideproduct">
        <div className="container">
          <Title level={4}>New Trends</Title>
          <div className="flex items-center gap-3 uppercase">
            <BodyOne className="text-sm">DISCOVER THE NEWS TRENDS</BodyOne>
          </div>
        </div>
      </section>
    </>
  );
};
