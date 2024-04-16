"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function MobileDownloadApp() {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
        display: { xs: "block", md: "none" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          py: 5,
          px: 4,
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              fontSize: "36px",
            }}
          >
            It&apos;s easier within the apps
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{
              fontSize: "16px",
            }}
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
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" }, pb: 4 }}
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
        {/* <Box
          sx={{
            width: "100%", // responsive width
            height: 0, // responsive height based on width
            paddingTop: "80%", // aspect ratio
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Image
            alt="Landing page image"
            src="/images/download-app.png"
            layout="fill"
            objectFit="cover"
          />
        </Box> */}
      </Container>
    </Box>
  );
}
