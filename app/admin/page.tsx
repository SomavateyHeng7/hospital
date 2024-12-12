"use client";

import Sidebar from "../../components/admin/Sidebar";
import Footer from "@/components/shared/Footer";
import React from "react";

export default function AdminPage() {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-lg mb-4">
          Welcome to the Hospital Management Admin Dashboard. You can manage the hospital's key components like patients, doctors, appointments, and departments.
        </p>
        
        {/* Main Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Total Patients</h2>
            <p className="text-xl">500</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Total Doctors</h2>
            <p className="text-xl">50</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Appointments Today</h2>
            <p className="text-xl">120</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Departments</h2>
            <p className="text-xl">10</p>
          </div>
        </div>

        {/* New Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Doctor Attendance</h2>
            <p className="text-xl">45 / 50</p>
            <p className="text-sm text-gray-500">Doctors present today</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Surgeries</h2>
            <p className="text-xl">15</p>
            <p className="text-sm text-gray-500">Surgeries scheduled today</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Revenue</h2>
            <p className="text-xl">$120,000</p>
            <p className="text-sm text-gray-500">Total revenue this month</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Bills</h2>
            <p className="text-xl">$240000</p>
            <p className="text-sm text-gray-500">Bill payment this month</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
