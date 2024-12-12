"use client";

import React, { useState } from "react";

interface Medicine {
  id: number;
  name: string;
  barcode: string;
  uom: string;
  salePrice: string;
  category: string;
  reorder: string;
  expiryAlert: number;
  nurse: boolean;
}

const MedicineInventory: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const medicines: Medicine[] = [
    { id: 1, name: "Esome 250mg", barcode: "ME888", uom: "70 tablets", salePrice: "KHR 0", category: "PER OS", reorder: "20 tablets", expiryAlert: 180, nurse: false },
    { id: 2, name: "Jardisure-Duo 12,5/500mg", barcode: "ME887", uom: "1 tablet", salePrice: "KHR 0", category: "PER OS", reorder: "50 tablets", expiryAlert: 180, nurse: false },
    { id: 3, name: "HALOPiD 5mg inj.", barcode: "ME886", uom: "1 injection", salePrice: "KHR 10,000", category: "PER OS", reorder: "50 injections", expiryAlert: 180, nurse: false },
    { id: 4, name: "HAEMACEL IV", barcode: "ME885", uom: "1 IV", salePrice: "KHR 5,000", category: "PER OS", reorder: "50 IVs", expiryAlert: 180, nurse: false },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(search.toLowerCase()) ||
      medicine.barcode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Medicine Inventory</h1>

      <div className="flex items-center mb-4 space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Add Medicine
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Import
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 rounded p-2 w-full max-w-xs"
        />
      </div>

      <table className="table-auto border-collapse border border-gray-200 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">No.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Barcode</th>
            <th className="border border-gray-300 px-4 py-2">UoM</th>
            <th className="border border-gray-300 px-4 py-2">Sale Price</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Reorder</th>
            <th className="border border-gray-300 px-4 py-2">Expiry Alert (Days)</th>
            <th className="border border-gray-300 px-4 py-2">Nurse</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredMedicines.map((medicine, index) => (
            <tr key={medicine.id}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{medicine.name}</td>
              <td className="border border-gray-300 px-4 py-2">{medicine.barcode}</td>
              <td className="border border-gray-300 px-4 py-2">{medicine.uom}</td>
              <td className="border border-gray-300 px-4 py-2">{medicine.salePrice}</td>
              <td className="border border-gray-300 px-4 py-2">{medicine.category}</td>
              <td className="border border-gray-300 px-4 py-2">{medicine.reorder}</td>
              <td className="border border-gray-300 px-4 py-2">{medicine.expiryAlert}</td>
              <td className="border border-gray-300 px-4 py-2">
                {medicine.nurse ? "✅" : "❌"}
              </td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <p>Showing {filteredMedicines.length} of {medicines.length} entries</p>
      </div>
    </div>
  );
};

export default MedicineInventory;
