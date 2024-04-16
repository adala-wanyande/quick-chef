import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MobileCompanyLogo from "../MobileCompanyLogo/MobileCompanyLogo";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const MobileNavigationBar = () => {
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <MobileCompanyLogo />
          <Box>
            <ButtonComponent color="inherit" link="/login" variant="text" text="Login"></ButtonComponent>
            <ButtonComponent variant="contained" color="secondary" link="/signup" text="Sign up"></ButtonComponent>
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon sx={{ml: 2}}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileNavigationBar;
