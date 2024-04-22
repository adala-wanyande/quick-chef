"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        display: { xs: "none", md: "block" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "top",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ width: { xs: "100%", sm: "70%" }, paddingX: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "column" },
              alignSelf: "left",
              textAlign: "left",
              width: "100%",
              fontSize: "clamp(3rem, 8vw, 3rem)",
            }}
          >
            It&apos;s easier in the apps
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{ alignSelf: "left", width: { sm: "100%", md: "80%" } }}
          >
            With Quick Chef, gourmet dining is just a tap away. Simply open the
            app, choose your menu, and a local culinary expert will bring the
            restaurant experience right to your home.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "column" }}
            alignSelf="left"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              sx={{ width: "200px", marginBottom: 1 }}
              variant="contained"
              color="primary"
            >
              Get it on Google Play
            </Button>
            <Button
              sx={{ width: "250px" }}
              variant="contained"
              color="secondary"
            >
              Download on the App Store
            </Button>
          </Stack>
        </Stack>
        <Box>
          <Image
            alt="Landing page image"
            src="/images/download-app.png"
            width="400"
            height="400"
            style={{ borderRadius: "40px" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default DownloadApp;
