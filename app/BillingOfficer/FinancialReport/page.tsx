"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

// TypeScript Model for Admission Bill
interface AdmissionBill {
  id: string;
  patientName: string;
  admissionDate: string;
  totalAmount: number;
  status: "pending" | "paid";
}

export default function FinancialReportPage() {
  // Sample admission bills (Replace with real data later)
  const [bills] = useState<AdmissionBill[]>([
    { id: "1", patientName: "John Doe", admissionDate: "2025-02-10", totalAmount: 900, status: "paid" },
    { id: "2", patientName: "Jane Smith", admissionDate: "2025-02-05", totalAmount: 1230, status: "pending" },
    { id: "3", patientName: "Alice Johnson", admissionDate: "2025-02-15", totalAmount: 850, status: "paid" },
    { id: "4", patientName: "Bob Brown", admissionDate: "2025-02-20", totalAmount: 720, status: "pending" },
  ]);

  // Financial Report Data
  const totalRevenue = bills.reduce((sum, bill) => sum + bill.totalAmount, 0);
  const totalPaid = bills.filter((bill) => bill.status === "paid").reduce((sum, bill) => sum + bill.totalAmount, 0);
  const totalPending = bills.filter((bill) => bill.status === "pending").reduce((sum, bill) => sum + bill.totalAmount, 0);

  // Bar Chart Data
  const barChartData = [
    { name: "Total Revenue", value: totalRevenue },
    { name: "Total Paid", value: totalPaid },
    { name: "Total Pending", value: totalPending },
  ];

  // Pie Chart Data
  const pieChartData = [
    { name: "Paid", value: totalPaid },
    { name: "Pending", value: totalPending },
  ];

  const COLORS = ["#10B981", "#F59E0B"]; // Green for Paid, Yellow for Pending

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Financial Report</h1>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-200 text-green-800 text-center rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Total Revenue</h2>
          <p className="text-xl font-semibold">${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-blue-200 text-blue-800 text-center rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Total Paid</h2>
          <p className="text-xl font-semibold">${totalPaid.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-yellow-200 text-yellow-800 text-center rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Total Pending</h2>
          <p className="text-xl font-semibold">${totalPending.toFixed(2)}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Bar Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-center text-lg font-bold mb-2">Revenue Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-center text-lg font-bold mb-2">Paid vs Pending</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieChartData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" dataKey="value">
                {pieChartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bill Table */}
      {bills.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Patient Name</th>
              <th className="border p-2">Admission Date</th>
              <th className="border p-2">Total Amount</th>
              <th className="border p-2">Status</th>
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
                    bill.status === "paid" ? "text-green-600" : "text-yellow-600"
                  }`}
                >
                  {bill.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No financial data available</p>
      )}
    </div>
  );
}
