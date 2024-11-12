
"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  
  // Function to fetch meal ideas based on ingredient
  async function fetchMealIdeas(ingredient) {
    const cleanIngredient = ingredient.toLowerCase().trim();
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanIngredient}`);
      const data = await response.json();
      return data.meals || [];  // Return empty if no recipes
    } catch (error) {
      console.error("Error fetching meals:", error);
      return [];
    }
  }

  // Load meal ideas whenever the ingredient changes
  useEffect(() => {
    async function loadMealIdeas() {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-emerald-500 text-black p-5 rounded-md">
      <h2 className="text-2xl font-semibold mb-3 text-center underline ">Meal Ideas for {ingredient}</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="mb-5 ml-5 font-bold">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-700">No recipes found for {ingredient}.</p>
      )}
    </div>
  );
}

