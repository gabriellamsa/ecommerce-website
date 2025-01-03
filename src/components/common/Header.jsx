import LogoImg from "../../assets/common/logo.png";
import { menulists } from "../../assets/data/data";

export const Header = () => {
  return (
    <>
      <header className="header px-12 py-3 bg-white-100 relative z-20">
        <nav className="p-2 justify-between items-center relative">
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
        </nav>
      </header>
    </>
  );
};
