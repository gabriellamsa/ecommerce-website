import { FiBox } from "react-icons/fi";
import { IoIosColorFilter } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Caption, Title } from "../common/CustomComponents";

const filterDiscoverItems = [
  {
    id: 1,
    title: "Filter & Discover",
    icon: <IoIosColorFilter size={70} />,
    description:
      "Bacon ipsum dolor amet pariatur rump meatball prosciutto short ribs.",
  },
  {
    id: 2,
    title: "Add To Cart",
    icon: <IoBagRemoveOutline size={70} />,
    description:
      "Bacon ipsum dolor amet adipisicing irure fatback hamburger, dolor exercitation ribeye.",
  },
  {
    id: 3,
    title: "Fast Shipping",
    icon: <MdOutlineLocalShipping size={70} />,
    description:
      "Bacon ipsum dolor amet velit culpa ground round, corned beef boudin jerky in landjaeger.",
  },
  {
    id: 4,
    title: "Enjoy The Product",
    icon: <FiBox size={70} />,
    description:
      "Bacon ipsum dolor amet adipisicing et qui tempor bacon lorem pancetta dolore capicola fugiat tenderloin.",
  },
];

export const FilterDiscover = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-100">
        {filterDiscoverItems.map((post) => (
          <div
            key={post.id}
            className="flex items-center gap-8 p-8 py-12 relative"
          >
            <div className="icon">{post.icon}</div>{" "}
            <div>
              <Title>{post.title}</Title>
              <Caption>{post.description}</Caption>
              <Title level={1} className="absolute bottom-5 right-0 opacity-10">
                0{post.id}
              </Title>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
