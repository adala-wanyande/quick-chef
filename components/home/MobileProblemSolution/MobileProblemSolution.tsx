"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import styles from "../ProblemSolution/problem-solution.module.css";

const MobileProblemSolution = () => {
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
            Cook as you wish,
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "36px",
                color: "secondary.main",
              }}
            >
              earn as you like
            </Typography>
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{
              fontSize: "16px",
            }}
          >
            Earn on your terms by creating culinary experiences or meal preps—or
            both. Use your own kitchen or select a professional space through
            Quick Chef.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="left"
            alignItems={{ sm: "center" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, pb: 4 }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: "160px", marginBottom: 2 }}
              endIcon={<ArrowForward />}
            >
              Become a Chef
            </Button>
            <Box sx={{ marginBottom: 2 }}>
              <Link href="/login" legacyBehavior>
                <a className={styles.customLink}>
                  Already have an account? Sign In
                </a>
              </Link>
            </Box>
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
            src="/images/problem-solution.png"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MobileProblemSolution;
