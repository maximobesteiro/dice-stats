import { FC, ReactElement } from "react";
import { Drawer } from "@material-ui/core";

// components
import AppMenu from "./AppMenu";

// define interface to represent component props
interface Props {
  open: boolean;
  handleMenuClose: () => void;
}

const Navigation: FC<Props> = ({ open, handleMenuClose }): ReactElement => {
  return (
    <>
      <Drawer
        variant="temporary"
        /*className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}*/
        open={open}
        onClose={handleMenuClose}
      >
        <AppMenu onItemClick={handleMenuClose} />
      </Drawer>
    </>
  );
};

export default Navigation;
