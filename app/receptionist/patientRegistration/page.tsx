"use client";

import React, { useState } from "react";

interface PatientQueue {
  id: number;
  patientID: string;
  name: string;
  age: number;
  gender: string;
  doctor: string;
  queueNumber: number;
  status: "Waiting" | "In Consultation" | "Completed";
}

export default function PatientQueueRegistration() {
  const [queue, setQueue] = useState<PatientQueue[]>([]);
  const [formData, setFormData] = useState({
    patientID: "",
    name: "",
    age: "",
    gender: "Male",
    doctor: "",
    status: "Waiting",
  });
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [editingPatient, setEditingPatient] = useState<PatientQueue | null>(null);

  const doctors = ["Dr. Smith", "Dr. Adams", "Dr. Wilson", "Dr. Lee"];

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors: any = {};
    if (!formData.patientID) newErrors.patientID = "Patient ID is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.doctor) newErrors.doctor = "Doctor is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (editingPatient !== null) {
      // Update Existing Patient
      setQueue(
        queue.map((patient) =>
          patient.id === editingPatient.id ? { ...formData, id: editingPatient.id, queueNumber: editingPatient.queueNumber } : patient
        )
      );
      setEditingPatient(null);
    } else {
      // Add New Patient to Queue
      setQueue([
        ...queue,
        { id: queue.length + 1, queueNumber: queue.length + 1, ...formData },
      ]);
    }

    // Reset Form
    setFormData({
      patientID: "",
      name: "",
      age: "",
      gender: "Male",
      doctor: "",
      status: "Waiting",
    });
    setErrors({});
  };

  // Handle Edit
  const handleEdit = (patient: PatientQueue) => {
    setEditingPatient(patient);
    setFormData(patient);
  };

  // Handle Remove
  const handleRemove = (id: number) => {
    setQueue(queue.filter((patient) => patient.id !== id));
  };

  // Handle Status Change
  const handleStatusChange = (id: number, newStatus: string) => {
    setQueue(queue.map((patient) => (patient.id === id ? { ...patient, status: newStatus } : patient)));
  };

  // Search & Filter Data
  const filteredQueue = queue
    .filter(
      (patient) =>
        (statusFilter === "All" || patient.status === statusFilter) &&
        (patient.name.toLowerCase().includes(search.toLowerCase()) ||
          patient.patientID.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{editingPatient ? "Edit Patient Queue" : "Register Patient for Queue"}</h1>

      {/* Patient Queue Registration Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mb-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Patient ID */}
          <div>
            <label className="block text-sm font-bold mb-1">Patient ID</label>
            <input
              type="text"
              name="patientID"
              value={formData.patientID}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.patientID && <p className="text-red-500 text-sm mt-1">{errors.patientID}</p>}
          </div>

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

          {/* Age */}
          <div>
            <label className="block text-sm font-bold mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
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

          {/* Doctor */}
          <div>
            <label className="block text-sm font-bold mb-1">Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            >
              <option value="">Select Doctor</option>
              {doctors.map((doc) => (
                <option key={doc} value={doc}>
                  {doc}
                </option>
              ))}
            </select>
            {errors.doctor && <p className="text-red-500 text-sm mt-1">{errors.doctor}</p>}
          </div>
        </div>

        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editingPatient ? "Save Changes" : "Add to Queue"}
        </button>
      </form>

      {/* Search & Filter */}
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Patient Name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full max-w-md"
        />
        <select
          className="border border-gray-300 rounded p-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Waiting">Waiting</option>
          <option value="In Consultation">In Consultation</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Queue List */}
      <table className="table-auto border-collapse border border-gray-200 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Queue No</th>
            <th className="border px-4 py-2">Patient ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Doctor</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredQueue.map((patient) => (
            <tr key={patient.id}>
              <td className="border px-4 py-2">{patient.queueNumber}</td>
              <td className="border px-4 py-2">{patient.patientID}</td>
              <td className="border px-4 py-2">{patient.name}</td>
              <td className="border px-4 py-2">{patient.doctor}</td>
              <td className="border px-4 py-2">{patient.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
