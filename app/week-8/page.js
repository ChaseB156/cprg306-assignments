
"use client";

import { useState } from 'react';
import Link from "next/link";
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // It seemed easier to remove anything after a space to reduce it to one word and get rid of the comma after some of the items
  const handleItemSelect = (item) => {
    const cleanName = item.name.split(",")[0].split(" ")[0].trim();
    setSelectedItemName(cleanName);
  };
  

  return (
    <main className="p-5">
      <h1 className="text-4xl underline mb-5 text-center">Shopping List with Meal Ideas</h1>

      <div className="flex justify-center gap-10">
        <div className="flex flex-col gap-5">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-1/2">
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <p className="text-center text-black">Select an item to see meal ideas</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <Link href="../" className="underline text-red-500 hover:text-cyan-400">Back Page</Link>
      </div>
    </main>
  );
}

