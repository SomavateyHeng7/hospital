"use client";

import { useState } from 'react';

const AppointmentsTable = () => {
  // Simulated appointment data (replace with real API data)
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', time: '10:00 AM', status: 'Pending' },
    { id: 2, patientName: 'Jane Roe', doctorName: 'Dr. Brown', time: '11:30 AM', status: 'Confirmed' },
    { id: 3, patientName: 'Alice Johnson', doctorName: 'Dr. Evans', time: '1:00 PM', status: 'Canceled' },
    { id: 4, patientName: 'Bob Brown', doctorName: 'Dr. Lee', time: '3:00 PM', status: 'Pending' },
  ]);

  // Filter appointments by status
  const [filter, setFilter] = useState('All');

  const filteredAppointments = appointments.filter((appointment) =>
    filter === 'All' ? true : appointment.status === filter
  );

  return (
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Manage Appointments</h2>

      {/* Status Filter */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${filter === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${filter === 'Pending' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('Pending')}
        >
          Pending
        </button>
        <button
          className={`px-4 py-2 rounded ${filter === 'Confirmed' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('Confirmed')}
        >
          Confirmed
        </button>
        <button
          className={`px-4 py-2 rounded ${filter === 'Canceled' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('Canceled')}
        >
          Canceled
        </button>
      </div>

      {/* Appointments Table */}
      <table className="min-w-full table-auto bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Patient</th>
            <th className="px-4 py-2 border">Doctor</th>
            <th className="px-4 py-2 border">Time</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="px-4 py-2 border">{appointment.patientName}</td>
              <td className="px-4 py-2 border">{appointment.doctorName}</td>
              <td className="px-4 py-2 border">{appointment.time}</td>
              <td className={`px-4 py-2 border ${getStatusClass(appointment.status)}`}>
                {appointment.status}
              </td>
              <td className="px-4 py-2 border">
                <button
                  className="px-2 py-1 bg-green-500 text-white rounded mr-2"
                  onClick={() => handleConfirm(appointment.id)}
                >
                  Confirm
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleCancel(appointment.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function for getting status color class
const getStatusClass = (status) => {
  switch (status) {
    case 'Pending':
      return 'text-yellow-500';
    case 'Confirmed':
      return 'text-green-500';
    case 'Canceled':
      return 'text-red-500';
    default:
      return '';
  }
};

// Simulated confirm and cancel actions
const handleConfirm = (id) => {
  console.log(`Confirm appointment with ID ${id}`);
  // Implement API call or logic to confirm appointment here
};

const handleCancel = (id) => {
  console.log(`Cancel appointment with ID ${id}`);
  // Implement API call or logic to cancel appointment here
};

export default AppointmentsTable;
