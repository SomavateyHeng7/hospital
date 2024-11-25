"use client";

import PatientSidebar from "@/components/patient/PatientSidebar"; // Import the PatientSidebar component
import Footer from "@/components/shared/footer";   // Import the shared footer
import React from "react";

export default function PatientPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar for patient navigation */}
      <PatientSidebar />
      
      {/* Main content and footer container */}
      <div className="flex flex-col flex-grow">
        {/* Main content area */}
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-4">Patient Dashboard</h1>
          <p className="text-lg mb-4">
            Welcome to your dashboard. You can view your medical history, upcoming appointments, and more here.
          </p>
          
          {/* Example of patient data that you could include */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Your Appointments</h2>
              <p>You have 3 upcoming appointments.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Your Prescriptions</h2>
              <p>See your active prescriptions and refills.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Medical History</h2>
              <p>View your complete medical history.</p>
            </div>
          </div>
        </div>

        {/* Footer for the patient page */}
        <Footer />
      </div>
    </div>
  );
}
