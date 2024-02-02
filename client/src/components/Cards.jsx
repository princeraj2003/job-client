import React, { useContext } from "react";



export default function Cards({Company}) {
  return (
    <div className="flex flex-col gap-8 justify-center items-center relative z-10">
      <h1 className="text-center text-3xl sm:text-5xl font-bold text-gradient1 mt-10 mb-4">Here are the List of Companies that Provide Jobs/Internship!</h1>
      <div className="flex flex-wrap justify-center gap-6 mb-10 w-[90%] sm:w-full">
      {/* {console.log(Company)} */}
        {Company?.map((item, index) => (
          <div
            key={index}
            className="max-w-sm flex flex-col gap-3 box-background pb-4 text-[0.75rem] sm:text-base "
          >
            <img
              src={item?.employer_logo}
              className="w-full h-[200px] rounded-t-2xl"
              alt="No image available for this site due toh copyright issues!! Visit the site instead."
            />
            <p className="font-semibold text-black px-3">
              Company Name: {item?.employer_name}
            </p>
            <p className="font-semibold text-black px-3">
              Job Title: {item?.job_title}
            </p>
            <p className="text-justify font-semibold text-black px-3">
              Job Description: {item?.job_description.slice(0,550)}
            </p>
            <p className="text-justify font-semibold text-black px-3">
              Job City: {item?.job_city}
            </p>
            <p className="text-justify font-semibold text-black px-3">
              Employment Type: {item?.job_employment_type}
            </p>
            
            <div className="flex justify-center mt-4 ">
              
              <a
                target="_blank"
                href={item?.job_apply_link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <button>Apply Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
