import VaultDetails from "../components/vaultDetails";
import Home from "../components/home";
import DashBoard from "../view/dashboard";
import Staking from "../view/staking";

interface IRoute {
  path: string;
  component: React.ReactNode;
}

const routeConfig: IRoute[] = [
  { path: "/", component: <Home /> },

  { path: "/VaultDetails", component: <VaultDetails /> },

  { path: "/DashBoard", component: <DashBoard /> },
  { path: "/Staking", component: <Staking /> },
];
export default routeConfig;
