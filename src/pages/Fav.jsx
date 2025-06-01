
import RecipeCard from "../Components/RecipeCard";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav") || []);
 
   return (
     <div className="flex flex-wrap justify-center gap-6 p-2">
       {favorite.length > 0 ? (
         favorite.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
       ) : (
         <p>No favorite found!</p>
       )}
     </div>
   );
}

export default Fav;