import PropTypes from "prop-types";

const CustomeLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px font-medium text-gray-600 cursor-pointer list-none";
  return (
    <a
      href=""
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-peimary-green`
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </a>
  );
};

export { CustomeLink };

CustomeLink.propTypes = {
  href: PropTypes.isRequired,
  className: PropTypes.isRequired,
  children: PropTypes.isRequired,
};
