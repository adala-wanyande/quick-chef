"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Container, Toolbar, Button, Divider } from "@mui/material";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import NavigationItem from "../NavigationItem/NavigationItem";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavigationItem from "../MobileNavigationItem/MobileNavigationItem";

const NavigationBar = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
        display: { xs: "none", sm: "block" },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            width: "100%",
            borderColor: "divider",
            boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              px: 0,
            }}
          >
            <CompanyLogo />
            <Box width={40}></Box>
            <Divider orientation="vertical" flexItem />
            <NavigationItem
              section="Book"
              scrollToSection={() => scrollToSection("Book")}
            />
            <Divider orientation="vertical" flexItem />
            <NavigationItem
              section="Join"
              scrollToSection={() => scrollToSection("Join")}
            />
            <Divider orientation="vertical" flexItem />
            <NavigationItem
              section="About"
              scrollToSection={() => scrollToSection("About")}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <ButtonComponent
              color="primary"
              variant="text"
              text="Log in"
              link="/login"
            />
            <ButtonComponent
              color="secondary"
              variant="contained"
              text="Sign up"
              link="/sign-up"
            />
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <MenuIcon />
            </Button>
            <MobileDrawer open={open} toggleDrawer={toggleDrawer}>
              <MobileNavigationItem
                section="Book"
                scrollToSection={() => scrollToSection("Home")}
              />
              <MobileNavigationItem
                section="Join"
                scrollToSection={() => scrollToSection("About")}
              />
              <MobileNavigationItem
                section="About"
                scrollToSection={() => scrollToSection("Our Chefs")}
              />
            </MobileDrawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
