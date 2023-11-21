import { btc, usdt, arrow, expand, ifo } from "../../../assets/icons";

const Withdraw = () => {
  return (
    <div className="">
      <div className="self-stretch h-[140px] flex-col justify-start items-start gap-3 flex">
        <div className="text-white text-base font-medium font-['Helvetica Now Display'] leading-tight">
          Select token
        </div>
        <div className="self-stretch p-2 bg-[#010707] rounded-2xl justify-start items-start inline-flex">
          <div className="px-4 py-3 bg-zinc-900 rounded-xl justify-start items-center gap-4 flex">
            <div className="w-10 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute">
                <img src={btc} alt="" />
              </div>
              <div className="w-8 h-6 left-[16px] top-0 absolute ">
                <img src={usdt} alt="" />
              </div>
            </div>
            <div className="bg-zinc-900 rounded-lg justify-center items-center gap-2.5 flex">
              <div className="opacity-30 justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-12 px-4 py-3 rounded-xl justify-between items-center flex">
            <div className="text-white text-lg font-medium font-['Helvetica Now Display'] capitalize leading-normal">
              0.00
            </div>
            <div className="px-2 bg-white bg-opacity-5 rounded-lg justify-end items-center gap-2 flex">
              <div className="opacity-50 text-white text-base font-medium font-['Helvetica Now Display'] capitalize leading-normal">
                Max
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="px-3 py-1 bg-white bg-opacity-5 rounded-lg justify-start items-center gap-2 flex">
            <div className="text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
              Buy token
            </div>
            <div className="w-4 h-4 justify-center items-center flex">
              <div className="w-4 h-4 relative">
                <img src={expand} alt="" />
              </div>
            </div>
          </div>
          <div className="px-3 py-1 bg-white bg-opacity-5 rounded-lg justify-start items-center gap-2 flex">
            <div className="text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
              Add liquidity
            </div>
            <div className="w-4 h-4 justify-center items-center flex">
              <div className="w-4 h-4 relative">
                <img src={expand} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full self-stretch px-6 py-3 bg-red-500 rounded-xl justify-center items-center gap-2.5 inline-flex">
        <div className=" text-center text-white text-base font-bold font-['Helvetica Now Display'] leading-normal tracking-wide">
          Withdraw
        </div>
      </div>
      <div className="self-stretch h-[130px] p-1 rounded-2xl  flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch justify-between items-center inline-flex py-2">
          <div className="h-5 justify-start items-center gap-2 flex">
            <div className="text-white text-opacity-50 text-sm font-normal font-['Helvetica Now Display'] leading-tight">
              Deposit fee
            </div>
            <div className=" relative">
              <img src={ifo} alt="" />
            </div>
          </div>
          <div className="text-right text-white text-sm font-bold font-['Helvetica Now Display'] leading-tight">
            0.00%
          </div>
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="text-white text-opacity-50 text-sm font-normal font-['Helvetica Now Display'] leading-tight">
              Withdrawal fee
            </div>
            <div className="w-3 h-3 relative">
              <div className=" relative">
                <img src={ifo} alt="" />
              </div>
            </div>
          </div>
          <div className="text-right text-white text-sm font-bold font-['Helvetica Now Display'] leading-tight">
            0.00%
          </div>
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="grow shrink basis-0 text-white text-opacity-50 text-sm font-normal font-['Helvetica Now Display']">
            The displayed APY accounts for performance fee that is deducted from
            the generated yield only.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Withdraw;
