const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const client = net.createConnection({ host: '127.0.0.1', port: 8124 });

client.on('connect', () => {
    client.write('First hello from client!');
});

client.on('data', data => {
    console.log(data.toString());
})

client.on('end',()=>{
    console.log('server disconnected')
})

rl.on('line', (line) => {
    client.write(line);
})

