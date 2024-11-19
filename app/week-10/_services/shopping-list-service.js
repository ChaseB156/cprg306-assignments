
import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";

// Function to get items for a specific user
export const getItems = async (userId) => {
  try {
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Retrieved items for user:", userId, items);
    return items;
  } catch (error) {
    console.error("Error retrieving items:", error);
    throw error;
  }
};

// Function to add an item for a specific user
export const addItem = async (userId, item) => {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    console.log("Added item for user:", userId, item, "Doc ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};
