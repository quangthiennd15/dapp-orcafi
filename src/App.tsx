import "./App.css";
import Header from "./components/header";
import Overview from "./components/overview";
import Platform from "./components/platform";
import VaultList from "./components/vaultList";
function App() {
  return (
    <>
      <div className="bg-[#010707] w-full h-screen flex flex-col ">
        <Header />
        <Overview />
        <Platform />
        <VaultList />
      </div>
    </>
  );
}

export default App;
