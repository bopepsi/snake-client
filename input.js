// ? setup interface to handle user input from stdin

const { MOVES } = require('./constants');

const setupInput = function (conn) {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", (key) => {
        if (key === '\u0003') {
            process.stdout.write(`bye!`);
            conn.end();
            process.exit();
        };
        conn.write(MOVES[key]);
        conn.on('data', (key) => {
            conn.write(key);
        })
    });
    return stdin;
};

module.exports = {
    setupInput,
}