import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Info() {
  // const { field, setfield, place, setPlace } = useContext(UserContext);
  const { field, setfield, place, setPlace } = useContext(UserContext);
  const handleClick = async () => {
    try {
      // Send the data to the backend
      const response = await axios.post(process.env.REACT_APP_BACKENDURI + "/fetchDataFromJobSearchAPI", {
        field,
        place,
      });



      // Handle the response as needed
      console.log(response?.data?.data);

    } catch (error) {
      console.error('Error sending data to the backend', error);
    }
  };

  return (
    <div className=" w-full flex flex-col justify-center items-center mb-10">
      <div className="w-full flex justify-end">
        <div className="grad3 w-full h-[400px] blur-[220px] absolute flex justify-end items-end"></div>
      </div>
      <div className="w-[90%] p-2 box-background">
        <div className="p-5 flex flex-col justify-center">
          <h5 className="text-center mt-12 text-3xl font-bold tracking-tight text-gray-900 dark:text-black">
            jobs.
          </h5>
          <label className="flex flex-col text-black font-semibold sm:text-xl gap-2">
            Enter Your Domain:
            <input
              type="text"
              placeholder="Enter your text here"
              value={fie}
              onChange={(e) =>  setfield(e.target.value) }
            />
          </label>
          <label className="flex flex-col mt-10 text-black font-semibold sm:text-xl gap-2">
            Enter Your Preferred location:
            <input
              type="text"
              placeholder="Enter your location"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="text-white h-[40px] border-white sm:w-[60%] bg-[#505050] rounded-full px-4"
            />
          </label>
          {console.log(place, field)}
          <div className="flex justify-center mt-5">
            <button className="rounded-xl inline-flex items-center px-3 py-2 font-semibold text-center text-white bg-blue-700 hover:bg-blue-800" onClick={handleClick}> Submit!</button>
          </div>
        </div>
      </div>
    </div>
  );
}