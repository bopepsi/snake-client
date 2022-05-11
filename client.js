const { connect } = require('./play');

console.log("Connecting ...");

const conn = connect();

conn.on('data', (data) => {
    console.log(data);
})
