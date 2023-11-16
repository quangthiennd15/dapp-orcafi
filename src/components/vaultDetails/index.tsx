import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../header";
import {
  btc,
  usdt,
  exchange,
  Frame,
  telegram,
  twiter,
  arrowup,
  orca,
  expand,
  chart,
  signout,
} from "../../assets/icons";
import Safety from "./Safety";
import Strategy from "./Strategy";
import Transfer from "./Transfer";
import Activeboost from "./Activeboost";
import Insurance from "./Insurance";
const VaultDetails: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <div className="2xl:px-80 px-40 flex bg-[#010707] w-full flex-col pb-80">
      <div className="w-[156px] h-12 p-3 bg-zinc-800 rounded-xl justify-start items-center gap-3 inline-flex relative left-[87%]">
        <div className="justify-start items-center gap-2 flex">
          <div className="w-6 h-6 relative">
            <img src={signout} alt="" />
          </div>
          <div className="w-[100px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-6 text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
              Disconnect
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-[#010707] mb-8 justify-between inline-flex">
        <div className="h-12 justify-start items-center gap-2 inline-flex">
          <div className="w-18 p-2 bg-neutral-800 rounded-2xl justify-start items-start flex">
            <div className="w-10">
              <img src={btc} alt="" />
            </div>
            <div className="w-10 h-6 ml-4 absolute rounded-[200px]  border-neutral-800 ">
              <img src={usdt} alt="" />
            </div>
          </div>
          <div className="justify-start items-center gap-[5px] flex">
            <div className="text-white text-2xl font-bold font-['Helvetica Now Display'] leading-normal">
              BTC
            </div>
            <div className="justify-start items-start gap-[12.50px] flex">
              <div className="w-4 h-4 relative">
                <img src={exchange} alt="" />
              </div>
            </div>
            <div className="text-white text-2xl font-bold font-['Helvetica Now Display'] leading-normal">
              USDT
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2">
          <div className="opacity-50 text-white text-sm font-medium font-['Helvetica Now Display'] uppercase leading-none">
            Chain:
          </div>
          <div className=" h-[26px] px-2.5 py-1 bg-zinc-800 rounded-lg justify-start items-center gap-1.5 inline-flex">
            {/* <div className="w-[14px] h-3 relative origin-top-left rotate-180"> */}
            <img src={orca} alt="" />
            {/* </div> */}
            <div className="text-cyan-400 text-sm font-medium font-['Helvetica Now Display'] leading-[18px]">
              Orca Wave
            </div>
          </div>
          <div className=" h-[26px] justify-start items-center gap-2 inline-flex">
            <div className="opacity-50 text-white text-sm font-medium font-['Helvetica Now Display'] uppercase leading-none">
              Platform:
            </div>
            <div className="px-2.5 py-1 bg-neutral-800 rounded-lg justify-start items-center flex">
              <div className="justify-start items-center gap-1 flex">
                <div className="text-cyan-400 text-sm font-medium font-['Helvetica Now Display'] leading-[18px]">
                  Pancake Swap
                </div>
              </div>
            </div>
            <div className="w-8 h-8 relative bg-neutral-800 rounded-lg">
              <img src={Frame} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="gap-x-6 justify-between inline-flex ">
        <div className="">
          <div className="gap-2 inline-flex">
            <div className="2xl:w-[276px] w-[245px] h-[108px] bg-zinc-900 rounded-[20px]">
              <div className="px-6 py-6">
                <div className="justify-between inline-flex w-full gap-x-6">
                  <div className="opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-tight ">
                    TVL
                  </div>
                </div>
                <div className="">
                  <span className="text-white text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                    $ 711,058
                  </span>
                  <span className="text-white text-opacity-40 text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                    .09
                  </span>
                </div>
              </div>
            </div>

            <div className="2xl:w-[276px] w-[245px]  h-[108px] bg-zinc-900 rounded-[20px]">
              <div className="px-6 py-6">
                <div className="justify-between inline-flex w-full gap-x-6">
                  <div className="opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-tight ">
                    APY
                  </div>
                </div>
                <div className="w-[113px]">
                  <span className="text-white text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                    9
                  </span>
                  <span className="text-white text-opacity-40 text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                    .37%
                  </span>
                </div>
                <div className="w-[86px] text-slate-600 text-sm font-medium font-['Helvetica Now Display'] line-through leading-none">
                  8.21%
                </div>
              </div>
            </div>

            <div className="2xl:w-[276px] w-[245px] h-[108px] bg-zinc-900 rounded-[20px]">
              <div className="px-6 py-6">
                <div className="justify-between inline-flex w-full gap-x-6">
                  <div className="opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-tight ">
                    Daily
                  </div>
                </div>
                <div className="w-[113px]">
                  <span className="text-white text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                    0
                  </span>
                  <span className="text-white text-opacity-40 text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                    .0237%
                  </span>
                </div>
                <div className="w-[86px] text-slate-600 text-sm font-medium font-['Helvetica Now Display'] line-through leading-none">
                  0.0221%
                </div>
              </div>
            </div>
          </div>

          <div className="my-8 p-6 bg-zinc-900 rounded-[20px] flex-col justify-start items-end gap-5 inline-flex">
            <div className="self-stretch justify-between inline-flex items-center">
              <div>
                <span className="text-white text-2xl font-bold font-['Helvetica Now Display'] leading-loose">
                  Boosted By{" "}
                </span>
                <span className="text-red-500 text-2xl font-bold font-['Helvetica Now Display'] leading-loose">
                  Orcafi
                </span>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="px-3 py-1 bg-white bg-opacity-5 rounded-lg justify-start items-center gap-2 flex">
                  <div className="text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
                    Website
                  </div>
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative">
                      <img src={expand} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 relative bg-zinc-800 rounded-lg">
                  <img src={twiter} alt="" />
                </div>
                <div className="w-8 h-8 relative bg-zinc-800 rounded-lg">
                  <img src={telegram} alt="" />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0px] opacity-5 border border-white"></div>
            <div className="self-stretch opacity-50 text-white text-base font-normal font-['Helvetica Now Display'] leading-normal tracking-wide">
              Tangible gives Real World Assets chain operability, integrating
              them into powerful DeFi products built to meet market needs.
            </div>
            <div className="self-stretch p-3 bg-white bg-opacity-5 rounded-xl justify-between items-center inline-flex">
              <div className="justify-start items-start gap-2 flex">
                <div className="w-7 h-7 relative rounded-[200px] border-2 border-neutral-800">
                  <img src={usdt} alt="" />
                </div>
                <div className="text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                  Earn USDT
                </div>
              </div>
              <div className="px-3 py-1 bg-white bg-opacity-5 rounded-lg justify-start items-center gap-2 flex">
                <div className="text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
                  Explorer
                </div>
                <div className="w-4 h-4 justify-center items-center flex">
                  <div className="w-4 h-4 relative">
                    <img src={expand} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-6 bg-zinc-900 rounded-[20px] flex-col justify-start items-start gap-5 inline-flex mb-8 w-full">
            <div className="justify-center self-stretch  items-start inline-flex">
              <div className=" p-1 bg-white bg-opacity-5 rounded-2xl  items-center gap-2 flex">
                <div className=" px-5 py-2 bg-zinc-800 rounded-xl justify-center items-center gap-2.5 flex">
                  <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                    1 LP
                  </div>
                </div>
                <div className="px-5 py-2 justify-start items-start gap-2.5 flex">
                  <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                    Total Pool
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0px] opacity-5 border border-white"></div>
            <div className=" justify-start items-start gap-5 inline-flex">
              <div className="px-6 pt-[30px] pb-5 bg-neutral-800 rounded-2xl flex-col justify-end items-center gap-[30px] inline-flex">
                <div className="w-[110px] h-[110px] relative">
                  <div className="w-[110px] h-[110px] left-0 top-0 absolute rounded-full border-8 border-white border-opacity-5">
                    <img src={chart} alt="" />
                  </div>
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-1.5 flex">
                    <div className="w-5 h-5 relative rounded-[200px] border-2 border-neutral-800">
                      <img src={usdt} alt="" />
                    </div>
                    <div className="text-white text-sm font-bold font-['Helvetica Now Display'] leading-tight tracking-wide">
                      50.0%
                    </div>
                  </div>
                  <div className="w-6 h-[0px] mt-2 rotate-90 border-2 border-neutral-600"></div>
                  <div className="justify-start items-start gap-1.5 flex">
                    <div className="w-5 h-5 relative rounded-[200px] border-2 border-neutral-800">
                      <img src={btc} alt="" />
                    </div>
                    <div className="text-red-500 text-sm font-bold font-['Helvetica Now Display'] leading-tight tracking-wide">
                      50.0%
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] flex-col justify-center items-start gap-px inline-flex">
                <div className="self-stretch h-[41px] justify-start items-start gap-px inline-flex">
                  <div className="rounded-tl-2xl w-40 self-stretch px-4 py-2 bg-neutral-800 justify-start items-center gap-2 flex">
                    <div className="opacity-50 text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
                      Asset
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-3 py-2 bg-neutral-800 justify-center items-center gap-2 flex">
                    <div className="opacity-50 text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
                      Token amount
                    </div>
                  </div>
                  <div className="rounded-tr-2xl w-40 self-stretch px-4 py-2 bg-neutral-800 justify-end items-center gap-2 flex">
                    <div className="opacity-50 text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
                      Value
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[55px] justify-start items-start gap-px inline-flex">
                  <div className="w-40 self-stretch px-4 py-2 bg-neutral-800 justify-start items-center gap-2 flex">
                    <div className="justify-start items-start gap-2 flex">
                      <div className="w-6 h-6 relative rounded-[200px] border-2 border-neutral-800">
                        <img src={usdt} alt="" />
                      </div>
                      <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal tracking-wide">
                        USDT
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-3 py-2 bg-neutral-800 justify-center items-center gap-2 flex">
                    <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
                      10,783,298.541
                    </div>
                  </div>
                  <div className="w-40 self-stretch px-4 py-2 bg-neutral-800 justify-end items-center gap-2 flex">
                    <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
                      $32.76B
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-14 justify-start items-start gap-px inline-flex">
                  <div className="w-40 self-stretch px-4 py-2 bg-neutral-800 justify-start items-center gap-2 flex">
                    <div className="justify-start items-start gap-2 flex">
                      <div className="w-6 h-6 relative rounded-[200px] border-2 border-neutral-800">
                        <img src={btc} alt="" />
                      </div>
                      <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal tracking-wide">
                        BTC
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-3 py-2 bg-neutral-800 justify-center items-center gap-2 flex">
                    <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
                      10,783,298.541
                    </div>
                  </div>
                  <div className="w-40 self-stretch px-4 py-2 bg-neutral-800 justify-end items-center gap-2 flex">
                    <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
                      $32.76B
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[55px] justify-start items-start gap-px inline-flex rounded-2xl">
                  <div className="rounded-bl-2xl w-40 self-stretch px-4 py-2 bg-neutral-800 justify-start items-center gap-2 flex">
                    <div className="justify-start items-center gap-2 flex">
                      <div className="w-12 rounded-2xl justify-start items-start flex">
                        <div className="w-8 h-6 absolute">
                          <img src={btc} alt="" />
                        </div>
                        <div className="left-[14px] w-8 h-6 relative rounded-[200px] ">
                          <img src={usdt} alt="" />
                        </div>
                      </div>
                      <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal tracking-wide">
                        LP
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-3 py-2 bg-neutral-800 justify-center items-center gap-2 flex">
                    <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
                      1
                    </div>
                  </div>
                  <div className="rounded-br-2xl w-40 self-stretch px-4 py-2 bg-neutral-800 justify-end items-center gap-2 flex">
                    <div className="text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
                      $65.51B
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Safety />
          <Strategy />

          <div className=" px-6 py-5 bg-zinc-900 rounded-xl flex-col justify-start items-start gap-6 inline-flex w-[100%] ">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-white text-2xl font-bold font-['Helvetica Now Display'] leading-loose">
                Asset Detail
              </div>
              <div className="w-8 h-8 rounded justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative">
                  <img src={arrowup} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="2xl:w-[390px] w-[413px] h-[108px] bg-zinc-900 rounded-[20px]">
            <div className="w-[163px] h-[44.36px] flex-col justify-start items-start gap-1.5 inline-flex pt-6 px-6">
              <div className="w-[86px] opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                Your Deposit
              </div>
              <div className="w-[113px]">
                <span className="text-white text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                  $ 3,654
                </span>
                <span className="text-white text-opacity-40 text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                  .09
                </span>
              </div>
            </div>
            <div className="w-[65.57px] h-[0px] origin-top-left rotate-90 border border-white border-opacity-10 ml-[50%] mt-[-6%]"></div>
            <div className="w-[166px] h-[45.32px] flex-col justify-start items-start gap-[7px] inline-flex ml-[230px]">
              <div className="opacity-40 text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
                Last Harvest
              </div>
              <div className="text-white text-xl font-medium font-['Helvetica Now Display'] leading-normal">
                4 minutes ago
              </div>
            </div>
          </div>
          <Transfer />
          <Activeboost />
          <Insurance />
        </div>
      </div>

      {/* <div></div> */}
    </div>
  );
};
export default VaultDetails;
