import { logo } from "../../assets/images";
import { moon, bell } from "../../assets/icons";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import WalletModal from "./WalletModal";

const menuList = [
  {
    name: "Yeild Farming",
    link: "/",
  },
  {
    name: "Dashboard",
    link: "/Dashboard",
  },
  {
    name: "Staking",
    link: "/Staking",
  },
];

const Header: React.FC = () => {
  const location = useLocation();

  const renderMenuLists = useMemo(() => {
    return (
      <>
        <ul className="h-4 items-center gap-2 inline-flex  ml-10 pt-2">
          {menuList.map((item, index) => (
            <li
              aria-selected={location.pathname === item.link}
              key={index}
              className="hover:bg-white/10 aria-selected:bg-white/10 bg-[#010707] rounded-[20px] py-3"
            >
              <Link
                to={item.link}
                className=" opacity-80 text-white text-base font-medium font-['Helvetica Now Display'] leading-none px-12 "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        ;
      </>
    );
  }, [location.pathname]);

  return (
    <>
      <div className="bg-[#010707] ">
        <div className=" flex items-center bg-zinc-900 rounded-[20px] justify-between p-4 mt-4 mx-auto max-w-[1280px]">
          <div className=" inline-flex pt-1">
            <div className="w-[150px] h-[32px] ">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            {renderMenuLists}
          </div>

          <div className=" inline-flex gap-2 ">
            <div className="w-10 h-10 p-3 bg-neutral-800 rounded-xl ">
              <div className="w-4 h-4 relative">
                <img src={bell} alt="" />
              </div>
            </div>
            <div className="w-10 h-10 p-3 bg-neutral-800 rounded-xl">
              <div className="w-4 h-4 relative">
                <img src={moon} alt="" />
              </div>
            </div>
            {/* <div className=" pl-1 pr-3 justify-center items-center gap-2.5 inline-flex  bg-neutral-800 rounded-xl h-10 ">
              <div className="w-[34.43px] h-[32.76px] px-[7px] py-[9px] bg-zinc-500 rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-[20.43px] h-[14.76px] relative">
                  <img src={token} alt="" />
                </div>
              </div>

              <p className="text-zinc-400 text-sm font-bold font-['Helvetica Now Display'] leading-none">
                01234567...8
              </p>
              <div className="w-15 h-15 relative">
                <img src={arrow} alt="" />
              </div>
            </div> */}
            <button className=" pl-1 pr-3 justify-center items-center gap-2.5 inline-flex  bg-neutral-800 rounded-xl h-10 ">
              <WalletModal />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
