const {connect} = require("./client");
const {setupInput} = require('./input');

console.log("Connecting ...");
// connect();//no need
setupInput(connect());

//come to input.js