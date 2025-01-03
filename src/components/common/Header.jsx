import LogoImg from "../../assets/common/logo.png";
import { menulists } from "../../assets/data/data";
import { CustomeLink, Badges } from "./CustomComponents";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <>
      <header className="header px-12 py-3 bg-white-100 relative z-20">
        <nav className="p-2 flex justify-between items-center relative">
          {/* logo and menu */}
          <div className="flex items-center gap-14">
            <div>
              <img src={LogoImg} alt="LogoImg" className="h-7" />
            </div>
            <div className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <a href={list.path}>{list.link}</a>
                </li>
              ))}
            </div>
          </div>

          {/* login and register buttom*/}
          <div className="flex items-center gap-8 ml-auto">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <CustomeLink href="/login">Login</CustomeLink>
              <span className="">/</span>
              <CustomeLink>Register</CustomeLink>
            </div>

            {/* icons */}
            <div className="icon flex items-center justify-center gap-6">
              <IoSearchOutline size={23} />

              <div className="relative z-20">
                <IoCartOutline size={23} />

                <div className="absolute -top-2 -right-1.5">
                  <Badges color="bg-primary-green">0</Badges>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
