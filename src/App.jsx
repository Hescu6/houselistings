import "./App.css";
import { useState, useEffect } from "react";
import HouseCardGrid from "./components/HouseCardGrid";
import SearchBar from "./components/SearchBar";

import { useApi } from "./hooks/useApi";

import { sampleData } from "./assets/sampleData"; //sample return data from API

function App() {
  const [houses, setHouses] = useState({});
  const [searchQuery, setSearchQuery] = useState();

// //get house listings from Zillow API
//   const params = getApiParams(searchQuery);
//   const { response, error, loading } = useApi(params);

  function getApiParams(location) {
    return {
      method: "GET",
      url: "https://zillow-com1.p.rapidapi.com/propertyExtendedSearch",
      params: { location: location, home_type: "Houses" },
      headers: {
        "x-rapidapi-host": "zillow-com1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_ZILLOW_RAPID_API_KEY,
      },
    };
  }

  useEffect(() => {
    //sub to fetch data from API / fetch from hl6server (CORs policy blocking from browser)
    // if (response) {
    //   setHouses(response);
    // }

    //sub fetch from sample data for now (development)
    setHouses(sampleData);

  }, [searchQuery]);

  return (
    <>
      <div
        className={`flex${
          searchQuery ? "initial" : ""
        } overflow-auto flex-wrap items-center justify-center  h-screen w-screen p-8 bg-gray-800`}>
        <div>
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
        {searchQuery && <HouseCardGrid houses={houses} />}
      </div>
    </>
  );
}

export default App;

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
