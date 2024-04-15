"use client";
import React from "react";
import { AppBar, Box, Container, Toolbar, Divider } from "@mui/material";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import NavigationItem from "../NavigationItem/NavigationItem";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const NavigationBar = () => {
  const [open, setOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
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
        display: { xs: "none", md: "block" }, // hides on xs to sm screens
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "999px",
            bgcolor: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(24px)",
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
          <Box sx={{ gap: 0.5, alignItems: "center" }}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
