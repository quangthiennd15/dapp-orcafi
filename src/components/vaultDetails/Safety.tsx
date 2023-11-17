import { arrowdown, arrowup, expand } from "../../assets/icons";
function Safety() {
  return (
    <div className="w-full p-6 bg-zinc-900 rounded-[20px] flex-col items-center gap-5 inline-flex">
      <div className=" items-center self-stretch justify-between  inline-flex">
        <div className="text-white text-2xl font-bold font-['Helvetica Now Display'] leading-loose">
          Safety Score
        </div>
        <div className="justify-start items-start gap-2 flex">
          <div className="px-3 py-1 bg-white bg-opacity-5 rounded-lg justify-start items-center gap-2 flex">
            <div className="text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
              Strategy address
            </div>
            <div className="w-4 h-4 justify-center items-center flex">
              <div className="w-4 h-4 relative">
                <img src={expand} alt="" />
              </div>
            </div>
          </div>
          <div className="px-3 py-1 bg-white bg-opacity-5 rounded-lg justify-start items-center gap-2 flex">
            <div className="text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
              Vault address
            </div>
            <div className="w-4 h-4 justify-center items-center flex">
              <div className="w-4 h-4 relative">
                <img src={expand} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[0px] opacity-5 border border-white"></div>
      <div className="2xl:pr-[379px] pr-[290px] py-5 flex-col justify-center items-start gap-5 flex">
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 justify-center items-center flex">
            <div className="w-5 h-5 relative">
              <img src={arrowdown} alt="" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1.5 inline-flex">
            <div className=" opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Beefy
            </div>
            <div className=" text-white text-lg font-medium font-['Helvetica Now Display'] leading-normal">
              Low-complexity strategy
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 justify-center items-center flex">
            <div className="w-5 h-5 relative">
              <img src={arrowdown} alt="" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1.5 inline-flex">
            <div className=" opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Asset
            </div>
            <div className="text-white text-lg font-medium font-['Helvetica Now Display'] leading-normal">
              Very low or zero expected IL
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 justify-center items-center flex">
            <div className="w-5 h-5 relative">
              <img src={arrowdown} alt="" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1.5 inline-flex">
            <div className=" opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Asset
            </div>
            <div className="text-white text-lg font-medium font-['Helvetica Now Display'] leading-normal">
              Small market-capitalization, high volatility asset
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 justify-center items-center flex">
            <div className="w-5 h-5 relative">
              <img src={arrowdown} alt="" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1.5 inline-flex">
            <div className=" opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              Platform
            </div>
            <div className=" text-white text-lg font-medium font-['Helvetica Now Display'] leading-normal">
              Project contracts are verified
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-14 px-4 py-3 bg-white bg-opacity-5 rounded-xl flex-col justify-start items-start gap-6 flex">
        <div className=" justify-between items-center inline-flex w-full">
          <div className="text-white text-lg font-medium font-['Helvetica Now Display'] leading-normal">
            How it works
          </div>
          <div className="w-8 h-8 rounded  items-center gap-2.5 flex">
            <div className="w-6 h-6 relative">
              <img src={arrowup} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safety;
