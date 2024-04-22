"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from "@mui/icons-material/Google";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

interface EmailProps {
  onNext: () => void;
  onChange: (email: string) => void;
}

const Email: React.FC<EmailProps> = ({ onNext, onChange }) => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    onChange(newEmail);
    if (emailError) setEmailError("");
  };

  const handleContinue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      console.log("Continue with:", email);
      onNext();
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In");
    // Implement Google Sign-In logic here
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
        <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
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
            error={!!emailError}
            helperText={emailError}
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
        </Box>
      </Box>
    </Container>
  );
};

export default Email;
