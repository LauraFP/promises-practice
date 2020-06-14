// Instantiate axios dependency to make http requests (https://www.npmjs.com/package/axios):
const axios = require('axios');

// Create API access we'll use to make the following API requests:
const API_URL = 'https://rickandmortyapi.com/api/character/';

// Make an API request:
axios.get(API_URL).then(data1 => {
  // When we have the response, use this information to make another API request:
  axios.get(API_URL + data1.data.results[0].id).then(data2 => {
    // Use the new response again to make another API request:
    axios.get(data2.data.origin.url).then(data3 => {
      // When we have all the needed information, we can print in console what we want:
      console.log(data1.data.info.count);
      console.log(data2.data.name);
      console.log(data3.data.dimension);
      // If we have some error in the third request (line 12), we catch and print it in console:
    }).catch(error => {
      console.error(error);
    });
    // If we have some error in the second request (line 10), we catch and print it in console:
  }).catch(error => {
    console.error(error);
  });
  // If we have some error in the first request (line 8), we catch and print it in console:
}).catch(error => {
  console.error(error);
});

// To run this code write: npm run promise
