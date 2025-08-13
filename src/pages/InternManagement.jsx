import React, { useState, useEffect } from "react";

const InternManagement = () => {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace this URL with your actual backend endpoint
  const BACKEND_URL = 'https://689c730a58a27b18087e3762.mockapi.io/interns'; 
  useEffect(() => {
    const fetchInterns = async () => {
      try {
        setLoading(true);
        const response = await fetch(BACKEND_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setInterns(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching interns:', err);
        setError('Failed to load intern data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchInterns();
  }, []);

  if (loading) {
    return (
      <div className="w-screen min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading interns...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-screen min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
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
