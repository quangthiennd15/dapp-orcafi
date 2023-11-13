import { logo } from "../../assets/images";
import { moon, bell, arrow, token } from "../../assets/icons";
function Header() {
  return (
    <>
      <div className="2xl:mx-80 mx-40 h-[72px] bg-zinc-900 rounded-[20px]  mt-4 inline-flex py-4 px-3  justify-between ">
        <div className=" inline-flex pt-1">
          <div className="w-[150px] h-[32px] ">
            <img src={logo} alt="" />
          </div>
          <div className=" h-4 justify-start items-start gap-6 inline-flex pt-2 ml-10">
            <div className="opacity-80 text-white text-base font-medium font-['Helvetica Now Display'] leading-none ">
              Yeild Farming
            </div>

            <div className="opacity-80 text-white text-base font-medium font-['Helvetica Now Display'] leading-none">
              Dashboard
            </div>

            <div className="opacity-80 text-white text-base font-medium font-['Helvetica Now Display'] leading-none">
              Staking
            </div>
          </div>
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
          <div className=" pl-1 pr-3 justify-center items-center gap-2.5 inline-flex  bg-neutral-800 rounded-xl h-10 ">
            <div className="w-[34.43px] h-[32.76px] px-[7px] py-[9px] bg-zinc-500 rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="w-[20.43px] h-[14.76px] relative">
                <img src={token} alt="" />
              </div>
            </div>
            {/* <div className="w-15 h-15 relative">
              <img src={token} alt="" />
            </div> */}
            <p className="text-zinc-400 text-sm font-bold font-['Helvetica Now Display'] leading-none">
              01234567...8
            </p>
            <div className="w-15 h-15 relative">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
