"use client";

import { useState } from "react";

// TypeScript Model for Pharmacy Bill
interface PharmacyBill {
  id: string;
  patientName: string;
  date: string;
  medicines: {
    name: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: "pending" | "paid";
}

export default function PharmacyBillPage() {
  // Sample pharmacy bills (Replace with real data later)
  const [bills] = useState<PharmacyBill[]>([
    {
      id: "1",
      patientName: "John Doe",
      date: "2025-02-10",
      medicines: [
        { name: "Paracetamol", quantity: 2, price: 5 },
        { name: "Ibuprofen", quantity: 1, price: 8 },
        { name: "Cough Syrup", quantity: 1, price: 10 },
      ],
      totalAmount: 28,
      status: "paid",
    },
    {
      id: "2",
      patientName: "Jane Smith",
      date: "2025-02-12",
      medicines: [
        { name: "Amoxicillin", quantity: 3, price: 6 },
        { name: "Vitamin C", quantity: 2, price: 4 },
      ],
      totalAmount: 26,
      status: "pending",
    },
  ]);

  // State for modal
  const [selectedBill, setSelectedBill] = useState<PharmacyBill | null>(null);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Pharmacy Bills</h1>

      {/* Bill Table */}
      {bills.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Patient Name</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Total Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id} className="text-center hover:bg-gray-100">
                <td className="border p-2">{bill.patientName}</td>
                <td className="border p-2">{bill.date}</td>
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
        <p className="text-center text-gray-500">No pharmacy bills available</p>
      )}

      {/* Modal for Bill Details */}
      {selectedBill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Pharmacy Bill Details</h2>
            <p><strong>Patient:</strong> {selectedBill.patientName}</p>
            <p><strong>Date:</strong> {selectedBill.date}</p>
            <hr className="my-2" />
            <h3 className="text-lg font-semibold">Medicines Purchased</h3>
            <ul className="list-disc list-inside">
              {selectedBill.medicines.map((med, index) => (
                <li key={index}>
                  {med.name} - {med.quantity} × ${med.price.toFixed(2)} = ${(
                    med.quantity * med.price
                  ).toFixed(2)}
                </li>
              ))}
            </ul>
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
