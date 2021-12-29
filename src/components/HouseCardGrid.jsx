import React from "react";
import HouseCard from "./HouseCard";

export default function HouseCardGrid({ houses }) {
  if (!("props" in houses) || !houses) {
    return <></>;
  }
  const { props } = houses;
  return (
    <div className="px-2">
      <div className="flex flex-wrap items-center justify-center -mx-2">
        {props.map((house) => (
          <div
            className="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 xs:w-1/1 p-2"
            key={house.zpid}>
            <HouseCard house={house} />
          </div>
        ))}
      </div>
    </div>
  );
}
