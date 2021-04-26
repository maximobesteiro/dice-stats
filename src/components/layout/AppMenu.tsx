import { FC, ReactElement, useState } from "react";
import { List, Divider } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// components
import MenuItem from "./MenuItem";
// app routes
import { routes } from "../../config/routes";
// interfaces
import RouteItem from "../../model/RouteItem.model";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    nested: {
      marginLeft: theme.spacing(2),
    },
  })
);

interface MenuProps {
  onItemClick: () => void;
}

// functional component
const Menu: FC<MenuProps> = ({ onItemClick }): ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = (): void => {
    setOpen(!open);
    onItemClick();
  };

  return (
    <List>
      {routes
        .filter((route: RouteItem) => !route.hideFromMenu)
        .map((route: RouteItem) => (
          <>
            <MenuItem
              key={`${route.key}`}
              title={route.title}
              icon={route.icon}
              tooltip={route.tooltip}
              path={route.path}
              enabled={route.enabled}
              component={route.component}
              onClick={handleClick}
            />
            {route.appendDivider && <Divider className={classes.divider} />}
          </>
        ))}
    </List>
  );
};

export default Menu;
