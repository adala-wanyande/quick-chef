import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MobileCompanyLogo from "../MobileCompanyLogo/MobileCompanyLogo";

const MobileNavigationBar = () => {
  return (
    <Box sx={{ display: { xs: "block", sm: "none" }, flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <MobileCompanyLogo />
          <Box>
            <Button color="inherit">Login</Button>
            <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
              Sign up
            </Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileNavigationBar;
