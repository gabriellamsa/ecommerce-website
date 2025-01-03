import { Header } from "./Header";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh " }}>{children}</main>
      <h2>Footer</h2>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
