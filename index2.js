const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(flyOverTimes) {
  console.log(flyOverTimes);
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });