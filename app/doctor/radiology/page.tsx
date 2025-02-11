"use client";

import React, { useState } from "react";

interface RadiologyRequest {
  id: number;
  patient: string;
  modality: string;
  examType: string;
  doctor: string;
  priority: string;
  status: string;
  requestedDate: string;
  scheduledDate: string;
}

const RadiologyManagement: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const radiologyRequests: RadiologyRequest[] = [
    {
      id: 1,
      patient: "PTN00061106 - John Doe",
      modality: "MRI",
      examType: "Brain Scan",
      doctor: "Dr. Smith",
      priority: "High",
      status: "Scheduled",
      requestedDate: "09/12/2024 10:00",
      scheduledDate: "10/12/2024 15:00",
    },
    {
      id: 2,
      patient: "PTN00048924 - Jane Doe",
      modality: "X-Ray",
      examType: "Chest Scan",
      doctor: "Dr. Brown",
      priority: "Medium",
      status: "Completed",
      requestedDate: "08/12/2024 09:30",
      scheduledDate: "08/12/2024 14:00",
    },
    // Add more sample data here
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredRequests = radiologyRequests.filter(
    (request) =>
      request.patient.toLowerCase().includes(search.toLowerCase()) ||
      request.modality.toLowerCase().includes(search.toLowerCase()) ||
      request.examType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Radiology Management</h1>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
          <h2 className="text-lg font-bold">Total Requests</h2>
          <p className="text-xl">{radiologyRequests.length}</p>
        </div>
        <div className="p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-lg font-bold">Completed</h2>
          <p className="text-xl">
            {radiologyRequests.filter((r) => r.status === "Completed").length}
          </p>
        </div>
        <div className="p-4 bg-blue-100 border border-blue-400 rounded">
          <h2 className="text-lg font-bold">Scheduled</h2>
          <p className="text-xl">
            {radiologyRequests.filter((r) => r.status === "Scheduled").length}
          </p>
        </div>
      </div>

      <div className="flex items-center mb-4 space-x-4">
        <input
          type="text"
          placeholder="Search by Patient, Modality, or Exam Type..."
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 rounded p-2 w-full max-w-md"
        />
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Clear Filters
        </button>
      </div>

      <table className="table-auto border-collapse border border-gray-200 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Patient</th>
            <th className="border border-gray-300 px-4 py-2">Modality</th>
            <th className="border border-gray-300 px-4 py-2">Exam Type</th>
            <th className="border border-gray-300 px-4 py-2">Doctor</th>
            <th className="border border-gray-300 px-4 py-2">Priority</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Requested Date</th>
            <th className="border border-gray-300 px-4 py-2">Scheduled Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request) => (
            <tr key={request.id}>
              <td className="border border-gray-300 px-4 py-2">{request.patient}</td>
              <td className="border border-gray-300 px-4 py-2">{request.modality}</td>
              <td className="border border-gray-300 px-4 py-2">{request.examType}</td>
              <td className="border border-gray-300 px-4 py-2">{request.doctor}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    request.priority === "High"
                      ? "bg-red-500"
                      : request.priority === "Medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {request.priority}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    request.status === "Scheduled"
                      ? "bg-blue-500"
                      : "bg-green-500"
                  }`}
                >
                  {request.status}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">{request.requestedDate}</td>
              <td className="border border-gray-300 px-4 py-2">{request.scheduledDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <p>Showing {filteredRequests.length} of {radiologyRequests.length} entries</p>
      </div>
    </div>
  );
};

export default RadiologyManagement;
