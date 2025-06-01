import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="block w-[20vw] max-w-xs rounded-lg overflow-hidden shadow-lg mr-4 mb-6
                 transform transition-transform duration-300 hover:scale-105"
    >
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={`Recipe of ${title}`}
      />
      <div className="p-4 bg-gray-600 ">
        <h1 className="text-xl font-bold text-white-900">{title}</h1>
        <small className="text-red-500 block mb-2">{chef}</small>
        <p className="text-white-700 text-sm">
          {desc.length > 100 ? desc.slice(0, 100) + "..." : desc}{" "}
          <small className="text-blue-500 font-semibold">more</small>
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
