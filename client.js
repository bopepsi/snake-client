const { connect } = require('./play');

console.log("Connecting ...");

const conn = play.connect();

conn.on('data', (data) => {
    console.log(data);
})