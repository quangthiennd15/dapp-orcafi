import Deposit from "./transfer/Deposit";
import Withdraw from "./transfer/Withdraw";
import { useMemo, useState } from "react";

enum TabKeys {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

const components = {
  [TabKeys.DEPOSIT]: Deposit,
  [TabKeys.WITHDRAW]: Withdraw,
};

function Transfer() {
  const [tab, setTab] = useState<TabKeys>(TabKeys.DEPOSIT);

  const renderTab = useMemo(() => {
    return (
      <div className=" p-1 rounded-2xl items-center  inline-flex">
        <button
          aria-selected={tab === TabKeys.DEPOSIT}
          onClick={() => setTab(TabKeys.DEPOSIT)}
          className=" py-2 px-10 aria-selected:bg-zinc-800 rounded-xl justify-center items-center gap-2.5 flex"
        >
          <div className="text-white text-xl font-bold font-['Helvetica Now Display'] leading-[30px]">
            Deposit
          </div>
        </button>
        <button
          aria-selected={tab === TabKeys.WITHDRAW}
          onClick={() => setTab(TabKeys.WITHDRAW)}
          className=" p-2 px-10 aria-selected:bg-zinc-800 rounded-xl justify-center items-center gap-2.5 flex"
        >
          <div className=" text-white text-xl font-bold font-['Helvetica Now Display'] leading-[30px]">
            Withdraw
          </div>
        </button>
      </div>
    );
  }, [tab]);

  const renderTabContent = useMemo(() => {
    const Component = components[tab as TabKeys] || components[TabKeys.DEPOSIT];
    return <Component />;
  }, [tab]);

  return (
    <div className=" w-full mt-10  p-6 bg-zinc-900 rounded-[20px] flex-col justify-start items-center gap-6 inline-flex">
      {/* <div className="bg-[#010707] h-[62px] p-2 justify-center self-stretch  items-center rounded-2xl"> */}
      <div className="bg-[#010707]   items-center rounded-2xl">{renderTab}</div>
      <div className="">{renderTabContent}</div>
      {/* </div> */}
    </div>
  );
}

export default Transfer;
