"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Container, Toolbar, Button } from "@mui/material";
import CompanyLogo from "./CompanyLogo";
import NavigationItem from "./NavigationItem";
import ButtonComponent from "./ButtonComponent";
import MobileDrawer from "./MobileDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavigationItem from "./MobileNavigationItem";

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
              <NavigationItem
                section="Home"
                scrollToSection={() => scrollToSection("Home")}
              />
              <NavigationItem
                section="About"
                scrollToSection={() => scrollToSection("About")}
              />
              <NavigationItem
                section="Our Chefs"
                scrollToSection={() => scrollToSection("Our Chefs")}
              />
              <NavigationItem
                section="Cuisine"
                scrollToSection={() => scrollToSection("Cuisine")}
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
              text="Get Started"
              link="/sign-up"
            />
            <ButtonComponent
              color="secondary"
              variant="contained"
              text="Login"
              link="/sign-in"
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
                section="Home"
                scrollToSection={() => scrollToSection("Home")}
              />
              <MobileNavigationItem
                section="About"
                scrollToSection={() => scrollToSection("About")}
              />
              <MobileNavigationItem
                section="Our Chefs"
                scrollToSection={() => scrollToSection("Our Chefs")}
              />
              <MobileNavigationItem
                section="Cuisine"
                scrollToSection={() => scrollToSection("Cuisine")}
              />
            </MobileDrawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
