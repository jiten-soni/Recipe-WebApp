import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-x-10 text-sm mb-10">
      <NavLink className={(e) => e.isActive ? "text-red-300" : undefined} to="/">
        Home
      </NavLink>
      <NavLink className={(e) => e.isActive ? "text-red-300" : undefined} to="/recipes">
        Recipes
      </NavLink>
      <NavLink className={(e) => e.isActive ? "text-red-300" : undefined} to="/about">
        About
      </NavLink>
      <NavLink className={(e) => e.isActive ? "text-red-300" : undefined} to="/create-recipe">
        Create Recipes
      </NavLink>
      <NavLink className={(e) => e.isActive ? "text-red-300" : undefined} to="/fav">
        Favroite Recipes
      </NavLink>
    </div>
  );
};

export default Navbar;
