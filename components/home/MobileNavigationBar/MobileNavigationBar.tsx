import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MobileCompanyLogo from "../MobileCompanyLogo/MobileCompanyLogo";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

// Assuming TypeScript, if not, you can remove `: { isSignInPage: boolean }`
const MobileNavigationBar = ({
  isSignInPage,
  isSignUpPage,
}: {
  isSignInPage: boolean;
  isSignUpPage: boolean;
}) => {
  const renderSignInButton = () => {
    if (!isSignInPage) {
      return (
        <ButtonComponent
          color="inherit"
          link="/login"
          variant="text"
          text="Login"
        />
      );
    }
    return null;
  };

  const renderSignUpButton = () => {
    if (!isSignUpPage) {
      return (
        <ButtonComponent
          variant="contained"
          color="secondary"
          link="/sign-up"
          text="Sign Up"
        />
      );
    }
    return null;
  };

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <MobileCompanyLogo />
          <Box>
            {renderSignInButton()}
            {renderSignUpButton()}
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon sx={{ ml: 2 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileNavigationBar;
