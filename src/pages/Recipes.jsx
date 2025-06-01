import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../Components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-2">
      {data.length > 0 ? (
        data.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      ) : (
        <p>No recipes found!</p>
      )}
    </div>
  );
};

export default Recipes;
