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

  const requestSamples: RequestSample[] = [
    {
      id: 1,
      code: "PLC00152738",
      labCode: "LT072148",
      patient: "PTN00063248 - Sochany Kien",
      requestedBy: "Sochany Kien",
      requestedDate: "16/12/2021 10:30",
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
      requestedDate: "16/12/2021 13:19",
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
      requestedDate: "16/12/2021 13:21",
      fromSpecialist: "Gastro Enterology",
      ward: "Gastro Enterology",
      payment: "Unpaid",
      paymentType: "Cash",
      status: "Process",
      roomBed: "-",
      type: "Labor",
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredSamples = requestSamples.filter(
    (sample) =>
      sample.code.toLowerCase().includes(search.toLowerCase()) ||
      sample.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Request Samples</h1>

      <div className="flex items-center mb-4 space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Actions
        </button>
        <input
          type="text"
          placeholder="Search by Code or Patient..."
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 rounded p-2 w-full max-w-md"
        />
      </div>

      <table className="table-auto border-collapse border border-gray-200 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Action</th>
            <th className="border border-gray-300 px-4 py-2">Code</th>
            <th className="border border-gray-300 px-4 py-2">Lab Code</th>
            <th className="border border-gray-300 px-4 py-2">Patient</th>
            <th className="border border-gray-300 px-4 py-2">Requested By</th>
            <th className="border border-gray-300 px-4 py-2">Requested Date</th>
            <th className="border border-gray-300 px-4 py-2">From Specialist</th>
            <th className="border border-gray-300 px-4 py-2">Ward</th>
            <th className="border border-gray-300 px-4 py-2">Payment</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Room/Bed</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredSamples.map((sample) => (
            <tr key={sample.id}>
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
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    sample.payment === "Paid" ? "bg-green-500" : "bg-gray-500"
                  }`}
                >
                  {sample.payment}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">{sample.status}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.roomBed}</td>
              <td className="border border-gray-300 px-4 py-2">{sample.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <p>Showing {filteredSamples.length} of {requestSamples.length} entries</p>
      </div>
    </div>
  );
};

export default Laboratory;
