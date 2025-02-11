"use client";

import { useState } from "react";

// TypeScript Model for Admission Bill
interface AdmissionBill {
  id: string;
  patientName: string;
  admissionDate: string;
  dischargeDate?: string;
  roomCharge: number;
  doctorFees: number;
  medicineCharges: number;
  otherCharges?: number;
  totalAmount: number;
  status: "pending" | "paid";
}

export default function AdmissionBillPage() {
  // Sample admission bills (Replace with real data later)
  const [bills] = useState<AdmissionBill[]>([
    {
      id: "1",
      patientName: "John Doe",
      admissionDate: "2025-02-10",
      dischargeDate: "2025-02-15",
      roomCharge: 500,
      doctorFees: 200,
      medicineCharges: 150,
      otherCharges: 50,
      totalAmount: 900,
      status: "paid",
    },
    {
      id: "2",
      patientName: "Jane Smith",
      admissionDate: "2025-02-05",
      dischargeDate: "2025-02-12",
      roomCharge: 700,
      doctorFees: 250,
      medicineCharges: 180,
      otherCharges: 100,
      totalAmount: 1230,
      status: "pending",
    },
  ]);

  // State for modal
  const [selectedBill, setSelectedBill] = useState<AdmissionBill | null>(null);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Admission Bills</h1>

      {/* Bill Table */}
      {bills.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Patient Name</th>
              <th className="border p-2">Admission Date</th>
              <th className="border p-2">Total Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id} className="text-center hover:bg-gray-100">
                <td className="border p-2">{bill.patientName}</td>
                <td className="border p-2">{bill.admissionDate}</td>
                <td className="border p-2 font-semibold">${bill.totalAmount.toFixed(2)}</td>
                <td
                  className={`border p-2 font-semibold ${
                    bill.status === "paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {bill.status}
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => setSelectedBill(bill)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No bills available</p>
      )}

      {/* Modal for Bill Details */}
      {selectedBill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Bill Details</h2>
            <p><strong>Patient:</strong> {selectedBill.patientName}</p>
            <p><strong>Admission Date:</strong> {selectedBill.admissionDate}</p>
            <p><strong>Discharge Date:</strong> {selectedBill.dischargeDate || "N/A"}</p>
            <hr className="my-2" />
            <p><strong>Room Charge:</strong> ${selectedBill.roomCharge.toFixed(2)}</p>
            <p><strong>Doctor Fees:</strong> ${selectedBill.doctorFees.toFixed(2)}</p>
            <p><strong>Medicine Charges:</strong> ${selectedBill.medicineCharges.toFixed(2)}</p>
            {selectedBill.otherCharges && <p><strong>Other Charges:</strong> ${selectedBill.otherCharges.toFixed(2)}</p>}
            <hr className="my-2" />
            <p className="font-bold text-lg">Total: ${selectedBill.totalAmount.toFixed(2)}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setSelectedBill(null)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
