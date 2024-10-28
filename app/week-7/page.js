"use client";

import { useState } from 'react';
import Link from "next/link";
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="flex p-10 min-h-screen bg-black">
      {/* Flex container to let the shopping list go on the left and add item function beside it */}
      <div className="flex space-x-10 justify-center items-start w-full">
        
        {/* Shopping List on the left side */}
        <div className="flex flex-col w-1/2 max-w-sm">
          <h1 className="text-4xl underline mb-5 text-white">Shopping List</h1>
          <ItemList items={items} />
          <div className="mt-5">
            <Link href="../" className="underline text-red-500 hover:text-cyan-400">Back Page</Link>
          </div>
        </div>
        
        {/* Add New Item form centered */}
        <div className="flex justify-center w-1/2">
          <NewItem onAddItem={handleAddItem} />
        </div>
      </div>
    </main>
  );
}
