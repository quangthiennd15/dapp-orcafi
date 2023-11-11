import {
  arrow,
  Search,
  sort,
  btc,
  usdt,
  Bnb,
  exchange,
  // orca,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const VaultList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-40 my-8 ">
        <div className="justify-between inline-flex w-full gap-1">
          <div className="w-[450px] h-12 p-1 bg-zinc-900 rounded-2xl justify-center items-center gap-1 inline-flex">
            <div className="w-[150px] self-stretch px-5 py-2 bg-neutral-800 rounded-xl justify-center items-center gap-1 flex">
              <button
                className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none"
                onClick={() => navigate("/VaultDetails")}
              >
                All Vaults
              </button>
            </div>
            <div className="w-[200px] self-stretch px-5 py-2 justify-center items-center gap-2.5 flex">
              <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                Eligible Vaults
              </div>
            </div>
            <div className="w-[200px] self-stretch px-5 py-2 justify-center items-center gap-2.5 flex">
              <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                My Vaults
              </div>
            </div>
          </div>
          <div className="w-[500px] h-12 p-1 bg-zinc-900 rounded-2xl justify-center items-center gap-2 inline-flex">
            <div className="w-[95px] self-stretch px-5 py-2 justify-center items-center gap-2.5 flex">
              <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                Features
              </div>
            </div>
            <div className="w-[200px] self-stretch px-5 py-2 rounded-[200px] justify-center items-center gap-[11px] flex">
              <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                Stable coins
              </div>
            </div>
            <div className="w-[150px] self-stretch px-5 py-2 rounded-[32px] justify-center items-center gap-2.5 flex">
              <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                Blue Chip
              </div>
            </div>
            <div className="w-[107px] self-stretch px-5 py-2 rounded-[32px] justify-center items-center gap-2.5 flex">
              <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                Correlated
              </div>
            </div>
          </div>
          <div className="w-[109.28px] h-12 px-4 py-2 bg-neutral-800 rounded-2xl justify-center items-center gap-4 inline-flex">
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

          <div className="w-[338px] h-12 px-3.5 py-2.5 bg-zinc-900 rounded-2xl justify-end items-center gap-2.5 inline-flex">
            <div className="w-4 h-4 justify-center items-center flex">
              <div className="w-4 h-4 relative flex-col justify-start items-start flex">
                <img src={Search} alt="" />
              </div>
            </div>
            <div className="grow shrink basis-0 text-zinc-700 text-sm font-normal font-['Inter'] leading-tight">
              Search
            </div>
          </div>
        </div>

        <div className="w-full h-4 relative mt-8 mb-2">
          <div className="w-[84.38px] left-[20px] top-0 absolute justify-start items-center gap-1 inline-flex">
            <div className="opacity-90 text-zinc-700 text-xs font-medium font-['Helvetica Now Display'] leading-none">
              Asset Pairs
            </div>
            <div className="w-4 h-4 relative">
              <img src={sort} alt="" />
            </div>
          </div>
          <div className="w-[56.61px] left-[547px] top-0 absolute justify-start items-center gap-1 inline-flex">
            <img src={sort} alt="" />

            <div className="text-zinc-700 text-xs font-medium font-['Helvetica Now Display'] leading-none">
              Wallet
            </div>
          </div>
          <div className="w-[80.10px] left-[683.49px] top-0 absolute justify-start items-center gap-1 inline-flex">
            <img src={sort} alt="" />

            <div className="text-zinc-700 text-xs font-medium font-['Helvetica Now Display'] leading-none">
              Deposited
            </div>
          </div>
          <div className="left-[841px] top-0 absolute justify-start items-center gap-1 inline-flex">
            <img src={sort} alt="" />

            <div className="text-white text-xs font-medium font-['Helvetica Now Display'] leading-none">
              APY
            </div>
          </div>
          <div className="left-[993px] top-0 absolute justify-start items-center gap-1 inline-flex">
            <img src={sort} alt="" />

            <div className="text-white text-xs font-medium font-['Helvetica Now Display'] leading-none">
              TVL
            </div>
          </div>
        </div>

        <div className="w-full h-[88px] px-5 py-4 bg-zinc-900 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-full h-14 relative">
            <div className="w-10 h-14 p-2 left-0 top-0 absolute bg-neutral-800 rounded-2xl flex-col justify-start items-start inline-flex">
              <div className="w-6 h-6 relative">
                <img src={btc} alt="" />
              </div>
              <div className="w-6 h-6 relative rounded-[200px] border-2 border-neutral-800">
                <img src={usdt} alt="" />
              </div>
            </div>
            <div className="w-[225.86px] h-[52px] left-[54px] top-[2px] absolute flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-[108.55px] justify-start items-center gap-[5px] inline-flex">
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
                    <div className="w-6 h-6 left-[-4px] top-[-4px] absolute bg-yellow-500 rounded-full"></div>
                    <div className="w-[9.30px] h-[10.94px] left-[3.35px] top-[2.53px] absolute">
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
                  <div className="w-[10.86px] h-3 relative origin-top-left rotate-180">
                    {/* <img src={orca} alt="" /> */}
                  </div>
                  <div className="text-cyan-400 text-xs font-medium font-['Helvetica Now Display'] leading-none">
                    Orca Wave
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[12.06px] left-[525px] top-[16px] absolute text-slate-600 text-base font-medium font-['Helvetica Now Display'] leading-normal">
              0
            </div>
            <div className="w-[12.06px] left-[663px] top-[16px] absolute text-slate-600 text-base font-medium font-['Helvetica Now Display'] leading-normal">
              0
            </div>
            <div className="w-[50.44px] h-10 left-[821px] top-[8px] absolute">
              <div className="w-[50.44px] left-0 top-0 absolute text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                9.73 %
              </div>
              <div className="w-[35.09px] left-[-0px] top-[24px] absolute text-slate-600 text-xs font-medium font-['Helvetica Now Display'] line-through leading-none">
                8.21%
              </div>
            </div>
            <div className="w-[71.27px] left-[973px] top-[16px] absolute text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
              $ 711,058
            </div>
            <div className="w-20 h-10 px-4 py-2 left-[93%] top-[8px] absolute bg-neutral-800 rounded-xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
                Details
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VaultList;
