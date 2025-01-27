import { FaShippingFast } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";

const additionalInfo = [
  {
    id: 1,
    title: "FREE SHIPPING",
    description: "Enjoy Free Shipping on All Orders.",
    icon: <FaShippingFast size={50} />,
  },
  {
    id: 2,
    title: "24/7 SUPPORT",
    description: "Our Team is Available 24/7 to help with any question.",
    icon: <MdOutlineMarkUnreadChatAlt size={50} />,
  },
  {
    id: 3,
    title: "MONEY BACK",
    description: "We offer a 100% money-back guarantee.",
    icon: <FaCircleDollarToSlot size={50} />,
  },
];

export const ShippingInfo = () => {
  return (
    <>
      <section className="container">
        <div className="py-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {additionalInfo.map((info) => (
            <div
              key={info.id}
              className="flex items-center justify-center flex-col text-center gap-3"
            >
              <div className="text-primary-green">{info.icon}</div>
              <h3 className="text-xl font-bold mt-4">{info.title}</h3>
              <p className="mt-2">{info.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
