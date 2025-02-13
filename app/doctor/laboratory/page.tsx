"use client";

import React, { useState } from "react";

interface RequestSample {
  id: number;
  code: string;
  labCode: string;
  patient: string;
  requestedBy: string;
  requestedDate: string;
  fromSpecialist: string;
  ward: string;
  payment: string;
  paymentType: string;
  status: string;
  roomBed: string;
  type: string;
}

const Laboratory: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [sortField, setSortField] = useState<string>("requestedDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const requestSamples: RequestSample[] = [
    {
      id: 1,
      code: "PLC00152738",
      labCode: "LT072148",
      patient: "PTN00063248 - Sochany Kien",
      requestedBy: "Sochany Kien",
      requestedDate: "2021-12-16 10:30",
      fromSpecialist: "Burn and Plastic Surgery",
      ward: "Burn and Reconstructive",
      payment: "Paid",
      paymentType: "Cash",
      status: "Verified",
      roomBed: "-",
      type: "Labor",
    },
    {
      id: 2,
      code: "PLC00152802",
      labCode: "LT072169",
      patient: "PTN00063321 - Sorina Toch",
      requestedBy: "Sorina Toch",
      requestedDate: "2021-12-16 13:19",
      fromSpecialist: "Gastro Enterology",
      ward: "Gastro Enterology",
      payment: "Paid",
      paymentType: "Cash",
      status: "Verified",
      roomBed: "-",
      type: "Labor",
    },
    {
      id: 3,
      code: "PLC00152803",
      labCode: "LT072170",
      patient: "PTN00063321 - Sorina Toch",
      requestedBy: "Sorina Toch",
      requestedDate: "2021-12-16 13:21",
      fromSpecialist: "Gastro Enterology",
      ward: "Gastro Enterology",
      payment: "Unpaid",
      paymentType: "Cash",
      status: "Process",
      roomBed: "-",
      type: "Labor",
    },
  ];

  // Handle Search Input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Handle Filter Change
  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  // Handle Sorting Change
  const handleSort = (field: string) => {
    setSortOrder(sortField === field && sortOrder === "asc" ? "desc" : "asc");
    setSortField(field);
  };

  // Filter and Sort Data
  const filteredSamples = requestSamples
    .filter((sample) =>
      (statusFilter === "All" || sample.status === statusFilter) &&
      (sample.code.toLowerCase().includes(search.toLowerCase()) ||
        sample.patient.toLowerCase().includes(search.toLowerCase()) ||
        sample.requestedBy.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortField === "requestedDate") {
        return sortOrder === "asc"
          ? new Date(a.requestedDate).getTime() - new Date(b.requestedDate).getTime()
          : new Date(b.requestedDate).getTime() - new Date(a.requestedDate).getTime();
      } else {
        return sortOrder === "asc"
          ? a[sortField].localeCompare(b[sortField])
          : b[sortField].localeCompare(a[sortField]);
      }
    });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Laboratory Request Samples</h1>

      {/* Search & Filters */}
      <div className="flex items-center mb-4 space-x-4">
        <input
          type="text"
          placeholder="Search by Code, Patient, or Requested By..."
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
          <option value="Verified">Verified</option>
          <option value="Process">Process</option>
          <option value="Unpaid">Unpaid</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      {/* Table */}
      <table className="table-auto border-collapse border border-gray-200 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Action</th>
            <th className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => handleSort("code")}>
              Code {sortField === "code" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th className="border border-gray-300 px-4 py-2">Lab Code</th>
            <th className="border border-gray-300 px-4 py-2">Patient</th>
            <th className="border border-gray-300 px-4 py-2">Requested By</th>
            <th className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => handleSort("requestedDate")}>
              Requested Date {sortField === "requestedDate" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th className="border border-gray-300 px-4 py-2">From Specialist</th>
            <th className="border border-gray-300 px-4 py-2">Ward</th>
            <th className="border border-gray-300 px-4 py-2">Payment</th>
            <th className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => handleSort("status")}>
              Status {sortField === "status" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th className="border border-gray-300 px-4 py-2">Room/Bed</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredSamples.map((sample) => (
            <tr key={sample.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                  Take
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2">{sample.code}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.labCode}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.patient}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.requestedBy}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.requestedDate}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.fromSpecialist}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.ward}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.payment}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.status}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.roomBed}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Laboratory;
