const request = require('request');

const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }
    const ip = JSON.parse(body);
    callback(null, ip);

  });
};

module.exports = { fetchMyIP };