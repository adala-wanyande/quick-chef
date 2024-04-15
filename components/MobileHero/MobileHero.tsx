"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";

export default function MobileHero() {
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
          py: "40px",
          px: "24px",
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
            Chef-on-Demand
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "36px",
                color: "secondary.main",
              }}
            >
              Gourmet Meals
            </Typography>
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{
              fontSize: "16px",
            }}
          >
            Connect instantly with culinary experts, explore unique cuisines,
            and book a personalized cooking experience.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="left"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, pb: 6 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "160px" }}
              endIcon={<ArrowForward />}
            >
              Book a Chef
            </Button>
          </Stack>
        </Stack>
        <Box
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
            src="/images/hero.png"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Container>
    </Box>
  );
}
