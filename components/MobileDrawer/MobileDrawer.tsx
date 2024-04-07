import React from "react";
import { Drawer, Box, Divider } from "@mui/material";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  toggleDrawer,
  children,
}) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <Box
        sx={{
          minWidth: "60dvw",
          p: 2,
          backgroundColor: "background.paper",
          flexGrow: 1,
        }}
      >
        {children}
        <Divider/>
        <ButtonComponent
              color="primary"
              variant="contained"
              text="Get Started"
              link="/sign-up"
            />
            <ButtonComponent
              color="primary"
              variant="contained"
              text="Login"
              link="/sign-in"
            />
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
