import Overview from "../overview";
import Platform from "../platform";
import VaultList from "../vaultList";
function Home() {
  return (
    <>
      <div className="bg-[#010707]  h-screen flex flex-col  min-w-[1280px]">
        <Overview />
        <Platform />
        <VaultList />
      </div>
    </>
  );
}
export default Home;
