import { Typography } from "@material-ui/core";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div style={{ textAlign: "center", lineHeight: "32px" }}>
      <Typography variant="body1">DiceStats &#169; 2021</Typography>
    </div>
  );
};

export default Footer;
