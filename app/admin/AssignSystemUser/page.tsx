"use client";

import { useState } from "react";
import {
  FaUserMd, FaWarehouse, FaUserNurse, FaCashRegister, FaUserTie, FaSignOutAlt, FaUserEdit, FaUserSecret, FaPlus
} from "react-icons/fa";

// Initial Users Data
const sampleUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Doctor" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Receptionist" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Billing Officer" },
];

// Available Roles
const roles = ["Doctor", "Medicine Inventory", "Receptionist", "Head Nurse", "Billing Officer"];

export default function AssignUsersPage() {
  const [users, setUsers] = useState(sampleUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Doctor" });

  // Add a new user
  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: "", email: "", role: "Doctor" });
    }
  };

  // Edit User Info
  const handleEditUser = (id, key, value) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, [key]: value } : user)));
  };

  // Start Editing User
  const handleStartEdit = (user) => {
    setEditingUser(user);
  };

  // Save Edited User
  const handleSaveEdit = () => {
    setEditingUser(null);
  };

  // Impersonate User (Simulated)
  const handleImpersonate = (user) => {
    alert(`Impersonating: ${user.name} (${user.email})`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Assign System Users</h1>

        {/* Add User Form */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-lg font-bold mb-2">Add New User</h2>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded w-full"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded w-full"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <select
              className="border p-2 rounded w-full"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <button
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={handleAddUser}
          >
            <FaPlus className="inline-block mr-2" />
            Add User
          </button>
        </div>

        {/* Users Table */}
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">
                  {editingUser?.id === user.id ? (
                    <input
                      type="text"
                      className="border p-2 rounded w-full"
                      value={editingUser.name}
                      onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="px-4 py-2">
                  {editingUser?.id === user.id ? (
                    <input
                      type="email"
                      className="border p-2 rounded w-full"
                      value={editingUser.email}
                      onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="px-4 py-2">
                  {editingUser?.id === user.id ? (
                    <select
                      className="border p-2 rounded w-full"
                      value={editingUser.role}
                      onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                    >
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  ) : (
                    user.role
                  )}
                </td>
                <td className="px-4 py-2 text-center">
                  {editingUser?.id === user.id ? (
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={handleSaveEdit}>
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 mr-2"
                        onClick={() => handleStartEdit(user)}
                      >
                        <FaUserEdit />
                      </button>
                      <button
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={() => handleImpersonate(user)}
                      >
                        <FaUserSecret />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
        <SidebarItem name="Assign Users" icon={<FaUserTie />} />
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
