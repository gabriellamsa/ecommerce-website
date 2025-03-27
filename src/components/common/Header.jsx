import { useEffect, useState, useRef } from "react";
import LogoImg from "../../assets/common/logo.png";
import { menulists } from "../../assets/data/data";
import { CustomeNavLink, CustomeLink } from "./CustomComponents";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { ModelCart } from "../cart/ModelCart";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const location = useLocation(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/";
  return (
    <>
      <header
        className={`header px-12 py-3 bg-white-100 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        } ${isHomePage && isScrolled ? "scrolled" : ""}`}
      >
        {isHomePage && (
          <div
            className={`${
              isScrolled ? "lg:bg-none" : "lg:bg-black"
            } lg:h-full lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10 transition-all duration-300`}
          ></div>
        )}
        <nav className="p-2 flex justify-between items-center relative">
          {/* logo and menu */}
          <div className="flex items-center gap-14">
            <img
              src={LogoImg}
              alt="Logo"
              className="h-7 hover:opacity-80 transition-opacity"
            />
            <div className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <CustomeNavLink href={list.path}>{list.link}</CustomeNavLink>
                </li>
              ))}
            </div>
          </div>

          {/* login and register buttons */}
          <div className="flex items-center gap-8 ml-auto">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <CustomeLink
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                } hover:text-primary-green transition-colors`}
              >
                Sign In
              </CustomeLink>
              <span
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                } mx-2`}
              >
                /
              </span>
              <CustomeLink
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                } hover:text-primary-green transition-colors`}
              >
                Sign Up
              </CustomeLink>
            </div>

            {/* icons */}
            <div
              className={`icon flex items-center justify-center gap-6 ${
                isScrolled || !isHomePage ? "text-primary" : "text-white"
              }`}
            >
              <div ref={searchRef} className="relative">
                <button
                  onClick={toggleSearch}
                  className="hover:text-primary-green transition-colors p-2"
                  aria-label="Search"
                >
                  <IoSearchOutline size={23} />
                </button>

                {isSearchOpen && (
                  <form
                    onSubmit={handleSearch}
                    className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="p-3 w-64 outline-none border-b"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-green transition-colors"
                      aria-label="Submit search"
                    >
                      <IoSearchOutline size={20} />
                    </button>
                  </form>
                )}
              </div>

              <button
                className="hover:text-primary-green transition-colors p-2"
                aria-label="Wishlist"
              >
                <AiOutlineHeart size={23} />
              </button>

              <ModelCart />

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>
          </div>

          {/* responsive menu */}
          <div
            ref={menuRef}
            className={`menu-container ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } lg:hidden fixed right-0 top-[72px] h-screen w-64 bg-white shadow-xl transition-all duration-300 ease-in-out p-6`}
          >
            <div className="flex flex-col gap-6">
              {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <CustomeNavLink
                    href={list.path}
                    className="text-primary hover:text-primary-green transition-colors"
                  >
                    {list.link}
                  </CustomeNavLink>
                </li>
              ))}
              <div className="pt-4 border-t">
                <CustomeLink className="text-primary hover:text-primary-green transition-colors block mb-4">
                  Sign In
                </CustomeLink>
                <CustomeLink className="text-primary hover:text-primary-green transition-colors block">
                  Sign Up
                </CustomeLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
