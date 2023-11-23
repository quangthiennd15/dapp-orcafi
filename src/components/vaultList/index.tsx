import React, { useRef, useState, useEffect, useMemo } from "react";
import { arrow, Search, sort, sortup } from "../../assets/icons";
import AllVaults from "./AllVaults";
import EligibleVaults from "./EligibleVaults";
import MyVaults from "./MyVaults";

enum TabKeys {
  ALL_VAULTS = "allvaults",
  ELIGIBLE_VAULTS = "eligiblevaults",
  MY_VAULTS = "myvaults",
}

const components = {
  [TabKeys.ALL_VAULTS]: AllVaults,
  [TabKeys.ELIGIBLE_VAULTS]: EligibleVaults,
  [TabKeys.MY_VAULTS]: MyVaults,
};

const VaultList: React.FC = () => {
  const [openFilter, setopenFilter] = useState(false);
  const [openPlatform, setopenPlatform] = useState(false);
  const [tab, setTab] = useState<TabKeys>(TabKeys.ALL_VAULTS);
  const renderTab = useMemo(() => {
    return (
      <div className="mr-[10px] p-1 bg-zinc-900 rounded-2xl justify-between items-center inline-flex">
        <button
          aria-selected={tab === TabKeys.ALL_VAULTS}
          onClick={() => setTab(TabKeys.ALL_VAULTS)}
          className="min-w-[130px] self-stretch py-4  aria-selected:bg-neutral-800 rounded-xl justify-center items-center flex"
        >
          <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
            All Vaults
          </div>
        </button>

        <button
          aria-selected={tab === TabKeys.ELIGIBLE_VAULTS}
          onClick={() => setTab(TabKeys.ELIGIBLE_VAULTS)}
          className="min-w-[130px] self-stretch py-4  aria-selected:bg-neutral-800 rounded-xl justify-center items-center flex"
        >
          <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
            Eligible Vaults
          </div>
        </button>

        <button
          aria-selected={tab === TabKeys.MY_VAULTS}
          onClick={() => setTab(TabKeys.MY_VAULTS)}
          className="min-w-[130px] self-stretch py-4  aria-selected:bg-neutral-800 rounded-xl justify-center items-center flex"
        >
          <div className="text-white text-sm font-medium font-['Helvetica Now Display'] leading-none">
            My Vaults
          </div>
        </button>
      </div>
    );
  }, [tab]);

  const renderTabContent = useMemo(() => {
    const Component =
      components[tab as TabKeys] || components[TabKeys.ALL_VAULTS];

    return <Component />;
  }, [tab]);

  const onClickFilter = () => {
    setopenFilter(true);
  };

  const onClickPlatform = () => {
    setopenPlatform(true);
  };

  const componentRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        componentRef.current &&
        event.target &&
        event.target instanceof Node &&
        !componentRef.current.contains(event.target) &&
        !modalRef.current?.contains(event.target)
      ) {
        setopenFilter(false);
        setopenPlatform(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className=" my-8 ">
        <div className=" inline-flex w-full">
          {renderTab}

          <div className=" mr-[10px] p-4 bg-zinc-900 rounded-2xl justify-center items-center inline-flex gap-4">
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

          <button
            className=" hover:bg-white/10  mr-[10px] px-4 py-2 bg-neutral-800 rounded-2xl justify-center items-center gap-4 inline-flex"
            onClick={onClickFilter}
            ref={modalRef}
          >
            <div className="text-center text-white text-base font-bold font-['Helvetica Now Display'] leading-normal">
              Filters
            </div>
            <div className=" bg-zinc-900 rounded-lg justify-center items-center gap-2.5 flex">
              <div className="opacity-30 justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative p-1">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </button>
          {openFilter && (
            <div
              ref={componentRef}
              className="bg-[#1D1D1F] w-[350px]  absolute rounded-lg mt-[56px] left-[42%] p-6"
            >
              <div className="text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                Showing 104/2600 vaults
              </div>

              <div className="pt-2 pb-4">
                <div className="py-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className=" h-5 w-5 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    />
                    <span className="ml-2 text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                      🔥 Boosted vaults
                    </span>
                  </label>
                </div>
                <div className="py-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className=" h-5 w-5 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    />
                    <span className="ml-2 text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                      Retired vaults
                    </span>
                  </label>
                </div>
                <div className="py-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className=" h-5 w-5 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    />
                    <span className="ml-2 text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                      Paused vaults
                    </span>
                  </label>
                </div>

                <div className="relative">
                  <button
                    data-dropdown-toggle="dropdownSearch"
                    className="w-full inline-flex justify-between items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#010707] rounded-2xl  focus:outline-none "
                    type="button"
                    onClick={onClickPlatform}
                  >
                    <div>Platform: All</div>
                    <div>
                      <img src={arrow} alt="" />
                    </div>
                  </button>
                  {openPlatform && (
                    <div className="bg-[#1D1D1F] w-full absolute rounded-lg  p-6 mb-40">
                      <div className="w-full pl-4 py-2.5 bg-zinc-900 rounded-2xl items-center gap-2.5 inline-flex">
                        <div className="w-4 h-4 justify-center items-center flex">
                          <div className="w-4 h-4 relative flex-col justify-start items-start flex">
                            <img src={Search} alt="" />
                          </div>
                        </div>
                        <div className="text-gray-200 text-base font-medium font-['Helvetica Now Display'] leading-normal">
                          Search ...
                        </div>
                      </div>
                      <div className="py-2 ml-2">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className=" h-5 w-5 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          />
                          <span className="ml-2 text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                            Pancake
                          </span>
                        </label>
                      </div>
                      <div className="py-2 ml-2">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className=" h-5 w-5 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          />
                          <span className="ml-2 text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                            Pearl
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

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
        {tab === "myvaults" ? (
          <div className=" ">
            <div className="text-white text-xl font-bold font-['Helvetica Now Display'] leading-[30px] py-4">
              You haven't deposited in any vaults.
            </div>
            <div className="text-white text-base font-medium font-['Helvetica Now Display'] leading-tight">
              Find and deposit in a vault.
            </div>
            <button
              onClick={() => setTab(TabKeys.ALL_VAULTS)}
              className=" self-stretch px-6 py-3 bg-red-500 rounded-xl justify-center items-center gap-2.5 inline-flex my-4"
            >
              <div className=" text-center text-white text-base font-bold font-['Helvetica Now Display'] leading-normal tracking-wide">
                View All Vaults
              </div>
            </button>
          </div>
        ) : (
          <div>{renderTabContent}</div>
        )}
      </div>
    </>
  );
};
export default VaultList;
