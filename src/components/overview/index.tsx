import { eye } from "../../assets/icons";
import { arrow } from "../../assets/icons";
function Overview() {
  return (
    // <div>
    <div className="inline-flex 2xl:mx-80 mx-40 my-8 justify-between">
      <div className="  flex-col gap-3.5 inline-flex ">
        <div className="text-white text-2xl font-medium font-['Helvetica Now Display'] leading-7">
          Overview
        </div>
        <div className="flex-col justify-start items-start gap-1 flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-tight">
              Your Balance
            </div>
            <div className="w-5 h-5 relative opacity-30">
              <img src={eye} alt="" />
            </div>
          </div>
          <div className="text-white text-3xl font-medium font-['Helvetica Now Display'] leading-10">
            $ 248,048,83.28
          </div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="px-2 py-0.5 bg-red-500 rounded-[7px] justify-start items-center flex">
              <div className="justify-start items-center gap-1 flex">
                <div className="text-white text-[10px] font-medium font-['Helvetica Now Display'] leading-none">
                  +6,15%
                </div>
              </div>
            </div>
            <div className="opacity-40 text-white text-[10px] font-medium font-['Helvetica Now Display'] leading-none">
              in the last 24 hours
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex gap-3">
        <div className=" bg-zinc-900 rounded-[20px]">
          <div className="px-4 py-4">
            <div className="justify-between inline-flex w-full gap-x-20 mb-8">
              <div className="opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-tight ">
                Index Price
              </div>
              <div className=" bg-zinc-800 rounded-[20px] p-2">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className=" opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Index Price
            </div>
            <div className=" ">
              <span className="text-white text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                $ 54,654
              </span>
              <span className="text-white text-opacity-40 text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                .09
              </span>
            </div>
          </div>
        </div>
        <div className=" bg-zinc-900 rounded-[20px]">
          <div className="px-4 py-4">
            <div className="justify-between inline-flex w-full  gap-x-20 mb-8">
              <div className="opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-tight ">
                Index Price
              </div>
              <div className=" bg-zinc-800 rounded-[20px] p-2">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className=" opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Index Price
            </div>
            <div className=" ">
              <span className="text-white text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                $ 54,654
              </span>
              <span className="text-white text-opacity-40 text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                .09
              </span>
            </div>
          </div>
        </div>
        <div className=" bg-zinc-900 rounded-[20px]">
          <div className="px-4 py-4">
            <div className="justify-between inline-flex w-full  gap-x-20 mb-8">
              <div className="opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-tight ">
                Index Price
              </div>
              <div className=" bg-zinc-800 rounded-[20px] p-2">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className=" opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Index Price
            </div>
            <div className=" ">
              <span className="text-white text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                $ 54,654
              </span>
              <span className="text-white text-opacity-40 text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                .09
              </span>
            </div>
          </div>
        </div>
        <div className=" bg-zinc-900 rounded-[20px]">
          <div className="px-4 py-4">
            <div className="justify-between inline-flex w-full  gap-x-20 mb-8">
              <div className="opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-tight ">
                Index Price
              </div>
              <div className=" bg-zinc-800 rounded-[20px] p-2">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className=" opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Index Price
            </div>
            <div className=" ">
              <span className="text-white text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                $ 54,654
              </span>
              <span className="text-white text-opacity-40 text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                .09
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
export default Overview;
