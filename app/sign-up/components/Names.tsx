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
import PersonIcon from "@mui/icons-material/Person";

const Names = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleSubmit = () => {
    // Implement the submit logic here, e.g., sending the data to a server or transitioning to another view
    console.log("First Name:", firstName, "Last Name:", lastName);
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
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          What's your name?
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }} color="text.secondary">
          Let us know how to properly address you
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first-name"
            label="Enter first name"
            name="first-name"
            autoComplete="given-name"
            autoFocus
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last-name"
            label="Enter last name"
            name="last-name"
            autoComplete="family-name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            disabled={firstName.trim() === "" || lastName.trim() === ""}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Names;
