"use client";

import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const CreatePassword = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Implement password validation and continuation logic here
    console.log("Create password:", password);
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create your account password
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }} color="text.secondary">
          Your password must be at least 8 characters long, and contain at least
          one digit and one non-digit character
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Enter your password"
            type="password"
            name="password"
            autoComplete="new-password"
            autoFocus
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            disabled={password.length === 0}
          >
            Create Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreatePassword;
