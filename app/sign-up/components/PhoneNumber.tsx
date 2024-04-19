"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  CssBaseline,
  Typography,
  Button,
  Avatar,
  TextField,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneInput from "react-phone-input-material-ui";
import { isPossiblePhoneNumber } from "libphonenumber-js";

const PhoneNumber: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handlePhoneChange = (phone: string | undefined) => {
    setValue(phone || "");
  };

  const handleContinue = () => {
    if (value && isPossiblePhoneNumber(value)) {
      console.log("Phone Number:", value); // Proceed with phone number
    } else {
      console.log("Invalid Phone Number"); // Handle error
    }
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
          <PhoneIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter your phone number
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
          <PhoneInput
            value={value}
            country={"US"} // Updated to 'country' if supported
            onChange={handlePhoneChange}
            component={TextField}
          />
          <Button
            onClick={handleContinue}
            variant="contained"
            disabled={!value || !isPossiblePhoneNumber(value)}
            sx={{ mt: 3, mb: 2, width: "100%" }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PhoneNumber;
