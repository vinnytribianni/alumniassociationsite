import React from 'react';
import { useParams } from 'react-router-dom';

const History = () => {
  let { itemId } = useParams();

  return (
    <div>
      <h1>History Page</h1>
      <p>You selected item {itemId}</p>
    </div>
  );
};

export default History;