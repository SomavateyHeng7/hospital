"use client";

import React, { useState } from "react";
import {
  FaFileInvoice, FaFileMedical, FaMoneyBill, FaCapsules, FaSignOutAlt
} from "react-icons/fa";

// Sidebar Menu Items
const menuItems = [
  { name: "Admission Bill", icon: <FaFileMedical />, id: "admission-bill" },
  { name: "Financial Report", icon: <FaMoneyBill />, id: "financial-report" },
  { name: "Invoice", icon: <FaFileInvoice />, id: "invoice" },
  { name: "Pharmacy Bill", icon: <FaCapsules />, id: "pharmacy-bill" },
];

const FinanceDashboard: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("invoice");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col p-4">
        {/* Logo & Hospital Name */}
        <div className="flex flex-col items-center mb-6">
          <img src="/hospital-logo.png" alt="Hospital Logo" className="w-16 h-16 rounded-full border" />
          <h1 className="text-lg font-bold mt-2">Hospital Name</h1>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 p-3 text-gray-700 rounded-lg cursor-pointer transition ${
                activePage === item.id ? "bg-gray-200 text-black" : "hover:bg-gray-100"
              }`}
              onClick={() => setActivePage(item.id)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </nav>

        {/* Sign Out Button */}
        <button className="mt-6 w-full bg-red-600 text-white flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-red-700">
          <FaSignOutAlt />
          SIGN OUT
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activePage === "admission-bill" && <AdmissionBill />}
        {activePage === "financial-report" && <FinancialReport />}
        {activePage === "invoice" && <Invoice />}
        {activePage === "pharmacy-bill" && <PharmacyBill />}
      </div>
    </div>
  );
};

// Dummy Components for Each Page (Replace with Real Content)
const AdmissionBill = () => <h1 className="text-2xl font-bold">Admission Bill Page</h1>;
const FinancialReport = () => <h1 className="text-2xl font-bold">Financial Report Page</h1>;

// Invoice Component (Your Original Finance Component)
const Invoice: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const invoices = [
    {
      id: 1,
      invoiceNo: "INV00115403",
      customer: "PTN00061106 - John Doe (OPD)",
      sex: "M",
      age: "53y",
      amount: "KHR 20,000",
      discount: "KHR 0",
      total: "KHR 20,000",
      paid: "KHR 0",
      paymentType: "Cash",
      remain: "KHR 20,000",
      date: "09/12/2024 14:44",
      paymentStatus: "Unpaid",
    },
    {
      id: 2,
      invoiceNo: "INV00115402",
      customer: "PTN00048924 - Jane Doe (OPD)",
      sex: "F",
      age: "22y",
      amount: "KHR 20,000",
      discount: "KHR 0",
      total: "KHR 20,000",
      paid: "KHR 0",
      paymentType: "Cash",
      remain: "KHR 20,000",
      date: "09/12/2024 14:40",
      paymentStatus: "Unpaid",
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.invoiceNo.toLowerCase().includes(search.toLowerCase()) ||
      invoice.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Invoice List</h1>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
          <h2 className="text-lg font-bold">Total</h2>
          <p className="text-xl">KHR 964,000</p>
        </div>
        <div className="p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-lg font-bold">Total Paid</h2>
          <p className="text-xl">KHR 188,000</p>
        </div>
        <div className="p-4 bg-red-100 border border-red-400 rounded">
          <h2 className="text-lg font-bold">Total Remain</h2>
          <p className="text-xl">KHR 776,000</p>
        </div>
      </div>

      <div className="flex items-center mb-4 space-x-4">
        <input
          type="text"
          placeholder="Search by Invoice No or Customer..."
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 rounded p-2 w-full max-w-md"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Actions
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Clear Filters
        </button>
      </div>

      <table className="table-auto border-collapse border border-gray-200 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Invoice No</th>
            <th className="border border-gray-300 px-4 py-2">Customer</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
            <th className="border border-gray-300 px-4 py-2">Paid</th>
            <th className="border border-gray-300 px-4 py-2">Remaining</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className="border border-gray-300 px-4 py-2">{invoice.invoiceNo}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.customer}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.total}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.paid}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.remain}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.date}</td>
              <td className={`border px-4 py-2 text-white ${invoice.paymentStatus === "Unpaid" ? "bg-red-500" : "bg-green-500"}`}>
                {invoice.paymentStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Placeholder for Pharmacy Bill
const PharmacyBill = () => <h1 className="text-2xl font-bold">Pharmacy Bill Page</h1>;

export default FinanceDashboard;
