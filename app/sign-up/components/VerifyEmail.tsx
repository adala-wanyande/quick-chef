"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function VerifyEmail() {
  const [codes, setCodes] = React.useState(["", "", "", ""]);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const inputRefs: React.RefObject<HTMLInputElement>[] = [
    React.useRef<HTMLInputElement>(null),
    React.useRef<HTMLInputElement>(null),
    React.useRef<HTMLInputElement>(null),
    React.useRef<HTMLInputElement>(null),
  ];

  const handleCodeChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCodes = [...codes];
      newCodes[index] = event.target.value.slice(0, 1); // Ensure only one character per field
      setCodes(newCodes);
      setError(false); // Clear error when user starts correcting input
      if (event.target.value !== "" && index < 3) {
        const nextInput = inputRefs[index + 1].current;
        if (nextInput) {
          nextInput.focus(); // Automatically move focus to the next input
        }
      }
    };

  const handleContinue = () => {
    const fullCode = codes.join("");
    if (fullCode.length === 4 && !codes.some((code) => code.length !== 1)) {
      console.log("Verification code entered:", fullCode);
      // Implement actual validation logic with server here
    } else {
      setError(true);
      setErrorMessage("Please fill in all fields correctly.");
    }
  };

  const handleResendCode = () => {
    console.log("Resend verification code");
    // Reset codes and error states
    setCodes(["", "", "", ""]);
    setError(false);
    setErrorMessage("");
    inputRefs[0].current?.focus();
    // Implement resend code logic
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
          <MailOutlineIcon />
        </Avatar>
        <Typography sx={{ m: 1 }} component="h1" variant="h5">
          Enter the 4-digit code sent to you:
        </Typography>
        <Box
          id="bigger"
          component="form"
          noValidate
          sx={{
            m: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {codes.map((code, index) => (
              <TextField
                key={index}
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={`code-${index}`}
                name={`code-${index}`}
                autoComplete="off"
                autoFocus={index === 0}
                inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
                value={code}
                onChange={handleCodeChange(index)}
                inputRef={inputRefs[index]}
                sx={{ width: "22%" }}
                error={error}
              />
            ))}
          </Box>
          {error && (
            <Typography
              color="error"
              sx={{ mt: 2, mb: 1, alignSelf: "center" }}
            >
              {errorMessage}
            </Typography>
          )}
          <Button
            type="button"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: "100%" }}
            onClick={handleContinue}
            disabled={codes.some((code) => code.length !== 1)}
          >
            Continue
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mt: 1, mb: 2 }}
            onClick={handleResendCode}
          >
            Resend Code
          </Button>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 5 }}
          >
            Tip: Make sure to check your inbox and spam folders
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
