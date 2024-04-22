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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import * as yup from "yup";

// TypeScript props definition
interface CreatePasswordProps {
  onNext: (password: string) => void;
  onBack: () => void;
  onChange: (password: string) => void;
}

const CreatePassword: React.FC<CreatePasswordProps> = ({
  onNext,
  onBack,
  onChange,
}) => {
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(/\d/, "Password must contain at least one digit")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one non-alphanumeric character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Create password:", values.password);
      onNext(values.password);
    },
  });

  // Enhanced change handler
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
    formik.handleChange(event); // Update Formik state
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
          Your password must meet the criteria described.
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
            id="password"
            label="Enter your password"
            type="password"
            name="password"
            autoComplete="new-password"
            autoFocus
            value={formik.values.password}
            onChange={handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Create Password
          </Button>
          <Button onClick={onBack} fullWidth variant="text" sx={{ mt: 1 }}>
            Back
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreatePassword;
