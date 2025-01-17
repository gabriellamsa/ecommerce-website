import { useEffect, useState, useRef } from "react";
import LogoImg from "../../assets/common/logo.png";
import { menulists } from "../../assets/data/data";
import { CustomeNavLink, CustomeLink, Badges } from "./CustomComponents";
import {
  IoCartOutline,
  IoHeartOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
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
        className={`header px-12 py-3 bg-white-100 fixed top-0 left-0 w-full z-50 ${
          isHomePage && isScrolled ? "scrolled" : ""
        }`}
      >
        {isHomePage && (
          <div
            className={`${
              isScrolled ? "lg:bg-none" : "lg:bg-black"
            } lg:h-full lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}
          ></div>
        )}
        <nav className="p-2 flex justify-between items-center relative">
          {/* logo and menu */}
          <div className="flex items-center gap-14">
            <img src={LogoImg} alt="Logo" className="h-7" />
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
                }`}
              >
                Login
              </CustomeLink>
              <span
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                /
              </span>
              <CustomeLink
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                Register
              </CustomeLink>
            </div>

            {/* icons */}
            <div
              className={`icon flex items-center justify-center gap-6 ${
                isScrolled || !isHomePage ? "text-primary" : "text-white"
              }`}
            >
              <IoSearchOutline size={23} />

              <div className="relative z-20">
                <IoHeartOutline size={23} />
                <div className="absolute -top-2 -right-1.5">
                  <Badges color="bg-primary-green">0</Badges>
                </div>
              </div>

              <div className="relative z-20">
                <IoCartOutline size={23} />
                <div className="absolute -top-2 -right-1.5">
                  <Badges color="bg-primary-green">0</Badges>
                </div>
              </div>

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none"
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
              isOpen ? "open" : "closed"
            } lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full`}
          >
            {menulists.map((list) => (
              <li key={list.id} className="uppercase list-none">
                <CustomeNavLink href={list.path} className="text-white">
                  {list.link}
                </CustomeNavLink>
              </li>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};
