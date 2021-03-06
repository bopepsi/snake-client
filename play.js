const net = require("net");
const { IP, PORT } = require('./constants');

// ? establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host: IP,// IP address here,
        port: PORT// PORT number here,
    });
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on('connect', () => {
        console.log('Successfully connected to game server');
    });
    conn.write('Name: BOW');
    conn.on('end', () => {
        process.stdout.write(`bye!`);
        process.exit();
    })
    return conn;
};



module.exports = {
    connect,
}

// ? Consider what is happening in the code that you wrote so far:
// * You used Node's net library (specifically, the createConnection function) to create an object named conn in the code above.
// * The conn object that Node returned to you represents the connection that you have with the server.
// * The conn object is full of useful methods and properties that can now be used to interact with the server!

//? About Events
// * When you connect to a server, or when it closes its connection with you, or when it sends you data, these are events. You can control how your client responds to these events if you know how to listen for them. If you don't listen for the event, you can't react to it.
//* The conn object that Node gave you has everything you need to listen for events that occur on your connection. The code that defines what to do when an event occurs is often called an event handler.
// * The.on method lets you specify an event name and a function that does something when that event happens.

//TODO      conn.on("connect", () => {
//TODO          // code that does something when the connection is first established
//TODO      });