import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      inst: recipe?.inst,
      category: recipe?.category,
    },
  });

  const UpdateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated successfully");
    reset();
  };

  const DeleteHandler = () => {
    const filteredData = data.filter((recipe) => recipe.id !== params.id);
    setdata(filteredData);
    localStorage.setItem("recipes", JSON.stringify(filteredData));
    toast.success("Recipe deleted successfully");
    navigate("/recipes");
  };

  const favStorage = JSON.parse(localStorage.getItem("fav"));
  const favorite = Array.isArray(favStorage) ? favStorage : [];

  const [favtorage, setfavstorage] = useState(favorite);

  const FavHandler = () => {
    const copyfav = [...favtorage];
    copyfav.push(recipe);
    setfavstorage(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const UnFavHandler = () => {
    const filterfav = favorite.filter((f) => f.id !== recipe.id);
    setfavstorage(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  useEffect(() => {
  console.log("SingleRecipe.jsx Mounted");
    return () =>{
      console.log("SingleRecipe.jsx Unmounted");
    };
  }, []);


  return recipe ? (
    <div className="w-full flex flex-col md:flex-row gap-8 bg-gray-600 text-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      {/* Left side: Recipe info */}
      <div className="relative left w-full md:w-1/2 space-y-4">
        {favorite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={UnFavHandler}
            className="absolute right-[10%] text-3xl text-red-400  ri-poker-hearts-fill"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="absolute right-[10%] text-3xl text-red-400  ri-poker-hearts-line"
          ></i>
        )}

        <h1 className="text-5xl font-extrabold">{recipe.title}</h1>
        <img
          className="h-64 w-full object-cover rounded-lg shadow-md"
          src={recipe.image}
          alt={recipe.title}
        />
        <h2 className="text-xl font-semibold text-orange-400">{recipe.chef}</h2>
        <p className="text-gray-300">{recipe.desc}</p>
        <div>
          <h3 className="font-semibold underline mb-1">Ingredients:</h3>
          <ul className="list-disc list-inside text-gray-300">
            {recipe.ingr
              ? recipe.ingr
                  .split(",")
                  .map((item, idx) => <li key={idx}>{item.trim()}</li>)
              : "No ingredients listed."}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold underline mb-1">Instructions:</h3>
          <ol className="list-decimal list-inside text-gray-300">
            {recipe.inst
              ? recipe.inst
                  .split(",")
                  .map((step, idx) => <li key={idx}>{step.trim()}</li>)
              : "No instructions listed."}
          </ol>
        </div>
      </div>

      {/* Right side: Edit form */}
      <form
        className="right w-full md:w-1/2 space-y-4 bg-gray-700 p-6 rounded-lg shadow-inner"
        onSubmit={handleSubmit(UpdateHandler)}
      >
        <input
          className="block w-full border-b border-gray-400 bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
          {...register("image")}
          type="url"
          placeholder="Enter image URL"
        />

        <input
          className="block w-full border-b border-gray-400 bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />

        <input
          className="block w-full border-b border-gray-400 bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
        />

        <textarea
          className="block w-full border-b border-gray-400 bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 resize-none"
          {...register("desc")}
          placeholder="Description"
          rows={3}
        ></textarea>

        <textarea
          className="block w-full border-b border-gray-400 bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 resize-none"
          {...register("ingr")}
          placeholder="Ingredients (separated by commas)"
          rows={3}
        ></textarea>

        <textarea
          className="block w-full border-b border-gray-400 bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 resize-none"
          {...register("inst")}
          placeholder="Instructions (separated by commas)"
          rows={3}
        ></textarea>

        <select
          className="block w-full bg-gray-800 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded transition"
        >
          Update Recipe
        </button>

        <button
          type="button"
          onClick={DeleteHandler}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    <p className="text-center text-white text-xl mt-20">Loading...</p>
  );
};

export default SingleRecipe;
