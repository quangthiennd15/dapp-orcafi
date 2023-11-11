import { lazy } from "react";

const VaultDetails = lazy(() => import("../components/vaultDetails"));
const Home = lazy(() => import("../components/home"));

interface IRoute {
  path: string;
  component: React.ReactNode;
}

const routeConfig: IRoute[] = [
  { path: "/", component: <Home /> },

  { path: "/VaultDetails", component: <VaultDetails /> },
];
export default routeConfig;
