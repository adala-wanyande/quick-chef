"use client";

import React from "react";
import {
  Container,
  Box,
  CssBaseline,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useFormik } from "formik";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

// Define the validation schema
const validationSchema = yup.object({
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numeric characters are allowed")
    .min(10, "Phone number should be of minimum 10 digits length")
    .max(15, "Phone number should not exceed 15 digits"), // Adjusted max length
});

// Component implementation
const PhoneNumber: React.FC<PhoneNumberProps> = ({
  onNext,
  onBack,
  onChange,
}) => {
  const formik = useFormik({
    initialValues: { phone: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Phone Number:", values.phone);
      onNext(values.phone); // Call onNext with the phone number
    },
  });

  // Handle changes specifically to propagate to parent components if needed
  const handlePhoneChange = (value: string) => {
    formik.setFieldValue("phone", value);
    onChange(value); // Propagate changes up
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
          <PhoneIcon />
        </Avatar>
        <Typography sx={{ m: 1 }} component="h1" variant="h5">
          Enter your phone number
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ m: 1, width: "100%" }}
        >
          <PhoneInput
            country="US"
            value={formik.values.phone}
            onChange={handlePhoneChange}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            inputStyle={{ width: "100%", fontFamily: "Jost" }}
          />
          {formik.touched.phone && formik.errors.phone && (
            <Typography color="error" sx={{ mt: 2 }}>
              {formik.errors.phone}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            disabled={formik.isSubmitting || !formik.isValid}
            sx={{ mt: 3, mb: 2, width: "100%" }}
          >
            Continue
          </Button>
          <Button
            variant="outlined"
            onClick={onBack}
            sx={{ mt: 1, mb: 2, width: "100%" }}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PhoneNumber;
