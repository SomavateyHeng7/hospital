"use client";

import React, { useState } from "react";

interface Visit {
  id: number;
  date: string;
  visitNo: string;
  patient: string;
  gender: string;
  age: string;
  type: string;
  referTo: string;
  nurse: string;
  doctor: string;
  register: string;
  modifiedBy: string;
  paymentType: string;
}

const patient: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const visits: Visit[] = [
    {
      id: 1,
      date: "09/12/2024 14:44",
      visitNo: "VIS00167835",
      patient: "PTN00061106 - Doe John",
      gender: "M",
      age: "53y",
      type: "OPD",
      referTo: "OPD Consult",
      nurse: "-",
      doctor: "Dr. Smith",
      register: "Admin",
      modifiedBy: "Admin",
      paymentType: "Cash",
    },
    {
      id: 2,
      date: "09/12/2024 14:40",
      visitNo: "VIS00167834",
      patient: "PTN00048924 - Jane Doe",
      gender: "F",
      age: "22y",
      type: "OPD",
      referTo: "OPD Consult",
      nurse: "-",
      doctor: "Dr. Brown",
      register: "Admin",
      modifiedBy: "Admin",
      paymentType: "Card",
    },
    // Add more sample data here
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredVisits = visits.filter(
    (visit) =>
      visit.visitNo.toLowerCase().includes(search.toLowerCase()) ||
      visit.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Visit List</h1>

      <div className="flex items-center mb-4 space-x-4">
        <input
          type="text"
          placeholder="Search by Visit No or Patient..."
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
            <th className="border border-gray-300 px-4 py-2">Action</th>
            <th className="border border-gray-300 px-4 py-2">No.</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Visit No.</th>
            <th className="border border-gray-300 px-4 py-2">Patient</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Refer to</th>
            <th className="border border-gray-300 px-4 py-2">Nurse</th>
            <th className="border border-gray-300 px-4 py-2">Doctor</th>
            <th className="border border-gray-300 px-4 py-2">Register</th>
            <th className="border border-gray-300 px-4 py-2">Modified By</th>
            <th className="border border-gray-300 px-4 py-2">Payment Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredVisits.map((visit, index) => (
            <tr key={visit.id}>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  Print
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.date}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.visitNo}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.patient}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.gender}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.age}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.type}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.referTo}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.nurse}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.doctor}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.register}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.modifiedBy}</td>
              <td className="border border-gray-300 px-4 py-2">{visit.paymentType}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <p>Showing {filteredVisits.length} of {visits.length} entries</p>
      </div>
    </div>
  );
};

export default patient;
