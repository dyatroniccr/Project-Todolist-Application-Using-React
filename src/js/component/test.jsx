import React, { useState } from 'react';


export default function Test() {
  const initialState = [
    { id: 1, name: 'Banana', amount: 5 },
    { id: 2, name: 'Apple', amount: 6 },
    { id: 3, name: 'Orange', amount: 10 },
    { id: 4, name: 'Watermelon', amount: 1 }
  ];

  const removeSecond = () => {
    setFruits((current) =>
      current.filter((fruit) => fruit.id !== 2)
    );
  };

  const [fruits, setFruits] = useState(initialState);

  

  return (
    <div style={{ margin: '16px' }}>
      <button onClick={removeSecond}>Remove second</button>
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <h2>Name: {fruit.name}</h2>
          <h2>Amount: {fruit.amount}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
}

