import "./App.css";
import { useState, useEffect } from "react";
import HouseCardGrid from "./components/HouseCardGrid";
import SearchBar from "./components/SearchBar";

import { sampleData } from "./assets/sampleData"; //sample return data from API

function App() {
  const [houses, setHouses] = useState({});
  const [searchQuery, setSearchQuery] = useState();

  useEffect(() => {
    /*
    *********** Data Schema **********
    {
      sampleData{
        props: [
          {
            address: string,
            imgSrc: string,
            bedrooms: int,
            bathrooms: int,
            price: int,
            livingArea: int,
            lotAreaUnit: string,
            lotAreaValue: int,
            propertyType: string
            ...
          },
          ...
        ],
        resultsPerPage: int,
        totalResultCount: int,
        totalPages: int,
      }
    }
    
    */
    //sub to fetch data from API
    //fetch from sample data for now (development)
    setHouses(sampleData);
    // console.log(houses);
  }, [searchQuery]);

  // useEffect(()=>{
  //   console.log(houses)

  // },[houses])

  return (
    <>
      <div className={`flex${searchQuery ? "initial":""} overflow-auto flex-wrap items-center justify-center  h-screen w-screen p-8 bg-gray-800`}>
        <div>
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
        {searchQuery && <HouseCardGrid houses={houses} />}
      </div>
    </>
  );
}

export default App;
