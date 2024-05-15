import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const History = () => {
  const location = useLocation();
  const { id } = location.state || {}; // Access the passed state
  const [stateId, setStateId] = useState(id);

  useEffect(() => {
    // Update state if id changes
    if (id) {
      setStateId(id);
    }
  }, [id]);

  return (
    <div>
      <h1>History Component</h1>
      <p>Conditional rendering based on ID: {stateId}</p>
      {/* Add your conditional rendering logic here */}
    </div>
  );
};

export default History;
