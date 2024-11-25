"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Medicine {
  id: number;
  name: string;
  stock: number;
  expiryDate: string;
}

const MedicineInventoryPage: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([
    { id: 1, name: "Paracetamol", stock: 100, expiryDate: "2025-08-21" },
    { id: 2, name: "Aspirin", stock: 50, expiryDate: "2024-02-12" },
    { id: 3, name: "Ibuprofen", stock: 200, expiryDate: "2023-11-30" },
  ]);

  const [newMedicine, setNewMedicine] = useState<Medicine>({
    id: 0,
    name: "",
    stock: 0,
    expiryDate: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  };

  // Add or update medicine
  const handleAddOrUpdateMedicine = () => {
    if (isEditing) {
      // Update existing medicine
      setMedicines((prevMedicines) =>
        prevMedicines.map((medicine) =>
          medicine.id === newMedicine.id ? newMedicine : medicine
        )
      );
      setIsEditing(false); // Reset edit mode
    } else {
      // Add new medicine
      setMedicines([...medicines, { ...newMedicine, id: Date.now() }]);
    }
    // Clear the form
    setNewMedicine({ id: 0, name: "", stock: 0, expiryDate: "" });
  };

  // Remove medicine
  const handleRemoveMedicine = (id: number) => {
    setMedicines(medicines.filter((medicine) => medicine.id !== id));
  };

  // Edit medicine
  const handleEditMedicine = (medicine: Medicine) => {
    setNewMedicine(medicine);
    setIsEditing(true);
  };

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Medicine Inventory
      </Typography>

      {/* Medicine Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines.map((medicine) => (
              <TableRow key={medicine.id}>
                <TableCell>{medicine.name}</TableCell>
                <TableCell>{medicine.stock}</TableCell>
                <TableCell>{medicine.expiryDate}</TableCell>
                <TableCell>
                  <IconButton
                    color="secondary"
                    onClick={() => handleRemoveMedicine(medicine.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditMedicine(medicine)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Form to Add or Update Medicine */}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          {isEditing ? "Edit Medicine" : "Add New Medicine"}
        </Typography>
        <Grid container spacing={3}>
          {/* Medicine Name */}
          <Grid item xs={12} sm={4}>
            <TextField
              label="Medicine Name"
              name="name"
              variant="outlined"
              fullWidth
              value={newMedicine.name}
              onChange={handleInputChange}
              required
            />
          </Grid>

          {/* Medicine Stock */}
          <Grid item xs={12} sm={4}>
            <TextField
              label="Stock"
              name="stock"
              type="number"
              variant="outlined"
              fullWidth
              value={newMedicine.stock}
              onChange={handleInputChange}
              required
            />
          </Grid>

          {/* Expiry Date */}
          <Grid item xs={12} sm={4}>
            <TextField
              label="Expiry Date"
              name="expiryDate"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={newMedicine.expiryDate}
              onChange={handleInputChange}
              required
            />
          </Grid>

          {/* Add or Update Medicine Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddOrUpdateMedicine}
            >
              {isEditing ? "Update Medicine" : "Add Medicine"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MedicineInventoryPage;
