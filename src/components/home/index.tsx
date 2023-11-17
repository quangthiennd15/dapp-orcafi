import Overview from "../overview";
import Platform from "../platform";
import VaultList from "../vaultList";
function Home() {
  return (
    <>
      <div className="bg-[#010707] max-w-[1280px] mx-auto">
        <Overview />
        <Platform />
        <VaultList />
      </div>
    </>
  );
}
export default Home;
