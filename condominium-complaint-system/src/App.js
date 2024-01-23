// src/App.js
import React, { useState } from 'react';
import Home from './components/Home';
import ComplaintForm from './components/ComplaintForm';
import ComplaintList from './components/ComplaintList';

const App = () => {
  const [complaints, setComplaints] = useState([]);

  const addComplaint = (complaint) => {
    setComplaints([...complaints, complaint]);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <Home />
        <ComplaintForm addComplaint={addComplaint} />
        <ComplaintList complaints={complaints} />
      </div>
    </div>
  );
};

export default App;
