import React, { useState,useEffect } from 'react'
import axios from "axios";
import Cards from './Cards';

export default function Info2() {
    const [field, setField] = useState('');
    const [location, setLocation] = useState('');
    const [response,setResponse]=useState("")


    

    const handleClick = async () => {
        try {
            // Send the data to the backend
            const options = {
                method: 'GET',
                url: 'https://jsearch.p.rapidapi.com/search',
                params: {
                  query: `${field} in ${location}`,
                  page: '1',
                  num_pages: '1'
                },
                headers: {
                  'X-RapidAPI-Key': 'ad3a8ebe22msh214895c63b0598ap13c572jsn601db0b8a9ca',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                }
              };
              
              try {
                const res = await axios.request(options);
                setResponse(res)

                console.log(response?.data);
            } catch (error) {
                console.error(error);
            }
            // Handle the response as needed
            console.log(response?.data?.data);

        } catch (error) {
            console.error('Error sending data to the backend', error);
        }
    };
    useEffect(() => {
        handleClick()
      }, [])
    return (
        <>
<div className='w-full flex justify-center'>
  <div className='w-[80%] font-center'>
    <h1 className='mt-24 text-[3.5rem] text-center'>Find your Dream Position Here!</h1>
    <label className="flex flex-col text-black font-semibold sm:text-xl gap-2 mt-12">
      Enter Profile you're searching for:
      <input
        type="text"
        placeholder="Enter your text here"
        value={field}
        onChange={(e) => { setField(e.target.value) }}
        className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
      />
    </label>
    <label className="flex flex-col text-black font-semibold sm:text-xl gap-2">
      Enter Your Location:
      <input
        type="text"
        placeholder="Enter preferred Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
      />
    </label>

    <button onClick={handleClick} className="mt-4 bg-blue-500 w-[100%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button>

    {console.log(field, location)}
  </div>
</div>
<Cards Company={response?.data?.data} />
</>

    )
}
