import {
  WagmiConfig,
  createConfig,
  configureChains,
  mainnet,
  useDisconnect,
} from "wagmi";
import { arrow, token } from "../../assets/icons";
import { useAccount, useConnect, useBalance } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import addressEllipsis from "../../utils/addressHelpers";
import { useEffect, useState, useRef } from "react";

const { chains, publicClient } = configureChains(
  [mainnet],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: "https://rpc.testnet.fantom.network/",
      }),
    }),
  ]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [new MetaMaskConnector({ chains })],
});

function Profile() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  const [openWallet, setopenWallet] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLButtonElement>(null);

  const onClickWallet = () => {
    setopenWallet(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        componentRef.current &&
        event.target &&
        event.target instanceof Node &&
        !componentRef.current.contains(event.target) &&
        !modalRef.current?.contains(event.target)
      ) {
        setopenWallet(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return removeEventListener("click", handleClickOutside);
  }, []);

  if (isConnected) {
    return (
      <div>
        <button
          onClick={onClickWallet}
          ref={modalRef}
          className=" items-center gap-2 text-zinc-400 text-sm font-bold font-['Helvetica Now Display'] leading-none inline-flex"
        >
          <div className="w-[34.43px] h-[32.76px] px-[7px] py-[9px] bg-zinc-500 rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="w-[20.43px] h-[14.76px]">
              <img src={token} alt="" />
            </div>
          </div>

          {addressEllipsis(address, 4)}
          <img src={arrow} alt="" />
        </button>
        {openWallet && (
          <div
            ref={componentRef}
            className="z-[99] w-[300px] bg-neutral-800 absolute mt-2 right-[20px] py-2  rounded-2xl text-white font-bold font-['Helvetica Now Display'] leading-[30px]"
          >
            <div className="mb-4">WALLET</div>
            <div>Address: {addressEllipsis(address, 8)}</div>
            <p>Balance: {balance ? balance.formatted : "Loading..."} FTM</p>
            <button
              className="mx-4 px-16 my-4 bg-red-500 rounded-xl border border-red-500 justify-center items-center gap-2 inline-flex"
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="text-white text-base font-medium font-['Helvetica Now Display'] leading-none p-4">
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          className="btn btn-primary"
        >
          Connect Wallet
        </button>
      ))}
    </div>
  );
}

function WalletModal() {
  return (
    <WagmiConfig config={config}>
      <Profile />
    </WagmiConfig>
  );
}

export default WalletModal;
