"use client";

import React, { useState } from "react";

interface Invoice {
  id: number;
  invoiceNo: string;
  customer: string;
  sex: string;
  age: string;
  amount: string;
  discount: string;
  total: string;
  paid: string;
  paymentType: string;
  remain: string;
  date: string;
  paymentStatus: string;
}

const Finance: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const invoices: Invoice[] = [
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
    // Add more sample data here
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
            <th className="border border-gray-300 px-4 py-2">Action</th>
            <th className="border border-gray-300 px-4 py-2">No.</th>
            <th className="border border-gray-300 px-4 py-2">Invoice</th>
            <th className="border border-gray-300 px-4 py-2">Customer</th>
            <th className="border border-gray-300 px-4 py-2">Sex</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Amount</th>
            <th className="border border-gray-300 px-4 py-2">Discount</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
            <th className="border border-gray-300 px-4 py-2">Paid</th>
            <th className="border border-gray-300 px-4 py-2">Payment Type</th>
            <th className="border border-gray-300 px-4 py-2">Remain</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Payment</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map((invoice, index) => (
            <tr key={invoice.id}>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  Pay All
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.invoiceNo}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.customer}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.sex}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.age}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.amount}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.discount}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.total}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.paid}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.paymentType}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.remain}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.date}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    invoice.paymentStatus === "Unpaid"
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                >
                  {invoice.paymentStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <p>Showing {filteredInvoices.length} of {invoices.length} entries</p>
      </div>
    </div>
  );
};

export default Finance;
