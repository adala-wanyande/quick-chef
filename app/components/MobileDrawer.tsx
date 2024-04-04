import React from "react";
import { Drawer, Box } from "@mui/material";

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
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
