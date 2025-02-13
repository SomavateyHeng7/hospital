"use client";

import React, { useState } from "react";

interface Room {
  id: number;
  roomNumber: string;
  type: string;
  totalBeds: number;
  occupiedBeds: number;
  status: "Available" | "Occupied" | "Cleaning" | "Maintenance";
}

const AvailableRooms: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const rooms: Room[] = [
    { id: 1, roomNumber: "101", type: "Single", totalBeds: 1, occupiedBeds: 1, status: "Occupied" },
    { id: 2, roomNumber: "102", type: "Single", totalBeds: 1, occupiedBeds: 0, status: "Available" },
    { id: 3, roomNumber: "103", type: "Double", totalBeds: 2, occupiedBeds: 1, status: "Available" },
    { id: 4, roomNumber: "104", type: "VIP", totalBeds: 1, occupiedBeds: 0, status: "Cleaning" },
    { id: 5, roomNumber: "105", type: "Single", totalBeds: 1, occupiedBeds: 1, status: "Occupied" },
    { id: 6, roomNumber: "106", type: "Double", totalBeds: 2, occupiedBeds: 2, status: "Occupied" },
    { id: 7, roomNumber: "107", type: "VIP", totalBeds: 1, occupiedBeds: 0, status: "Available" },
    { id: 8, roomNumber: "108", type: "Shared", totalBeds: 4, occupiedBeds: 2, status: "Available" },
  ];

  // Handle Search Input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Handle Status Filter Change
  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  // Filter and Sort Data
  const filteredRooms = rooms.filter(
    (room) =>
      (statusFilter === "All" || room.status === statusFilter) &&
      (room.roomNumber.toLowerCase().includes(search.toLowerCase()) ||
        room.type.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Rooms</h1>

      {/* Search & Filter */}
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Room Number or Type..."
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
          <option value="Available">Available</option>
          <option value="Occupied">Occupied</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>

      {/* Table */}
      <table className="table-auto border-collapse border border-gray-200 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Room Number</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Total Beds</th>
            <th className="border border-gray-300 px-4 py-2">Occupied Beds</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRooms.map((room) => (
            <tr key={room.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{room.roomNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{room.type}</td>
              <td className="border border-gray-300 px-4 py-2">{room.totalBeds}</td>
              <td className="border border-gray-300 px-4 py-2">{room.occupiedBeds}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    room.status === "Available"
                      ? "bg-green-500"
                      : room.status === "Occupied"
                      ? "bg-red-500"
                      : room.status === "Cleaning"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                >
                  {room.status}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {room.status === "Available" ? (
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    onClick={() => setSelectedRoom(room)}
                  >
                    Assign
                  </button>
                ) : (
                  <span className="text-gray-500">Not Available</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-2">Assign Room</h2>
            <p><strong>Room Number:</strong> {selectedRoom.roomNumber}</p>
            <p><strong>Type:</strong> {selectedRoom.type}</p>
            <p><strong>Total Beds:</strong> {selectedRoom.totalBeds}</p>
            <p><strong>Occupied Beds:</strong> {selectedRoom.occupiedBeds}</p>

            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => {
                alert(`Room ${selectedRoom.roomNumber} assigned successfully`);
                setSelectedRoom(null);
              }}
            >
              Confirm Assignment
            </button>

            <button
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setSelectedRoom(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableRooms;
