"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from "@mui/icons-material/Google"; // Ensure you have this icon
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function Email() {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleContinue = () => {
    // Implement email validation and continuation logic
    console.log("Continue with:", email);
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic
    console.log("Google Sign-In");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          paddingTop: { xs: 8, md: 16, lg: 16 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AlternateEmailIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          What's your email?
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleContinue}
            disabled={!email} // Optionally disable until email is entered
          >
            Continue
          </Button>
          <Button
            startIcon={<GoogleIcon />}
            fullWidth
            variant="outlined"
            sx={{ mt: 1, mb: 2 }}
            onClick={handleGoogleSignIn}
          >
            Continue with Google
          </Button>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 5 }}
          >
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from Quick Chef and its affiliates to
            the number provided.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
