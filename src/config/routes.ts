// icons
import HomeIcon from "@material-ui/icons/Home";
import CasinoIcon from "@material-ui/icons/Casino";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";

// components
import Home from "../pages/Home";
import Game from "../pages/Game";
import Settings from "../pages/Settings";

// interface
import RouteItem from "../model/RouteItem.model";

// define app routes
export const routes: Array<RouteItem> = [
  {
    key: "router-home",
    title: "Home",
    tooltip: "Home",
    path: "/",
    enabled: true,
    component: Home,
    icon: HomeIcon,
    appendDivider: true,
    hideFromMenu: true,
  },
  {
    key: "router-game",
    title: "Game",
    tooltip: "Start a new game",
    path: "/play",
    enabled: true,
    component: Game,
    icon: CasinoIcon,
    appendDivider: true,
  },
  {
    key: "router-settings",
    title: "Settings",
    tooltip: "Adjust game settings",
    path: "/settings",
    enabled: true,
    component: Settings,
    icon: SettingsIcon,
  },
];
