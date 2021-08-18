const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , coordinates);
});

const { fetchISSFlyOverTimes } = require('./iss');

fetchISSFlyOverTimes({ latitude: "49.27670", longitude: "-123.13000" }, (error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned flyover times:' , flyOverTimes);

});
