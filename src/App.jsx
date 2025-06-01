import Navbar from "./Components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-800 font-thin text-white px-[10%] py-10 overflow-x-hidden">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
