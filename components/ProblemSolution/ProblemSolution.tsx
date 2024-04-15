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
import styles from "./problem-solution.module.css";

const ProblemSolution = () => {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
        display: { xs: "none", md: "block" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box>
          <Image
            alt="Landing page image"
            src="/images/problem-solution.png"
            width="500"
            height="450"
            style={{ borderRadius: "40px" }}
          />
        </Box>
        <Stack
          spacing={4}
          useFlexGap
          sx={{ width: { xs: "100%", sm: "70%" }, marginLeft: 16 }}
        >
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
            Cook as you wish,
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 8vw, 3rem)",
                color: "primary.main",
              }}
            >
              earn as you like
            </Typography>
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{
              alignSelf: "left",
              width: { sm: "100%", md: "80%", marginLeft: "8px" },
            }}
          >
            Earn on your terms by creating culinary experiences or meal preps—or
            both. Use your own kitchen or select a professional space through
            Quick Chef.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="right"
            alignItems="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="outlined"
              color="primary"
              endIcon={<ArrowForward />}
            >
              Become a Chef
            </Button>
            <Box>
              <Link href="/login" legacyBehavior>
                <a className={styles.customLink}>
                  Already have an account? Sign In
                </a>
              </Link>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProblemSolution;
