"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";

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
          width: "100%",
          flexDirection: "row",
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
              alignSelf: "left",
              textAlign: "left",
              width: "100%",
              fontSize: "clamp(3rem, 8vw, 3rem)",
            }}
          >
            Chef-on-Demand,
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 8vw, 3rem)",
                color: "secondary.main",
              }}
            >
              Gourmet Meals
            </Typography>
            Crafted in
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 8vw, 3rem)",
                color: "secondary.main",
              }}
            >
              Your Kitchen
            </Typography>
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{ alignSelf: "left", width: { sm: "100%", md: "80%" } }}
          >
            Connect instantly with culinary experts, explore unique cuisines, and book a
            personalized cooking experience. Download now to transform your
            meals into culinary adventures.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="left"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Button variant="contained" color="primary" endIcon={<ArrowForward />}>
              Book a Chef
            </Button>
          </Stack>
        </Stack>
        <Box>
          <Image
            alt="Landing page image"
            src="/images/hero.png"
            width="500"
            height="500"
            style={{ borderRadius: "40px" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
