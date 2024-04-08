import React from "react";
import { Drawer, Box, Divider } from "@mui/material";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  toggleDrawer,
  children,
}) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}  ModalProps={{ // Apply zIndex through ModalProps
      sx: {
        zIndex: (theme) => theme.zIndex.drawer + 1 // or use a specific value like 2
      }
    }}>
      <Box
        sx={{
          minWidth: "400px",
          p: 2,
          backgroundColor: "background.paper",
          flexGrow: 1,
          marginBottom: 2,
        }}
      >
        {children}
        <Divider/>
        <Box gap={2} sx={{display: "flex", flexDirection: "column", py: 2}}>
        <ButtonComponent
              color="primary"
              variant="contained"
              text="Log In"
              link="/login"
            />
            <ButtonComponent
              color="primary"
              variant="contained"
              text="Sign Up"
              link="/sign-up"
            />
        </Box>
        
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
