const { IP, PORT } = require("./constants");
const net = require('net')
const connect = function () {
  const conn = net.createConnection({
    host:IP,
    port: PORT,
  });
  conn.on('connect',()=>{
    console.log("Successfully connected to game server")
    conn.write("Name: HKR");
    // conn.write("Move: up")
  });
  // setInterval(() => {
  // conn.write("Move: up")
  // }, 1000);
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data',(data)=>{
    console.log(data);
  })
  return conn;
};

module.exports = {connect};