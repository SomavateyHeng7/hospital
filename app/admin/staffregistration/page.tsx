"use client";

import { useState } from "react";

export default function StaffRegistration() {
  const [staffList, setStaffList] = useState([]);
  const [editingStaff, setEditingStaff] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    birthday: "",
    address: "",
    phone: "",
    gender: "Male",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission (Register or Edit)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    let newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.birthday) newErrors.birthday = "Birthday is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (editingStaff !== null) {
      // Update existing staff information
      setStaffList(staffList.map((staff) =>
        staff.id === editingStaff.id ? { ...formData, id: editingStaff.id } : staff
      ));
      setEditingStaff(null);
    } else {
      // Add a new staff member
      setStaffList([...staffList, { id: staffList.length + 1, ...formData }]);
    }

    // Reset Form
    setFormData({ name: "", position: "", email: "", birthday: "", address: "", phone: "", gender: "Male" });
    setErrors({});
  };

  // Handle Edit
  const handleEdit = (staff) => {
    setEditingStaff(staff);
    setFormData(staff);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{editingStaff ? "Edit Staff Information" : "Staff Registration"}</h1>

      {/* Staff Registration Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mb-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-bold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-bold mb-1">Position</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            >
              <option value="">Select Position</option>
              <option value="Doctor">Doctor</option>
              <option value="Receptionist">Receptionist</option>
              <option value="Billing Officer">Billing Officer</option>
              <option value="Head Nurse">Head Nurse</option>
              <option value="Medicine Inventory">Medicine Inventory</option>
            </select>
            {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Birthday */}
          <div>
            <label className="block text-sm font-bold mb-1">Birthday</label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.birthday && <p className="text-red-500 text-sm mt-1">{errors.birthday}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-bold mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-bold mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-bold mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editingStaff ? "Save Changes" : "Register Staff"}
        </button>
      </form>

      {/* Staff List Table */}
      {staffList.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Registered Staff</h2>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Position</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((staff) => (
                <tr key={staff.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{staff.name}</td>
                  <td className="px-4 py-2">{staff.position}</td>
                  <td className="px-4 py-2">{staff.email}</td>
                  <td className="px-4 py-2">{staff.phone}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      onClick={() => handleEdit(staff)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
