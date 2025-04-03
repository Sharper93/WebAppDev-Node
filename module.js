// import people 
// const xyz = require('./people');

//empty object
// console.log(xyz.people, xyz.ages);

// unable to access people without calling the file with require ^ 
//console.log(people);

//mulitple exports
const { people, ages } = require('./people');

console.log(people, ages);

// import os to find info about os 
const os = require('os');
// shows platform and user information of os
console.log(os.platform(), os.homedir());



