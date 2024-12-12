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
  TextField,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { Add, ArrowBack } from "@mui/icons-material";

interface Service {
  id: number;
  name: string;
  cost: number;
}

interface Bill {
  id: number;
  patientName: string;
  services: Service[];
  discount: number;
  paidAmount: number;
  isPaid: boolean;
}

const BillingSystem: React.FC = () => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [viewingBill, setViewingBill] = useState<Bill | null>(null);
  const [newBill, setNewBill] = useState<Bill>({
    id: Date.now(),
    patientName: "",
    services: [],
    discount: 0,
    paidAmount: 0,
    isPaid: false,
  });

  const [serviceName, setServiceName] = useState("");
  const [serviceCost, setServiceCost] = useState<number | "">("");

  // Calculate total and discounted totals
  const totalCost = newBill.services.reduce((total, service) => total + service.cost, 0);
  const discountedTotal = totalCost - (totalCost * newBill.discount) / 100;

  // Add new service to the bill
  const handleAddService = () => {
    if (serviceName && serviceCost) {
      setNewBill({
        ...newBill,
        services: [
          ...newBill.services,
          { id: Date.now(), name: serviceName, cost: Number(serviceCost) },
        ],
      });
      setServiceName("");
      setServiceCost("");
    }
  };

  // Save the new bill and reset form
  const handleSaveBill = () => {
    setBills([...bills, { ...newBill, id: Date.now(), isPaid: newBill.paidAmount >= discountedTotal }]);
    setNewBill({
      id: Date.now(),
      patientName: "",
      services: [],
      discount: 0,
      paidAmount: 0,
      isPaid: false,
    });
  };

  // View details of an existing bill
  const handleViewBill = (bill: Bill) => {
    setViewingBill(bill);
  };

  return (
    <Box sx={{ maxWidth: "800px", margin: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Hospital Billing System
      </Typography>

      {viewingBill ? (
        // Bill Details View
        <Box>
          <IconButton onClick={() => setViewingBill(null)}>
            <ArrowBack /> Go Back
          </IconButton>
          <Typography variant="h5">Bill Details</Typography>
          <Typography>Patient: {viewingBill.patientName}</Typography>
          <Typography>Total Services: {viewingBill.services.length}</Typography>
          <Typography>Total Cost: ${totalCost.toFixed(2)}</Typography>
          <Typography>Discount: {viewingBill.discount}%</Typography>
          <Typography>Amount Paid: ${viewingBill.paidAmount.toFixed(2)}</Typography>
          <Typography>Status: {viewingBill.isPaid ? "Paid" : "Unpaid"}</Typography>
        </Box>
      ) : (
        <>
          {/* All Bills List */}
          <Box mb={4}>
            <Typography variant="h5" gutterBottom>
              All Bills
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Patient Name</TableCell>
                    <TableCell>Total Cost</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bills.map((bill) => (
                    <TableRow key={bill.id}>
                      <TableCell>{bill.patientName}</TableCell>
                      <TableCell>
                        ${bill.services.reduce((total, service) => total + service.cost, 0).toFixed(2)}
                      </TableCell>
                      <TableCell>{bill.isPaid ? "Yes" : "No"}</TableCell>
                      <TableCell>
                        <Button variant="outlined" onClick={() => handleViewBill(bill)}>
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* New Bill Form */}
          <Box>
            <Typography variant="h5" gutterBottom>
              Create New Bill
            </Typography>
            <TextField
              label="Patient Name"
              variant="outlined"
              fullWidth
              value={newBill.patientName}
              onChange={(e) => setNewBill({ ...newBill, patientName: e.target.value })}
              sx={{ mb: 2 }}
            />

            {/* Add Services */}
            <Box display="flex" gap={2} mb={2}>
              <TextField
                label="Service Name"
                variant="outlined"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
              />
              <TextField
                label="Cost"
                variant="outlined"
                type="number"
                value={serviceCost}
                onChange={(e) => setServiceCost(e.target.value ? parseFloat(e.target.value) : "")}
              />
              <Button variant="contained" onClick={handleAddService}>
                Add Service
              </Button>
            </Box>

            {/* Display Services */}
            <TableContainer component={Paper} sx={{ mb: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Service</TableCell>
                    <TableCell>Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {newBill.services.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell>{service.name}</TableCell>
                      <TableCell>${service.cost.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell><strong>Total</strong></TableCell>
                    <TableCell><strong>${totalCost.toFixed(2)}</strong></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* Discount and Payment */}
            <Box display="flex" gap={2} mb={2}>
              <TextField
                label="Discount (%)"
                type="number"
                variant="outlined"
                value={newBill.discount}
                onChange={(e) => setNewBill({ ...newBill, discount: parseFloat(e.target.value) || 0 })}
              />
              <TextField
                label="Amount Paid"
                type="number"
                variant="outlined"
                value={newBill.paidAmount}
                onChange={(e) => setNewBill({ ...newBill, paidAmount: parseFloat(e.target.value) || 0 })}
              />
            </Box>
            <Typography>Discounted Total: ${discountedTotal.toFixed(2)}</Typography>

            {/* Save New Bill */}
            <Button variant="contained" color="primary" onClick={handleSaveBill} sx={{ mt: 2 }}>
              Save Bill
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default BillingSystem;
