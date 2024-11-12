
"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // Redirect to login page if not logged in
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name.split(",")[0].trim();
    setSelectedItemName(cleanName);
  };

  if (!user) {
    return null; // Don't render anything if the user is not logged in
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl underline mb-5 text-center">Shopping List with Meal Ideas</h1>

      <div className="flex justify-center gap-10">
        {/* Left side: New Item Form and Item List */}
        <div className="flex flex-col gap-5">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right side: Meal Ideas */}
        <div className="w-1/2">
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <p className="text-center text-black">Select an item to see meal ideas</p>
          )}
        </div>
      </div>

      {/* Back link and Logout */}
      <div className="mt-5 text-center">
        <button
          onClick={firebaseSignOut}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
        <br />
        <Link href="../" className="underline text-red-500 hover:text-cyan-400">Back Page</Link>
      </div>
    </main>
  );
}


