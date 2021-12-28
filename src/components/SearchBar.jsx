import React from 'react'

export default function SearchBar() {
    return (
      <>
        <div className=" flex justify-center items-center">
          <div className=" p-4 w-96 rounded-md">
            <h1 className="text-xl font-bold text-slate-300">Search Listings</h1>
            <div className="mt-5 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
              <input
                className="flex-grow text-xs outline-none bg-inherit text-slate-300 focus:text-yellow-500"
                type="text"
                placeholder="Address or Zip code..."
              />
              <spa>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 hover:text-yellow-500 transition duration-100 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </spa>
            </div>
          </div>
        </div>


      </>
    );
}
