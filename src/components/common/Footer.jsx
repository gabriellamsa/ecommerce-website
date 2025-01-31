import LogoImg from "../../assets/common/logo.png";
import { BodyOne, Caption, CustomeLink, Title } from "./CustomComponents";

export const Footer = () => {
  return (
    <>
      <footer className="py-14">
        <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={LogoImg} alt="LogoImg" className="h-12" />

            <div className="flex flex-col gap-2 mt-5">
              <Caption>Address : 123 Nowhere St, Imaginary City, ZZ</Caption>
              <Caption>Email : email@example.com</Caption>
              <Caption>Phone : +00 1234-5678</Caption>
            </div>
            <br />
            <BodyOne>Subscribe To Our Newsletter</BodyOne>
            <input
              type="text"
              className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none"
              placeholder="email@example.com"
            />
          </div>

          <div className="flex flex-col gap-6 ml-8">
            <Title level={5}>Store</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Exemple items</CustomeLink>
              <CustomeLink>Exemple items</CustomeLink>
              <CustomeLink>Exemple items</CustomeLink>
              <CustomeLink>Exemple items</CustomeLink>
              <CustomeLink>Exemple items</CustomeLink>
            </div>
          </div>
          <div className="flex flex-col gap-6 ml-8">
            <Title level={5}>Support</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Support items</CustomeLink>
              <CustomeLink>Support items</CustomeLink>
              <CustomeLink>Support items</CustomeLink>
              <CustomeLink>Support items</CustomeLink>
            </div>
          </div>
          <div className="flex flex-col gap-6 ml-8">
            <Title level={5}>My Account</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Profile</CustomeLink>
              <CustomeLink>Cart Items</CustomeLink>
              <CustomeLink>Contact</CustomeLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
