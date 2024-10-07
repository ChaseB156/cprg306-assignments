
"use client";

import { useState } from 'react';

export default function NewItem() {
  // Initialize the state variable for quantity
  const [quantity, setQuantity] = useState(1);

  //increment the quantity (max 20)
  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  //decrement the quantity (min 1)
  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  // Handle change in quantity input directly between 1 & 20
  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(20, Number(e.target.value)));
    setQuantity(value);
  };

  return (
    <div className="p-4 ml-2 bg-emerald-500 rounded-md max-w-sm ">
      <h2 className="text-lg text-center font-bold text-black underline">Add a New Item</h2>


      <p className="text-lg mb-2 text-center font-bold text-black">Current Quantity: {quantity}</p>

      <div className="flex justify-center items-center space-x-4">


        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`p-2 text-lg font-bold rounded-md ${quantity === 1 ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'} text-white`}
        >
          -
          </button>


        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="border p-2 rounded-md w-20 text-center font-bold text-black"
        />


        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`p-2 text-lg font-bold rounded-md ${quantity === 20 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          +
        </button>
      </div>
    </div>
  );
}

