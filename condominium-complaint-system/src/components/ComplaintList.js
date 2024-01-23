// src/components/ComplaintList.js
import React from 'react';

const ComplaintList = ({ complaints }) => {
  return (
    <div className="max-w-md mx-auto mt-8">
        <center>
      <h2 className="text-2xl font-bold mb-4">Complaint List</h2>
      <ul className="list-disc pl-4">
        {complaints.map((complaint, index) => (
          <li key={index} className="mb-2">{complaint}</li>
        ))}
      </ul>
      </center>
    </div>
  );
};

export default ComplaintList;
