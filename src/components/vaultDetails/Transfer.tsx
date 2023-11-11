import { btc, usdt, arrow } from "../../assets/icons";

function Transfer() {
  return (
    <div className="my-8 p-6 bg-zinc-900 rounded-[20px] flex-col justify-start items-center gap-6 inline-flex">
      <div className="self-stretch p-2 bg-neutral-900 rounded-2xl justify-start items-start gap-3 inline-flex">
        <div className="grow shrink basis-0 h-[46px] p-2 bg-zinc-800 rounded-xl border-b-2 justify-center items-center flex">
          <div className="text-white text-xl font-bold font-['Helvetica Now Display'] leading-[30px]">
            Deposit
          </div>
        </div>
        <div className="grow shrink basis-0 h-[46px] py-2 rounded-xl border-b-2 justify-center items-center flex">
          <div className="opacity-40 text-white text-xl font-bold font-['Helvetica Now Display'] leading-[30px]">
            Withdraw
          </div>
        </div>
      </div>
      <div className="self-stretch h-[140px] flex-col justify-start items-start gap-3 flex">
        <div className="text-white text-base font-medium font-['Helvetica Now Display'] leading-tight">
          Select token
        </div>
        <div className="self-stretch p-2 bg-neutral-900 rounded-2xl justify-start items-start inline-flex">
          <div className="px-4 py-3 bg-zinc-900 rounded-xl justify-start items-center gap-4 flex">
            <div className="w-10 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute">
                <img src={btc} alt="" />
              </div>
              <div className="w-6 h-6 left-[16px] top-0 absolute rounded-[200px] border-2 border-neutral-800">
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
              <div className="w-4 h-4 relative"></div>
            </div>
          </div>
          <div className="px-3 py-1 bg-white bg-opacity-5 rounded-lg justify-start items-center gap-2 flex">
            <div className="text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
              Add liquidity
            </div>
            <div className="w-4 h-4 justify-center items-center flex">
              <div className="w-4 h-4 relative"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-6 py-3 bg-red-500 rounded-xl justify-center items-center gap-2.5 inline-flex">
        <div className=" text-center text-white text-base font-bold font-['Helvetica Now Display'] leading-normal tracking-wide">
          Deposit
        </div>
      </div>
      <div className="self-stretch h-[130px] p-1 rounded-2xl border flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch justify-between items-center inline-flex py-2">
          <div className="h-5 justify-start items-center gap-2 flex">
            <div className="text-white text-opacity-50 text-sm font-normal font-['Helvetica Now Display'] leading-tight">
              Deposit fee
            </div>
            <div className=" relative">
              <div className="w-2.5 h-2.5 left-[11px]  absolute origin-top-left rotate-180 rounded-full border border-white border-opacity-50"></div>
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
              <div className="w-2.5 h-2.5 left-[11px] top-[1px] absolute origin-top-left rotate-180 rounded-full border border-white border-opacity-50"></div>
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
}

export default Transfer;
