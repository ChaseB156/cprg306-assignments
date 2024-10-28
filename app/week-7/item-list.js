
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Function to get a sorted copy of items based on sortBy
  const getSortedItems = () => {
    const itemsCopy = [...items];
    return itemsCopy.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  // Sorted items based on sort preference
  const sortedItems = getSortedItems();

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button 
          onClick={() => setSortBy("name")} 
          className={`p-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        >
          Sort by Name
        </button>
        <button 
          onClick={() => setSortBy("category")} 
          className={`p-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        >
          Sort by Category
        </button>
      </div>
      
      <ul>
        {sortedItems.map((item) => (
          <Item 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

