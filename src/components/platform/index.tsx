import {
  Ethereum,
  Polygon,
  Bnb,
  Aurora,
  Arbitrum,
  Avalanche,
  Fantom,
  Optimism,
} from "../../assets/icons";
function Platform() {
  return (
    <>
      <div className="h-12 p-1 bg-neutral-800 rounded-2xl justify-between items-center mx-80 ">
        <div className="p-2 rounded-[42px] justify-between gap-2.5 flex px-6">
          <div className="w-6 h-6 relative">
            <img src={Ethereum} alt="" />
          </div>
          <div className="w-6 h-6 relative">
            <img src={Polygon} alt="" />
          </div>
          <div className="w-6 h-6 relative">
            <img src={Bnb} alt="" />
          </div>
          <div className="w-6 h-6 relative">
            <img src={Aurora} alt="" />
          </div>
          <div className="w-6 h-10 relative">
            <img src={Arbitrum} alt="" />
          </div>
          <div className="w-6 h-6 relative">
            <img src={Avalanche} alt="" />
          </div>
          <div className="w-6 h-6 relative">
            <img src={Fantom} alt="" />
          </div>
          <div className="w-6 h-6 relative">
            <img src={Optimism} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Platform;
