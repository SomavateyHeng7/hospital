"use client";

import React, { useState } from "react";

interface Patient {
  id: number;
  patientID: string;
  name: string;
  age: number;
  gender: string;
  contact: string;
  address: string;
  diagnosis: string;
  assignedDoctor: string;
  admissionDate: string;
  roomNumber: string;
  bedNumber: string;
}

export default function AdmitPatientForm() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);
  const [formData, setFormData] = useState({
    patientID: "",
    name: "",
    age: "",
    gender: "Male",
    contact: "",
    address: "",
    diagnosis: "",
    assignedDoctor: "",
    admissionDate: "",
    roomNumber: "",
    bedNumber: "",
  });

  const [errors, setErrors] = useState({});

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
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.diagnosis) newErrors.diagnosis = "Diagnosis is required";
    if (!formData.assignedDoctor) newErrors.assignedDoctor = "Doctor is required";
    if (!formData.admissionDate) newErrors.admissionDate = "Admission date is required";
    if (!formData.roomNumber) newErrors.roomNumber = "Room number is required";
    if (!formData.bedNumber) newErrors.bedNumber = "Bed number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (editingPatient !== null) {
      // Update Existing Patient
      setPatients(
        patients.map((patient) =>
          patient.id === editingPatient.id ? { ...formData, id: editingPatient.id } : patient
        )
      );
      setEditingPatient(null);
    } else {
      // Add New Patient
      setPatients([...patients, { id: patients.length + 1, ...formData }]);
    }

    // Reset Form
    setFormData({
      patientID: "",
      name: "",
      age: "",
      gender: "Male",
      contact: "",
      address: "",
      diagnosis: "",
      assignedDoctor: "",
      admissionDate: "",
      roomNumber: "",
      bedNumber: "",
    });
    setErrors({});
  };

  // Handle Edit
  const handleEdit = (patient: Patient) => {
    setEditingPatient(patient);
    setFormData(patient);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {editingPatient ? "Edit Patient Details" : "Admit New Patient"}
      </h1>

      {/* Patient Admission Form */}
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

          {/* Contact */}
          <div>
            <label className="block text-sm font-bold mb-1">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
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

          {/* Diagnosis */}
          <div>
            <label className="block text-sm font-bold mb-1">Diagnosis</label>
            <input
              type="text"
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.diagnosis && <p className="text-red-500 text-sm mt-1">{errors.diagnosis}</p>}
          </div>

          {/* Assigned Doctor */}
          <div>
            <label className="block text-sm font-bold mb-1">Assigned Doctor</label>
            <input
              type="text"
              name="assignedDoctor"
              value={formData.assignedDoctor}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.assignedDoctor && <p className="text-red-500 text-sm mt-1">{errors.assignedDoctor}</p>}
          </div>

          {/* Room Number */}
          <div>
            <label className="block text-sm font-bold mb-1">Room Number</label>
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.roomNumber && <p className="text-red-500 text-sm mt-1">{errors.roomNumber}</p>}
          </div>

          {/* Bed Number */}
          <div>
            <label className="block text-sm font-bold mb-1">Bed Number</label>
            <input
              type="text"
              name="bedNumber"
              value={formData.bedNumber}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            {errors.bedNumber && <p className="text-red-500 text-sm mt-1">{errors.bedNumber}</p>}
          </div>
        </div>

        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editingPatient ? "Save Changes" : "Admit Patient"}
        </button>
      </form>
    </div>
  );
}
