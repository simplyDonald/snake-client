
//stores the active TCP connection object (global variable)
let connection;

const setupInput = function (conn) { //because we are passing a variable into it
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (data) {
  // your code here

  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up");
  }
  else if (data === 'a') {
    connection.write("Move: left");
  }

  else if (data === 's') {
    connection.write("Move: down");
  }

  else if (data === 'd') {
    connection.write("Move: right");
  }

  else if (data === 't') {
    connection.write("Say: DOGE TO THE MOON");
  }

  else if (data === 'o') {
    connection.write("Say: CATCH ME IF U CAN🕵️‍♂️");
  }

  else if (data === 'y') {
    connection.write("Say: ADVERT SPACE 👣");
  }


  
};

module.exports = {setupInput};