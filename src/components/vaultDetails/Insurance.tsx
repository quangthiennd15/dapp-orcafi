import { usdt, arrowup } from "../../assets/icons";

function Insurance() {
  return (
    <div className="my-8 px-6 py-5 bg-zinc-900 rounded-xl flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="text-white text-2xl font-bold font-['Helvetica Now Display'] leading-loose">
          Insurance
        </div>
        <div className="w-8 h-8 rounded justify-center items-center gap-2.5 flex">
          <div className="w-6 h-6 relative">
            <img src={arrowup} alt="" />
          </div>
        </div>
      </div>
      <div className=" p-2 self-stretch bg-white bg-opacity-5 rounded-xl flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center  inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <div className=" h-7 relative rounded-[200px] border-2 border-neutral-800">
              <img src={usdt} alt="" />
            </div>
            <div className="text-white text-lg font-bold font-['Helvetica Now Display'] leading-7">
              Tether
            </div>
          </div>
        </div>
        <div className="self-stretch opacity-50 text-white text-base font-normal font-['Helvetica Now Display'] leading-normal tracking-tight">
          Nexus Mutual is a blockchain-based alternative to traditional
          insurance. Become a mutual member to purchase comprehensive coverage
          for your Beefy positions.
        </div>
      </div>
    </div>
  );
}

export default Insurance;
