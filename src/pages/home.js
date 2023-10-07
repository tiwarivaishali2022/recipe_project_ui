import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://127.0.0.1:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div>
      <h1>Recipes</h1>
      <ul className="flex-container">
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div className="card">
              <h2>{recipe.name}</h2>

              <img src={recipe.imageUrl} alt={recipe.name} /><br/>
              <p><button>more info....</button></p>


              <button
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>
            </div>

            <div className="description">
              <h3>Description</h3>
              <p>{recipe.description}</p>
            </div>

            <div className="ingredients">
              <h3>Ingredients</h3>
              <p>{recipe.ingredients.toString()}</p>
            </div>

            <div className="instructions">
              <h3>Instructions</h3>
              <p>{recipe.instructions}</p>
            </div>
            
            <p><h4>Cooking Time:</h4> {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};