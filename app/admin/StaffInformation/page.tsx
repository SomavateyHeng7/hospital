"use client";

import { useState } from "react";
import {
  FaUserMd, FaWarehouse, FaUserNurse, FaCashRegister, FaUserTie, FaSignOutAlt, FaSearch
} from "react-icons/fa";

// Sample Staff Data
const sampleStaff = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Doctor" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Receptionist" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Billing Officer" },
  { id: 4, name: "Sarah Brown", email: "sarah@example.com", role: "Head Nurse" },
  { id: 5, name: "Chris Evans", email: "chris@example.com", role: "Medicine Inventory" },
];

// Available Roles for Filtering
const roles = ["All", "Doctor", "Medicine Inventory", "Receptionist", "Head Nurse", "Billing Officer"];

export default function StaffInfoPage() {
  const [staff, setStaff] = useState(sampleStaff);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  // Filter and Sort Staff Data
  const filteredStaff = staff
    .filter((person) =>
      (selectedRole === "All" || person.role === selectedRole) &&
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Staff Information</h1>

        {/* Search & Filter */}
        <div className="flex gap-4 mb-4">
          <div className="relative w-1/2">
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search staff by name..."
              className="border p-2 pl-10 rounded w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            className="border p-2 rounded w-1/3"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* Staff Table */}
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((person) => (
              <tr key={person.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{person.name}</td>
                <td className="px-4 py-2">{person.email}</td>
                <td className="px-4 py-2">{person.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Show message if no results */}
        {filteredStaff.length === 0 && (
          <p className="mt-4 text-red-500 text-center">No staff found</p>
        )}
      </div>
    </div>
  );
}

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg flex flex-col p-4">
      {/* Sidebar Title */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-lg font-bold">Admin Panel</h1>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1">
        <SidebarItem name="Staff Information" icon={<FaUserTie />} />
        <SidebarItem name="Doctors" icon={<FaUserMd />} />
        <SidebarItem name="Medicine Inventory" icon={<FaWarehouse />} />
        <SidebarItem name="Receptionist" icon={<FaUserNurse />} />
        <SidebarItem name="Billing Officer" icon={<FaCashRegister />} />
      </nav>

      {/* Sign Out Button */}
      <button className="mt-6 w-full bg-red-600 text-white flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-red-700">
        <FaSignOutAlt />
        SIGN OUT
      </button>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ name, icon }: { name: string; icon: JSX.Element }) => (
  <div className="flex items-center gap-3 p-3 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100">
    <span className="text-lg">{icon}</span>
    <span className="text-sm">{name}</span>
  </div>
);
