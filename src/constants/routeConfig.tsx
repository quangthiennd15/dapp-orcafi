import VaultDetails from "../components/vaultDetails";
import Home from "../components/home";

interface IRoute {
  path: string;
  component: React.ReactNode;
}

const routeConfig: IRoute[] = [
  { path: "/", component: <Home /> },

  { path: "/VaultDetails", component: <VaultDetails /> },
];
export default routeConfig;
