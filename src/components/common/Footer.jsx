import { useState } from "react";
import LogoImg from "../../assets/common/logo.png";
import { BodyOne, Caption, CustomeLink, Title } from "./CustomComponents";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    setSubscribeStatus("Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setSubscribeStatus(""), 3000);
  };

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaPinterestP />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
  ];

  const storeLinks = [
    { text: "New Products", url: "#" },
    { text: "Best Sellers", url: "#" },
    { text: "Special Offers", url: "#" },
    { text: "Categories", url: "#" },
    { text: "Brands", url: "#" },
  ];

  const supportLinks = [
    { text: "Help & FAQs", url: "#" },
    { text: "Shipping Policy", url: "#" },
    { text: "Return Policy", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ];

  const accountLinks = [
    { text: "My Account", url: "#" },
    { text: "My Orders", url: "#" },
    { text: "Wishlist", url: "#" },
    { text: "Track Order", url: "#" },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <img src={LogoImg} alt="LogoImg" className="h-12" />
            <div className="space-y-3">
              <Caption>Address: 123 Example St, New York, NY</Caption>
              <Caption>Email: contact@example.com</Caption>
              <Caption>Phone: (555) 123-4567</Caption>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary-green hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Title level={5}>Store</Title>
            <div className="flex flex-col gap-3">
              {storeLinks.map((link, index) => (
                <CustomeLink
                  key={index}
                  className="hover:text-primary-green transition-colors"
                >
                  {link.text}
                </CustomeLink>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Title level={5}>Support</Title>
            <div className="flex flex-col gap-3">
              {supportLinks.map((link, index) => (
                <CustomeLink
                  key={index}
                  className="hover:text-primary-green transition-colors"
                >
                  {link.text}
                </CustomeLink>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Title level={5}>My Account</Title>
            <div className="flex flex-col gap-3">
              {accountLinks.map((link, index) => (
                <CustomeLink
                  key={index}
                  className="hover:text-primary-green transition-colors"
                >
                  {link.text}
                </CustomeLink>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <BodyOne>Subscribe to Our Newsletter</BodyOne>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 pr-36 border bg-white border-gray-300 rounded-full outline-none focus:border-primary-green transition-colors"
                placeholder="Your email address"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-primary-green text-white rounded-full hover:bg-primary-green/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            {subscribeStatus && (
              <p className="text-primary-green text-sm">{subscribeStatus}</p>
            )}
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t">
          <Caption>
            © {new Date().getFullYear()} Wooden Store. All rights reserved.
          </Caption>
        </div>
      </div>
    </footer>
  );
};
