const { connect } = require('./play');
const { setupInput } = require('./input');

console.log("Connecting ...");

const conn = connect();
setupInput(conn);

conn.on('data', (data) => {
    console.log(data);
});
