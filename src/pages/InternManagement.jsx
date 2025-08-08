import React from "react";
import { interns } from "../data/tasks";

const InternManagement = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 mr-4">
        <h1 className="text-xl font-bold">Intern Management</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Intern
          </button>
        </div>
      </div>

      {/* Intern Cards */}
      <div className="grid grid-cols-1 gap-4">
        {interns.map((intern) => (
          <div
            key={intern.id}
            className="bg-white rounded-lg shadow p-4 flex items-center gap-4"
          >
            {/* Profile Image */}
            <img
              src={intern.avatar}
              alt={intern.name}
              className="w-12 h-12 rounded-full object-cover border border-gray-300"
            />

            {/* Intern Info */}
            <div>
              <h3 className="font-semibold">{intern.name}</h3>
              {intern.action && (
                <p className="text-sm text-gray-500 mt-1">{intern.action}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternManagement;
