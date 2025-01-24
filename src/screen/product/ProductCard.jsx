export const ProductCard = ({
  id,
  key,
  title,
  description,
  images,
  price,
  discount,
  rating,
  featured,
  category,
  color,
}) => {
  return (
    <>
      <div className="product card">
        <div className="images h-96">
          {images.map((image, index) => (
            <img key={index} src={image?.image} alt={title} />
          ))}
        </div>
      </div>
    </>
  );
};
