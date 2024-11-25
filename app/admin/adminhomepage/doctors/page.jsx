"use client";

import React, { useState } from "react";
import Sidebar from "@/components/admin/sidebar"; // Sidebar component
import Footer from "@/components/shared/footer";  // Footer component
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const DoctorSessionsPage = () => {
  const mockSessions = [
    { doctorName: "Dr. Alice Johnson", loginTime: "2024-10-20 08:00 AM", logoutTime: "2024-10-20 04:00 PM", sessionDuration: "8 hrs" },
    { doctorName: "Dr. Bob Smith", loginTime: "2024-10-20 09:30 AM", logoutTime: "2024-10-20 05:30 PM", sessionDuration: "8 hrs" },
    { doctorName: "Dr. Carol Lee", loginTime: "2024-10-21 07:00 AM", logoutTime: null, sessionDuration: "In progress" },
  ];

  const [search, setSearch] = useState("");
  const [filteredSessions, setFilteredSessions] = useState(mockSessions);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    const filtered = mockSessions.filter(
      (session) =>
        session.doctorName.toLowerCase().includes(value.toLowerCase()) ||
        session.loginTime.includes(value) ||
        (session.logoutTime && session.logoutTime.includes(value))
    );
    setFilteredSessions(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Row containing Sidebar and Main Content */}
      <Box className="flex flex-row items-start flex-grow">
        {/* Sidebar */}
        <Box className="sticky top-0">
          <Sidebar />
        </Box>
        
        {/* Main Content */}
        <Box className="flex flex-col flex-grow p-6">
          <Typography variant="h4" className="mb-4">
            Doctor Login and Logout Sessions
          </Typography>

          {/* Search Field */}
          <TextField
            label="Search by Doctor Name or Date"
            variant="outlined"
            value={search}
            onChange={handleSearch}
            fullWidth
            sx={{ mb: 4 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Sessions Table */}
          <TableContainer component={Paper} className="flex-grow">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Doctor Name</TableCell>
                  <TableCell>Login Time</TableCell>
                  <TableCell>Logout Time</TableCell>
                  <TableCell>Session Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredSessions.length > 0 ? (
                  filteredSessions.map((session, index) => (
                    <TableRow key={index}>
                      <TableCell>{session.doctorName}</TableCell>
                      <TableCell>{session.loginTime}</TableCell>
                      <TableCell>{session.logoutTime || "Active"}</TableCell>
                      <TableCell>{session.sessionDuration}</TableCell>
                    </TableRow>
                ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No sessions found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Footer */}
          <Footer />
        </Box>
      </Box>
    </div>
  );
};

export default DoctorSessionsPage;
