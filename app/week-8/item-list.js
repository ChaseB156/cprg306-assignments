
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-black'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-black'}`}
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
            onSelect={() => onItemSelect(item)} // Pass the selected item to the onItemSelect function
          />
        ))}
      </ul>
    </div>
  );
}

