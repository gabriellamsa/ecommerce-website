import LogoImg from "../../assets/common/logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="py-14">
        <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={LogoImg} alt="LogoImg" className="h-12" />
          </div>
        </div>
      </footer>
    </>
  );
};
