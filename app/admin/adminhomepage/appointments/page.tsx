"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  TextField,
  Button,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

interface Appointment {
  id: number;
  date: string;
  time: string;
  doctor: string;
  status: string;
}

interface Patient {
  id: number;
  name: string;
  age: number;
  appointments: Appointment[];
}

const AdminAppointments: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: 1,
      name: "John Doe",
      age: 30,
      appointments: [
        { id: 101, date: "2023-12-01", time: "10:00", doctor: "Dr. Smith", status: "Confirmed" },
        { id: 102, date: "2023-12-15", time: "12:00", doctor: "Dr. Adams", status: "Pending" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      appointments: [
        { id: 201, date: "2023-12-05", time: "09:00", doctor: "Dr. Lee", status: "Cancelled" },
      ],
    },
  ]);

  const [expandedPatientId, setExpandedPatientId] = useState<number | null>(null);

  // State for date and time filters
  const [filterDate, setFilterDate] = useState<string>("");
  const [filterTime, setFilterTime] = useState<string>("");

  // Toggle expand/collapse for appointments
  const toggleExpand = (patientId: number) => {
    setExpandedPatientId(expandedPatientId === patientId ? null : patientId);
  };

  // Filter appointments based on date and time
  const filteredPatients = patients.map((patient) => ({
    ...patient,
    appointments: patient.appointments.filter((appointment) => {
      const matchesDate = filterDate ? appointment.date === filterDate : true;
      const matchesTime = filterTime ? appointment.time === filterTime : true;
      return matchesDate && matchesTime;
    }),
  }));

  return (
    <Box sx={{ maxWidth: "800px", margin: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Patient Appointments
      </Typography>

      {/* Date and Time Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Filter by Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
        <TextField
          label="Filter by Time"
          type="time"
          InputLabelProps={{ shrink: true }}
          value={filterTime}
          onChange={(e) => setFilterTime(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={() => {
          setFilterDate("");
          setFilterTime("");
        }}>
          Clear Filters
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Appointments</TableCell>
              <TableCell>Expand</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPatients.map((patient) => (
              <React.Fragment key={patient.id}>
                <TableRow>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.appointments.length}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => toggleExpand(patient.id)}>
                      {expandedPatientId === patient.id ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </TableCell>
                </TableRow>

                {/* Collapsible section for appointments */}
                <TableRow>
                  <TableCell colSpan={4} style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Collapse in={expandedPatientId === patient.id} timeout="auto" unmountOnExit>
                      <Box margin={2}>
                        <Typography variant="h6" gutterBottom>
                          Appointments for {patient.name}
                        </Typography>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Date</TableCell>
                              <TableCell>Time</TableCell>
                              <TableCell>Doctor</TableCell>
                              <TableCell>Status</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {patient.appointments.map((appointment) => (
                              <TableRow key={appointment.id}>
                                <TableCell>{appointment.date}</TableCell>
                                <TableCell>{appointment.time}</TableCell>
                                <TableCell>{appointment.doctor}</TableCell>
                                <TableCell>{appointment.status}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminAppointments;
