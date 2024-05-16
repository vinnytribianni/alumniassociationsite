import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Leadership = () => {
  const location = useLocation();
  const { id } = location.state || {}; // Ensure this is being passed correctly
  const [stateId, setStateId] = useState(parseInt(id, 10)); // Convert to number and set as initial state

  useEffect(() => {
    const newId = parseInt(id, 10);
    if (newId && newId !== stateId) {
      setStateId(newId);
    }
  }, [id, stateId]);

  const renderContent = () => {
    switch(stateId) {
      case 1:
        return (
          <div>
            <h2>Leadership Content for ID 1</h2>
            <p>This is the specific content for leadership in the first case.</p>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Leadership Content for ID 2</h2>
            <p>This content is displayed when the leadership ID is 2.</p>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Leadership Content for ID 3</h2>
            <p>When the leadership ID is 3, this content appears on the screen.</p>
          </div>
        );
      default:
        return (
          <div>
            <h2>No specific leadership content</h2>
            <p>No specific leadership content available for this ID.</p>
          </div>
        );
    }
  };

  return (
    <div>
      <h1>Leadership Component</h1>
      <p>Conditional rendering based on ID: {stateId}</p>
      {renderContent()}
    </div>
  );
};

export default Leadership;
