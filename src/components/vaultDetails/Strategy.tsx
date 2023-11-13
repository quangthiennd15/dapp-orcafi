import { check, expand } from "../../assets/icons";

function Strategy() {
  return (
    <div className="my-8 p-6 bg-zinc-900 rounded-[20px] flex-col justify-start items-start gap-5 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="text-white text-2xl font-bold font-['Helvetica Now Display'] leading-loose">
          Strategy
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
      <div className="self-stretch opacity-50 text-white text-base font-normal font-['Helvetica Now Display'] leading-normal tracking-wide">
        The vault deposits the user's USDC-wUSDR vLP V2 in a Velodrome farm,
        earning the platform's governance token. Earned token is swapped for
        wUSDR and USDC in order to acquire more of the same LP token.
        <br />
        To complete the compounding cycle, the new USDC-wUSDR vLP V2 is added to
        the farm, ready to go for the next earning event. The transaction cost
        required to do all this is socialized among the vault's users.
      </div>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="text-white text-xl font-bold font-['Helvetica Now Display'] leading-[30px]">
          APY breakdown
        </div>
        <div className="justify-start items-start gap-8 inline-flex">
          <div className="flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="w-[86px] opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              TVL
            </div>
            <div>
              <span className="text-white text-lg font-medium font-['Helvetica Now Display'] leading-normal tracking-wide">
                $ 711,058
              </span>
              <span className="text-white text-opacity-40 text-lg font-medium font-['Helvetica Now Display'] leading-normal tracking-wide">
                .09
              </span>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="w-[86px] opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              TVL
            </div>
            <div>
              <span className="text-white text-lg font-medium font-['Helvetica Now Display'] leading-normal tracking-wide">
                $ 711,058
              </span>
              <span className="text-white text-opacity-40 text-lg font-medium font-['Helvetica Now Display'] leading-normal tracking-wide">
                .09
              </span>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="w-[86px] opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
              TVL
            </div>
            <div>
              <span className="text-white text-lg font-medium font-['Helvetica Now Display'] leading-normal tracking-wide">
                $ 711,058
              </span>
              <span className="text-white text-opacity-40 text-lg font-medium font-['Helvetica Now Display'] leading-normal tracking-wide">
                .09
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 justify-start items-center gap-2 inline-flex">
        <div className="w-8 h-8 relative">
          <img src={check} alt="" />
        </div>
        <div className="text-white text-lg font-medium font-['Helvetica Now Display'] leading-7 tracking-wide">
          Community Audit
        </div>
      </div>
    </div>
  );
}

export default Strategy;
