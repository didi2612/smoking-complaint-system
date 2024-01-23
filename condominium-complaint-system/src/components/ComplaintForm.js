// src/components/ComplaintForm.js
import React, { useState } from 'react';

const ComplaintForm = ({ addComplaint }) => {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComplaint(complaint);
    setComplaint('');
  };

  return (
    <center>
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <label className="block mb-2 text-lg font-medium">Complaint:</label><br></br>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md"
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
      /><br></br>
      <button
        type="submit"
        className="mt-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
      >
        Submit Complaint
      </button>
    </form>
    </center>
  );
};

export default ComplaintForm;
