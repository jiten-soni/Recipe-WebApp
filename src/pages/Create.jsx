import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const  copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe added successfully!");
    reset();
    navigate("/recipes");
  };

  return (
    <form
      onSubmit={handleSubmit(SubmitHandler)}
      className="max-w-3xl mx-auto p-8 bg-gray-700 rounded-lg shadow-md text-white "
    >
      <h2 className="text-3xl font-bold mb-2 text-orange-400 text-center">
        Add New Recipe
      </h2>

      <input
        className="block w-full border-b border-gray-500 bg-transparent p-3 placeholder-gray-400 focus:outline-none focus:border-orange-500"
        {...register("image")}
        type="url"
        placeholder="Enter Image URL"
        required
      />
      <input
        className="block w-full border-b border-gray-500 bg-transparent p-3 placeholder-gray-400 focus:outline-none focus:border-orange-500"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
        required
      />
      <input
        className="block w-full border-b border-gray-500 bg-transparent p-3 placeholder-gray-400 focus:outline-none focus:border-orange-500"
        {...register("chef")}
        type="text"
        placeholder="Chef Name"
        required
      />

      <textarea
        className="block w-full border-b border-gray-500 bg-transparent p-3 placeholder-gray-400 resize-none focus:outline-none focus:border-orange-500"
        {...register("desc")}
        placeholder="Description / Introduction"
        rows={3}
        required
      ></textarea>

      <textarea
        className="block w-full border-b border-gray-500 bg-transparent p-3 placeholder-gray-400 resize-none focus:outline-none focus:border-orange-500"
        {...register("ingr")}
        placeholder="Ingredients (separated by comma)"
        rows={3}
        required
      ></textarea>

      <textarea
        className="block w-full border-b border-gray-500 bg-transparent p-3 placeholder-gray-400 resize-none focus:outline-none focus:border-orange-500"
        {...register("inst")}
        placeholder="Instructions (separated by comma)"
        rows={3}
        required
      ></textarea>

      <select
        className="block w-full bg-gray-800 p-3 rounded border border-gray-600 focus:outline-none focus:border-orange-500"
        {...register("category")}
        required
        defaultValue="breakfast"
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button
        type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 transition-colors text-white font-semibold py-3 rounded"
      >
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
