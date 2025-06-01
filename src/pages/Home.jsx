import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {
  const getproduct = async () => {
    try {
      const Response = await axios.get("https://fakestoreapi.com/products");
      console.log(Response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getproduct();
  }, []);

    return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-700 text-white px-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-5 md:p-12 flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        
        {/* Left: Image */}
        <img
          src="https://imgs.search.brave.com/hIWsMCvdHWxtBTcfxRPjXTcNcXd_giaGRIm2-rI_dx4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjAz/OTA2NDg0L3Bob3Rv/L3ZlZ2V0YWJsZS1z/YWxhZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZjdCbkpS/Q3FMS2FqX0RFUUIx/U0I3MV9lUlQ4eTFY/UlA1MmREeVlSU3h1/RT0"
          alt="Delicious food"
          className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
        />

        {/* Right: Text and Actions */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-4">
            Discover Delicious Recipes
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Explore tasty recipes from around the world. Whether you're a beginner or pro, there’s something for you!
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-700 rounded-lg p-2 mb-4">
            <input
              type="text"
              placeholder="Search recipes..."
              className="bg-transparent w-full p-2 focus:outline-none text-white"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Search
            </button>
          </div>

          {/* CTA Button */}
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition duration-300 w-full md:w-auto">
            Browse All Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
