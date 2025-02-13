"use client";

import React, { useState } from "react";

interface PatientCheckout {
  id: number;
  patientID: string;
  name: string;
  age: number;
  gender: string;
  roomNumber: string;
  checkoutDate: string;
  totalBill: string;
  status: string;
}

const PatientCheckoutForm: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedPatient, setSelectedPatient] = useState<PatientCheckout | null>(null);

  const checkoutRequests: PatientCheckout[] = [
    {
      id: 1,
      patientID: "PTN0001",
      name: "John Doe",
      age: 45,
      gender: "Male",
      roomNumber: "301",
      checkoutDate: "2024-02-10",
      totalBill: "$1,500",
      status: "Pending",
    },
    {
      id: 2,
      patientID: "PTN0002",
      name: "Jane Smith",
      age: 30,
      gender: "Female",
      roomNumber: "202",
      checkoutDate: "2024-02-09",
      totalBill: "$3,200",
      status: "Billed",
    },
    {
      id: 3,
      patientID: "PTN0003",
      name: "Michael Johnson",
      age: 55,
      gender: "Male",
      roomNumber: "105",
      checkoutDate: "2024-02-08",
      totalBill: "$2,800",
      status: "Discharged",
    },
  ];

  // Handle Search Input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Handle Status Filter Change
  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  // Handle Approve Checkout
  const handleApprove = (id: number) => {
    setSelectedPatient(null);
    alert(`Patient Checkout Approved for ID: ${id}`);
  };

  // Handle Reject Checkout
  const handleReject = (id: number) => {
    setSelectedPatient(null);
    alert(`Patient Checkout Rejected for ID: ${id}`);
  };

  // Filter Data
  const filteredCheckouts = checkoutRequests
    .filter(
      (checkout) =>
        (statusFilter === "All" || checkout.status === statusFilter) &&
        (checkout.name.toLowerCase().includes(search.toLowerCase()) ||
          checkout.patientID.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Checkout Requests</h1>

      {/* Search & Filter */}
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Patient Name or ID..."
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 rounded p-2 w-full max-w-md"
        />
        <select
          className="border border-gray-300 rounded p-2"
          value={statusFilter}
          onChange={handleStatusFilter}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Billed">Billed</option>
          <option value="Discharged">Discharged</option>
          <option value="Unpaid">Unpaid</option>
        </select>
      </div>

      {/* Table */}
      <table className="table-auto border-collapse border border-gray-200 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Patient ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Room</th>
            <th className="border border-gray-300 px-4 py-2">Checkout Date</th>
            <th className="border border-gray-300 px-4 py-2">Total Bill</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCheckouts.map((checkout) => (
            <tr key={checkout.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{checkout.patientID}</td>
              <td className="border border-gray-300 px-4 py-2">{checkout.name}</td>
              <td className="border border-gray-300 px-4 py-2">{checkout.roomNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{checkout.checkoutDate}</td>
              <td className="border border-gray-300 px-4 py-2">{checkout.totalBill}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    checkout.status === "Pending"
                      ? "bg-yellow-500"
                      : checkout.status === "Billed"
                      ? "bg-blue-500"
                      : checkout.status === "Discharged"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {checkout.status}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                  onClick={() => setSelectedPatient(checkout)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Patient Checkout Details Modal */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-2">Checkout Details</h2>
            <p><strong>Patient ID:</strong> {selectedPatient.patientID}</p>
            <p><strong>Name:</strong> {selectedPatient.name}</p>
            <p><strong>Age:</strong> {selectedPatient.age}</p>
            <p><strong>Gender:</strong> {selectedPatient.gender}</p>
            <p><strong>Room:</strong> {selectedPatient.roomNumber}</p>
            <p><strong>Checkout Date:</strong> {selectedPatient.checkoutDate}</p>
            <p><strong>Total Bill:</strong> {selectedPatient.totalBill}</p>
            <p><strong>Status:</strong> {selectedPatient.status}</p>

            <div className="mt-4 flex justify-between">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => handleApprove(selectedPatient.id)}
              >
                Approve
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleReject(selectedPatient.id)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientCheckoutForm;
