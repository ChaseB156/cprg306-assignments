"use client";

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Function to generate a random ID
  const generateId = () => Math.random().toString(36).substring(2, 9);

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: generateId(),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="p-6 bg-emerald-500 rounded-md shadow-md max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center text-black underline">Add a New Item</h2>

      <form onSubmit={handleSubmit}>
        <label className="block text-black text-lg mb-2 underline">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded text-black w-full mb-4"
          required
        />

        <label className="block text-black text-lg mb-2 underline">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Math.min(20, Number(e.target.value))))}
          className="p-2 border rounded text-black w-full mb-4"
          required
        />

        <label className="block text-black text-lg mb-2 underline">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded text-black w-full mb-4"
          required
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>

        <button
          type="submit"
          className="bg-blue-300 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded w-full"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

