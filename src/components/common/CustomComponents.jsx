import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomeLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 cursor-pointer list-none";
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-green`
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};

const Badges = ({ color, children }) => {
  return (
    <div
      className={`w-[18px] h-[18px] rounded-full text-[12px] flex justify-center items-center ${color}`}
    >
      {children}
    </div>
  );
};

export { CustomeLink, Badges };

CustomeLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Badges.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};
