"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "column" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Savour the
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: "secondary.main",
              }}
            >
              Art, 
            </Typography>
            Taste the <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: "secondary.main",
              }}
            >Passion</Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Dive into a world where flavors meet craftmanship. Explore exclusive
            cuisines and connect with our culinary artisans
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Button variant="contained" color="primary">
              Discover Flavours
            </Button>
            <Button variant="outlined" color="primary">
              Meet Our Chefs
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
