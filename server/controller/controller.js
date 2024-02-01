// // // linkedinJobScraperController.js
// // const axios = require('axios');

// // async function scrapeLinkedInJobs(req, res) {
// //   const { title, location, rows } = req.body;

// //   const options = {
// //     method: 'POST',
// //     url: 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs',
// //     headers: {
// //       'content-type': 'application/json',
// //       'X-RapidAPI-Key': '07c05c07d6msh4d8b6bfafd52f1fp1a6cbfjsn1765f358b68c',
// //       'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com',
// //     },
// //     data: {
// //       title,
// //       location,
// //       rows,
// //     },
// //   };

// //   try {
// //     const response = await axios.request(options);
// //     console.log(response?.data);
// //     res.json(response?.data);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal  Error' });
// //   }
// // }

// // module.exports = {
// //   scrapeLinkedInJobs,
// // };


// // linkedinJobScraperController.js
// const axios = require('axios');

// async function scrapeLinkedInJobs(req, res) {
//   const { title, location, rows } = req.body;

//   const options = {
//     method: 'POST',
//     url: 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': '07c05c07d6msh4d8b6bfafd52f1fp1a6cbfjsn1765f358b68c',
//       'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com',
//     },
//     data: {
//       title,
//       location,
//       rows,
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response?.data);
//     res.json(response?.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// async function fetchDataFromExternalAPI(req, res) {
//   try {
//     // Define your GET request options
//     const options = {
//       method: 'GET',
//       url: 'https://api.example.com/data',
//       headers: {
//         'Content-Type': 'application/json',
//         // Include any other headers if needed
//       },
//       // Include query parameters if required
//       params: {
//         param1: 'title',
//         param2: 'location',
//       },
//     };

//     // Make the GET request using Axios
//     const response = await axios.request(options);

//     // Log the response data (optional)
//     console.log(response?.data);

//     // Send the response data back to the client
//     res.json(response?.data);
//   } catch (error) {
//     // Log and handle errors
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// module.exports = {
//   scrapeLinkedInJobs,
//   fetchDataFromExternalAPI, // Add this function for handling the GET request
// };


// jobSearchAPIController.js
const axios = require('axios');

async function fetchDataFromJobSearchAPI(req, res) {
  const options = {
    method: 'GET',
    url: 'https://job-search-api1.p.rapidapi.com/v1/job-description-search',
    params: {
      q: 'data science internship',
      page: '1',
      country: 'india',
      city: 'gurugram',
    },
    headers: {
      'X-RapidAPI-Key': '07c05c07d6msh4d8b6bfafd52f1fp1a6cbfjsn1765f358b68c',
      'X-RapidAPI-Host': 'job-search-api1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response?.data);
    res.json(response?.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  fetchDataFromJobSearchAPI,
};
