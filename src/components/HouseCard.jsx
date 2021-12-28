import React from "react";

export default function HouseCard({ house }) {
  const {
    address,
    imgSrc,
    bedrooms,
    bathrooms,
    price,
    livingArea,
    lotAreaUnit,
    lotAreaValue,
    propertyType,
    zpid,
    latitude,
    longitude

  } = house;

  //address variables for display
  const addressAr = address.split(",");
  const street = addressAr.shift().toString();
  const city = addressAr.join(", ");
  const community = addressAr[0];


  //URL links
  const zillowURL = `https://www.zillow.com/homedetails/${zpid}_zpid/`;
  const googleMapURL = `http://maps.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
      <span title="Open Google Maps">
        <a href={googleMapURL} target="_blank">
          <img className="rounded-t-lg" src={imgSrc} alt="" />
        </a>
      </span>
      <div className="p-5">
        <a href="#">
          <h3 className="text-gray-900 font-bold text-xl tracking-tighter  dark:text-white">
            {street}
          </h3>
          <h6 className="text-gray-900 font-semibold  tracking-tight mb-2 dark:text-white">
            {city}
          </h6>
        </a>
        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
          Beautiful {propertyType.replace("_", " ").toLowerCase()} home with
          over {livingArea.toLocaleString("en-US")} finished {lotAreaUnit}{" "}
          situated on a beautiful lot in sought-after {community} community.
          Home features {bedrooms} bedrooms, and {bathrooms} bathroom
          {bathrooms > 1 ? "s" : ""}
        </p>
        <span title="Open Zillow">
          <a
            href={zillowURL}
            target="_blank"
            className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
}
