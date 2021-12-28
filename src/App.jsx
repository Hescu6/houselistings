import "./App.css";
import HouseCardGrid from "./components/HouseCardGrid";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="flex-initial overflow-auto flex-wrap items-center justify-center  h-screen w-screen p-8 bg-gray-800">
        <div>
          <SearchBar />
        </div>
        <HouseCardGrid />
      </div>
    </>
  );
}

export default App;
