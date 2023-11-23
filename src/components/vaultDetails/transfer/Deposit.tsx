import {
  btc,
  usdt,
  arrow,
  expand,
  ifo,
  Search,
  Ethereum,
  Polygon,
  Close,
} from "../../../assets/icons";
import { useRef, useState, useEffect } from "react";

const Deposit = () => {
  const tokenList = [
    {
      icon: btc,
      text: "Bitcoin",
    },
    {
      icon: Ethereum,
      text: "Ethereum",
    },
    {
      icon: usdt,
      text: "USDT",
    },
    {
      icon: Polygon,
      text: "Matic",
    },
  ];

  const [searchItem, setSearchItem] = useState("");
  const [filteredTokens, setFilteredTokens] = useState(tokenList);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = tokenList.filter((token) =>
      token.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (searchItem === "") {
      setFilteredTokens(tokenList);
    }
    setFilteredTokens(filteredItems);
  };

  const [openSelectToken, setopenSelectToken] = useState(false);
  const onClickSelectToken = () => {
    setopenSelectToken(true);
  };

  const onClickClose = () => {
    setSearchItem("");
    setFilteredTokens(tokenList);
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
        setopenSelectToken(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="">
      <div className=" text-white text-base font-medium font-['Helvetica Now Display'] leading-tight">
        Select token
      </div>
      <div className="relative w-full my-4 self-stretch p-2 bg-[#010707] rounded-2xl justify-start items-start inline-flex">
        <button
          onClick={onClickSelectToken}
          ref={modalRef}
          className=" px-4 py-3 bg-zinc-900 rounded-xl gap-2 items-center  inline-flex"
        >
          <div className="w-12 h-6  inline-flex">
            <div className="w-8 h-6 absolute ">
              <img src={btc} alt="" />
            </div>
            <div className="w-8 h-6 relative left-[14px] ">
              <img src={usdt} alt="" />
            </div>
          </div>

          <div className="opacity-30 justify-center items-center flex">
            <div className="w-4 ">
              <img src={arrow} alt="" />
            </div>
          </div>
        </button>
        {openSelectToken && (
          <div
            ref={componentRef}
            className="absolute z-[99] w-full mt-16 p-4 bg-zinc-800 rounded-xl shadow border border-zinc-800 flex-col justify-start items-start gap-3 inline-flex"
          >
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-6 text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                Select a Token
              </div>
            </div>

            <div className="self-stretch p-3 bg-neutral-900 rounded-2xl justify-start items-center gap-3 inline-flex">
              {searchItem === "" ? (
                <img src={Search} alt="" />
              ) : (
                <img src={Close} onClick={onClickClose} alt="" />
              )}

              <input
                className=" bg-neutral-900 focus:outline-none  self-stretch h-6 text-gray-200 text-base font-medium font-['Helvetica Now Display'] leading-normal   w-full"
                placeholder="Search"
                value={searchItem}
                onChange={handleInputChange}
              />
            </div>

            {filteredTokens.length === 0 ? (
              <p className="pl-2 self-stretch h-6 text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                No tokens found
              </p>
            ) : (
              <>
                {filteredTokens.map((token, index) => {
                  return (
                    <ul className="py-2 pl-2 self-stretch justify-start items-start inline-flex gap-2">
                      <img src={token.icon} alt="" key={index} />

                      <li className="self-stretch h-6 text-white text-base font-medium font-['Helvetica Now Display'] leading-normal">
                        {token.text}
                      </li>
                    </ul>
                  );
                })}
              </>
            )}
          </div>
        )}
        <div className=" grow shrink basis-0 h-12 px-4 py-3 rounded-xl justify-between items-center flex">
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

      <div className="my-4 self-stretch justify-start items-start gap-2 inline-flex">
        <div className="px-3 py-1 bg-white bg-opacity-5 rounded-lg justify-start items-center gap-2 flex">
          <div className="text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
            Buy token
          </div>
          <div className="w-4 h-4 justify-center items-center flex">
            <div className="w-4 h-4 ">
              <img src={expand} alt="" />
            </div>
          </div>
        </div>
        <div className="px-3 py-1 bg-white bg-opacity-5 rounded-lg justify-start items-center gap-2 flex">
          <div className="text-white text-base font-normal font-['Helvetica Now Display'] leading-normal">
            Add liquidity
          </div>
          <div className="w-4 h-4 justify-center items-center flex">
            <div className="w-4 h-4 ">
              <img src={expand} alt="" />
            </div>
          </div>
        </div>
      </div>

      <button className="w-full self-stretch px-6 py-3 bg-red-500 rounded-xl justify-center items-center gap-2.5 inline-flex">
        <div className=" text-center text-white text-base font-bold font-['Helvetica Now Display'] leading-normal tracking-wide">
          Deposit
        </div>
      </button>
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
export default Deposit;
