// icons
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/CodeOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

// components
import Home from '../pages/Home';
import Game from '../pages/Game';
import Settings from '../pages/Settings';

// interface
import RouteItem from '../model/RouteItem.model';

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
        appendDivider: true
    },
    {
        key: "router-game",
        title: "Game",
        tooltip: "Game tooltip",
        path: "/play",
        enabled: true,
        component: Game,
        icon: CodeIcon,
        appendDivider: true
    },
    {
        key: "router-settings",
        title: "Settings",
        tooltip: "Settings",
        path: "/settings",
        enabled: true,
        component: Settings,
        icon: SettingsIcon
    },
]