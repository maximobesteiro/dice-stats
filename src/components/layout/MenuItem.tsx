import React, { FC, ReactElement } from "react";
import clsx from "clsx";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import DefaultIcon from "@material-ui/icons/FileCopy";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

// models
import RouteItem from "../../model/RouteItem.model";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selected: {
      transition: "box-shadow",
      transitionDuration: "1s",
      boxShadow: `0 0 3px ${theme.palette.primary.main}, 0 0 9px ${theme.palette.primary.main}, 0 0 11px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}`,
    },
    nested: {
      marginLeft: theme.spacing(2),
    },
    listItemDisabled: {
      cursor: "not-allowed",
    },
  })
);

interface MenuItemProps extends RouteItem {
  onClick: () => void;
}

// functional component
const MenuItem: FC<MenuItemProps> = (route: MenuItemProps): ReactElement => {
  const classes = useStyles();

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    if (!route.enabled) e.preventDefault();
    route.onClick();
  };

  return (
    <>
      <NavLink
        to={`${route.path}`}
        style={{ textDecoration: "none", color: "inherit" }}
        key={`${route.key}`}
        onClick={handleNavigate}
        className={clsx({
          [classes.listItemDisabled]: !route.enabled,
        })}
      >
        <Tooltip title={route.tooltip || ""} placement="right">
          <ListItem button disabled={!route.enabled}>
            <ListItemIcon>
              <IconButton size="small">
                <Icon component={route.icon || DefaultIcon} />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={route.title} />
          </ListItem>
        </Tooltip>
      </NavLink>
    </>
  );
};

export default MenuItem;
