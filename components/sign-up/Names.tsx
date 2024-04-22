"use client";

import React from "react";
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
import { useFormik } from "formik";
import * as yup from "yup";

// Define an interface for the component props
interface NamesProps {
  onFinish: (values: { firstName: string; lastName: string }) => void;
  onBack: () => void;
  onChange: (field: string, value: any) => void;
}

// Component implementation with TypeScript
const Names: React.FC<NamesProps> = ({ onFinish, onBack, onChange }) => {
  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required("First name is required")
      .matches(
        /^[a-zA-Z\s'-]+$/,
        "First name can only contain letters, spaces, apostrophes, and dashes"
      ),
    lastName: yup
      .string()
      .required("Last name is required")
      .matches(
        /^[a-zA-Z\s'-]+$/,
        "Last name can only contain letters, spaces, apostrophes, and dashes"
      ),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(
        "First Name:",
        values.firstName,
        "Last Name:",
        values.lastName
      );
      onFinish(values); // Pass the values to the onFinish callback
    },
    validateOnChange: true, // Ensure validation runs on change
  });

  // Enhanced change handler to incorporate custom onChange logic
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value); // Propagate changes up
    formik.handleChange(event); // Standard Formik change handling
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
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Enter first name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            value={formik.values.firstName}
            onChange={handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Enter last name"
            name="lastName"
            autoComplete="family-name"
            value={formik.values.lastName}
            onChange={handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </Button>
          <Button fullWidth variant="outlined" onClick={onBack} sx={{ mt: 1 }}>
            Back
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Names;
