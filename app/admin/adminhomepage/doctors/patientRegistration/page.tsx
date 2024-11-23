"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const PatientRegistrationForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    medicalHistory: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormValues({ ...formValues, gender: e.target.value as string });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add form validation here

    // Submit form data to the backend
    console.log("Patient Registered:", formValues);
  };

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Patient Registration Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Name */}
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              variant="outlined"
              fullWidth
              value={formValues.phone}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              variant="outlined"
              fullWidth
              value={formValues.address}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Date of Birth */}
          <Grid item xs={12}>
            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formValues.dob}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Gender */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={formValues.gender}
                onChange={handleSelectChange}
                name="gender"
                required
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Medical History */}
          <Grid item xs={12}>
            <TextField
              label="Medical History"
              name="medicalHistory"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formValues.medicalHistory}
              onChange={handleChange}
              placeholder="Describe any known medical conditions"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register Patient
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default PatientRegistrationForm;