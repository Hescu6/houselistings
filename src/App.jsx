import "./App.css";
import { useState, useEffect } from "react";
import HouseCardGrid from "./components/HouseCardGrid";
import SearchBar from "./components/SearchBar";

import axios from "axios";

import { useApi } from "./hooks/useApi";

import { sampleData } from "./assets/sampleData"; //sample return data from API

function App() {
  const [houses, setHouses] = useState({props:[]});
  const [searchQuery, setSearchQuery] = useState();
  const [loading, setloading] = useState(false);

  // //get house listings from Zillow API
  //   const params = getApiParams(searchQuery);
  //   const { response, error, loading } = useApi(params);

const API_URL = "https://hescu6server.herokuapp.com/";
const ZILLOW_ENDPOINT = "zillow/";

  function getApiParams(location) {
    return {
      method: "GET",
      url: `http://localhost:61645/zillow/${location}`,
    };
  }

  async function getData(location) {
    const res = await axios.get(`http://localhost:52998/zillow/${location}`);
    return res;
  }

  useEffect(() => {
    // //sub to fetch data from API / fetch from hl6server (CORs policy blocking from browser)
    // if (response) {
    //   setHouses(response);
    // }

    try {
      setloading(true);
      axios
        .get(`${API_URL}${ZILLOW_ENDPOINT}${searchQuery}`)
        .then((response) => {
          const { data } = response;
          setHouses(JSON.parse(data));
          console.log("IN TRY");
          console.log(houses);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }

    console.log("IN EFFECT")
    // setHouses(data);
    // //sub fetch from sample data for now (development)
    // console.log(sampleData);
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
        { loading && <h2 className="text-gray-900 font-bold text-xl tracking-tighter  dark:text-white">Loading...</h2>}
        {searchQuery && !loading && <HouseCardGrid houses={houses} />}
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
