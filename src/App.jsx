import "./App.css";
import { useState, useEffect } from "react";
import HouseCardGrid from "./components/HouseCardGrid";
import SearchBar from "./components/SearchBar";

function App() {
  const [houses, setHouses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="flex-initial overflow-auto flex-wrap items-center justify-center  h-screen w-screen p-8 bg-gray-800">
        <div>
          <SearchBar
            setSearchQuery={setSearchQuery}
          />

          <h1>{searchQuery}</h1>
        </div>
        <HouseCardGrid houses={houses} />
      </div>
    </>
  );
}

export default App;
