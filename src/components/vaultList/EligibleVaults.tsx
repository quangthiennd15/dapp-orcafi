import { btc, usdt, exchange, orca, Polygon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
const EligibleVaults = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full p-4 bg-zinc-900 rounded-2xl flex-col justify-start items-start gap-2 inline-flex my-4">
        <div className=" inline-flex justify-between items-center w-full">
          <div className=" inline-flex items-center">
            <div className="w-10 h-14 p-2  bg-neutral-800 rounded-2xl flex-col justify-start items-start inline-flex">
              <div className="w-6 h-4 relative">
                <img src={btc} alt="" />
              </div>
              <div className="w-6 h-10 relative rounded-[600px] border-0 border-neutral-800">
                <img src={usdt} alt="" />
              </div>
            </div>

            <div className=" pl-4 top-[2px] flex-col justify-start items-start gap-1 inline-flex">
              <div className="min-w-[108.55px] justify-start items-center gap-[5px] inline-flex ">
                <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
                  BTC
                </div>
                <div className="justify-start items-start gap-2.5 flex">
                  <div className="w-4 h-4 relative">
                    <img src={exchange} alt="" />
                  </div>
                </div>
                <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
                  USDT
                </div>
              </div>
              <div className="justify-start items-start gap-1 inline-flex">
                <div className="p-1 bg-neutral-800 rounded-[200px] justify-start items-center flex">
                  <div className="w-4 h-4 relative rounded-[200px]">
                    <div className="w-4 h-4  absolute bg-yellow-500 rounded-full"></div>
                    <div className="w-[16px] h-[16px]  absolute">
                      <img src={Polygon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-neutral-800 rounded-lg justify-start items-center flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-white text-xs font-medium font-['Helvetica Now Display'] leading-none">
                      Pearl
                    </div>
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-zinc-800 rounded-lg justify-start items-center gap-1.5 flex">
                  <div className="w-[12px] h-3 relative ">
                    <img src={orca} alt="" />
                  </div>
                  <div className="text-cyan-400 text-xs font-medium font-['Helvetica Now Display'] leading-none">
                    Orca Wave
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-[250px] pt-4  text-slate-600 text-base font-medium font-['Helvetica Now Display'] leading-normal">
              0
            </div>
            <div className="pl-36 pt-4  text-slate-600 text-base font-medium font-['Helvetica Now Display'] leading-normal">
              0
            </div>
            <div className="pl-24 pt-2">
              <div className=" text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                9.73%
              </div>
              <div className=" text-slate-600 text-xs font-medium font-['Helvetica Now Display'] line-through leading-none">
                8.21%
              </div>
            </div>

            <div className="pl-16  pt-2 text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
              $711,058
            </div>
          </div>
          <div className="w-20 h-10 px-4 py-2 top-[8px]  bg-neutral-800 rounded-xl justify-center items-center gap-2.5 inline-flex">
            <button
              className="text-center text-white text-base font-bold font-['Helvetica Now Display'] leading-normal"
              onClick={() => navigate("/VaultDetails")}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EligibleVaults;
