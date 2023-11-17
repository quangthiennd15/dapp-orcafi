import {
  arrow,
  Search,
  sort,
  btc,
  usdt,
  Bnb,
  exchange,
  orca,
  sortup,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const VaultList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" my-8 ">
        <div className=" inline-flex w-full">
          <div className="mr-[10px] p-1 bg-zinc-900 rounded-2xl justify-between items-center inline-flex">
            <div className="min-w-[130px] self-stretch py-4  bg-neutral-800 rounded-xl justify-center items-center flex">
              <div className=" text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                All Vaults
              </div>
            </div>
            <div className="min-w-[130px] self-stretch justify-center items-center flex">
              <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                Eligible Vaults
              </div>
            </div>
            <div className="min-w-[74px] pr-2 self-stretch  justify-center items-center  flex ">
              <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                My Vaults
              </div>
            </div>
          </div>

          <div className="mr-[10px] p-4 bg-zinc-900 rounded-2xl justify-center items-center inline-flex gap-4">
            <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Features
            </div>

            <div className="min-w-[80px] text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Stable coins
            </div>

            <div className="min-w-[70px] text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Blue Chip
            </div>

            <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Correlated
            </div>
          </div>
          <div className="mr-[10px] px-4 py-2 bg-neutral-800 rounded-2xl justify-center items-center gap-4 inline-flex">
            <div className="text-center text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
              Filters
            </div>
            <div className="bg-zinc-900 rounded-lg justify-center items-center gap-2.5 flex">
              <div className="opacity-30 justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative p-1">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 pl-4 py-2.5 bg-zinc-900 rounded-2xl justify-end items-center gap-2.5 inline-flex">
            <div className="w-4 h-4 justify-center items-center flex">
              <div className="w-4 h-4 relative flex-col justify-start items-start flex">
                <img src={Search} alt="" />
              </div>
            </div>
            <div className=" grow shrink basis-0 text-zinc-700 text-sm font-normal font-['Inter'] leading-tight">
              Search
            </div>
          </div>
        </div>

        <div className="inline-flex w-full pt-8 pb-2">
          <div className="inline-flex items-center gap-1">
            <div className="opacity-90 text-zinc-700 text-xs font-medium font-['Helvetica Now Display'] leading-none">
              Asset Pairs
            </div>

            <img src={sort} alt="" />
          </div>
          <div className="pl-[400px] items-center gap-1 inline-flex">
            <img src={sort} alt="" />

            <div className="text-zinc-700 text-xs font-medium font-['Helvetica Now Display'] leading-none">
              Wallet
            </div>
          </div>
          <div className="pl-20 justify-start items-center gap-1 inline-flex">
            <img src={sort} alt="" />

            <div className="text-zinc-700 text-xs font-medium font-['Helvetica Now Display'] leading-none">
              Deposited
            </div>
          </div>
          <div className="pl-16  justify-start items-center gap-1 inline-flex">
            <img src={sortup} alt="" />
            <div className="text-white text-xs font-medium font-['Helvetica Now Display'] leading-none">
              APY
            </div>
          </div>
          <div className="pl-20 justify-start items-center gap-1 inline-flex">
            <img src={sortup} alt="" />

            <div className="text-white text-xs font-medium font-['Helvetica Now Display'] leading-none">
              TVL
            </div>
          </div>
        </div>

        <div className="w-full p-4 bg-zinc-900 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
          <div className=" relative inline-flex justify-between items-center w-full">
            <div className="relative inline-flex items-center">
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
                        <img src={Bnb} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 bg-neutral-800 rounded-lg justify-start items-center flex">
                    <div className="justify-start items-center gap-1 flex">
                      <div className="text-white text-xs font-medium font-['Helvetica Now Display'] leading-none">
                        Pancake Swap
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

              <div className="pl-[200px] pt-4  text-slate-600 text-base font-medium font-['Helvetica Now Display'] leading-normal">
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
      </div>
    </>
  );
};
export default VaultList;
