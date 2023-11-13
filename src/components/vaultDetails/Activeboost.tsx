import { Question } from "../../assets/icons";

function Activeboost() {
  return (
    <div className=" px-6 py-5 bg-zinc-900 rounded-xl flex-col justify-start items-start gap-6 inline-flex w-[100%]">
      <div className="self-stretch justify-start items-center gap-3 inline-flex">
        <div>
          <span className="text-white text-2xl font-bold font-['Helvetica Now Display'] leading-loose">
            Active{" "}
          </span>
          <span className="text-red-500 text-2xl font-bold font-['Helvetica Now Display'] leading-loose">
            BOOST
          </span>
        </div>
        <div className="w-6 h-6 relative">
          <div className="left-[3px] top-[3px] absolute rounded-full  border-slate-300">
            <img src={Question} alt="" />
          </div>
          {/* <div className="w-px h-px  top-[17.50px] absolute bg-slate-300 rounded-full border border-slate-300"></div> */}
        </div>
      </div>
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        <div className="grow shrink basis-0 h-[78px] p-4 bg-neutral-800 rounded-xl justify-start items-start gap-16 flex">
          <div className="flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Rewards
            </div>
            <div className="text-white text-lg font-medium font-['Helvetica Now Display'] leading-normal tracking-wide">
              0 USDT
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-[78px] p-4 bg-neutral-800 rounded-xl justify-start items-start gap-16 flex">
          <div className="flex-col justify-start items-start gap-1.5 inline-flex">
            <div className=" opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Ends
            </div>
            <div className="text-white text-lg font-medium font-['Helvetica Now Display'] leading-normal tracking-wide">
              30d : 16h : 30m
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-6 py-3 bg-neutral-700 rounded-xl justify-center items-center gap-2.5 inline-flex">
        <div className=" text-center text-white text-base font-bold font-['Helvetica Now Display'] leading-normal tracking-wide">
          Switch to Ethereum
        </div>
      </div>
    </div>
  );
}

export default Activeboost;
