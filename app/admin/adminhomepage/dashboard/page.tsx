"use client";

import Sidebar from "@/components/admin/sidebar";
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [patients] = useState(500); // Static data for total patients
  const [doctors] = useState(50); // Static data for total doctors
  const [appointments] = useState(120); // Static data for total appointments
  const [departments] = useState(10); // Static data for total departments

  // Data for the Pie Chart
  const data = {
    labels: ["Patients", "Doctors", "Appointments", "Departments"],
    datasets: [
      {
        label: "Hospital Overview",
        data: [patients, doctors, appointments, departments],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };

  // Options for customizing the chart appearance
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          boxWidth: 15,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw}`,
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 20,
      },
    },
  };

  return (
    <div className="flex flex-col items-start">
      <Sidebar />
      <main className="flex-grow max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Hospital Management Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Total Patients</h2>
            <p className="text-xl">{patients}</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Total Doctors</h2>
            <p className="text-xl">{doctors}</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Appointments Today</h2>
            <p className="text-xl">{appointments}</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Departments</h2>
            <p className="text-xl">{departments}</p>
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="mt-10 bg-white shadow-lg p-6 rounded-lg" style={{ height: 400 }}>
          <h2 className="text-2xl font-semibold mb-4 text-center">Hospital Overview Chart</h2>
          <div style={{ height: 300 }}>
            <Pie data={data} options={options} />
          </div>
        </div>
      </main>
    </div>
  );
}
