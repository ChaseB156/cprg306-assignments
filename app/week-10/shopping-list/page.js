
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-10"); // Redirect to login page if not logged in
    }
  }, [user, router]);

  // Function to load items from Firestore
  const loadItems = async () => {
    if (user) {
      try {
        const userItems = await getItems(user.uid);
        console.log("Loaded items:", userItems);
        setItems(userItems);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    }
  };

  // Fetch items when the component mounts
  useEffect(() => {
    loadItems();
  }, [user]);

  // Function to add an item
  const handleAddItem = async (newItem) => {
    if (user) {
      console.log("Attempting to add item for user:", user.uid, newItem); // Log user ID and item
      try {
        const itemId = await addItem(user.uid, newItem);
        console.log("Item added with ID:", itemId);
        setItems((prevItems) => [...prevItems, { ...newItem, id: itemId }]);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    } else {
      console.error("No user authenticated. Cannot add item.");
    }
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
      <h1 className="text-4xl underline mb-5 text-center">
        Shopping List with Meal Ideas
      </h1>

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
            <p className="text-center text-black">
              Select an item to see meal ideas
            </p>
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
        <Link
          href="../"
          className="underline text-red-500 hover:text-cyan-400"
        >
          Back Page
        </Link>
      </div>
    </main>
  );
}
