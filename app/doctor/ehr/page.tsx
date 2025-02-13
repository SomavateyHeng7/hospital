"use client";

import React, { useState } from "react";

interface PatientRecord {
  id: number;
  patientID: string;
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
  medications: string;
  visitDate: string;
  status: string;
}

const EHR: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedPatient, setSelectedPatient] = useState<PatientRecord | null>(null);

  const patientRecords: PatientRecord[] = [
    {
      id: 1,
      patientID: "PTN0001",
      name: "John Doe",
      age: 45,
      gender: "Male",
      diagnosis: "Hypertension",
      medications: "Amlodipine 10mg",
      visitDate: "2024-01-15",
      status: "Recovered",
    },
    {
      id: 2,
      patientID: "PTN0002",
      name: "Jane Smith",
      age: 30,
      gender: "Female",
      diagnosis: "Diabetes Type 2",
      medications: "Metformin 500mg",
      visitDate: "2024-02-05",
      status: "Under Treatment",
    },
    {
      id: 3,
      patientID: "PTN0003",
      name: "Michael Johnson",
      age: 55,
      gender: "Male",
      diagnosis: "Heart Disease",
      medications: "Atorvastatin 20mg",
      visitDate: "2024-01-20",
      status: "Critical",
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

  // Filtered & Sorted Data
  const filteredRecords = patientRecords
    .filter(
      (record) =>
        (statusFilter === "All" || record.status === statusFilter) &&
        (record.name.toLowerCase().includes(search.toLowerCase()) ||
          record.patientID.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Electronic Health Records (EHR)</h1>

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
          <option value="Recovered">Recovered</option>
          <option value="Under Treatment">Under Treatment</option>
          <option value="Critical">Critical</option>
        </select>
      </div>

      {/* Table */}
      <table className="table-auto border-collapse border border-gray-200 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Patient ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Diagnosis</th>
            <th className="border border-gray-300 px-4 py-2">Visit Date</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record) => (
            <tr key={record.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{record.patientID}</td>
              <td className="border border-gray-300 px-4 py-2">{record.name}</td>
              <td className="border border-gray-300 px-4 py-2">{record.age}</td>
              <td className="border border-gray-300 px-4 py-2">{record.gender}</td>
              <td className="border border-gray-300 px-4 py-2">{record.diagnosis}</td>
              <td className="border border-gray-300 px-4 py-2">{record.visitDate}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    record.status === "Recovered"
                      ? "bg-green-500"
                      : record.status === "Under Treatment"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {record.status}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() => setSelectedPatient(record)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-2">Patient History</h2>
            <p><strong>Patient ID:</strong> {selectedPatient.patientID}</p>
            <p><strong>Name:</strong> {selectedPatient.name}</p>
            <p><strong>Age:</strong> {selectedPatient.age}</p>
            <p><strong>Gender:</strong> {selectedPatient.gender}</p>
            <p><strong>Diagnosis:</strong> {selectedPatient.diagnosis}</p>
            <p><strong>Medications:</strong> {selectedPatient.medications}</p>
            <p><strong>Visit Date:</strong> {selectedPatient.visitDate}</p>
            <p><strong>Status:</strong> {selectedPatient.status}</p>

            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setSelectedPatient(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EHR;
