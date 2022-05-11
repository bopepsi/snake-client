const net = require('net');

const server = net.createServer();

let listOfClients = [];

let broadcast = (data) => {
    for (var conn of listOfClients) {
        conn.write(data);
    }
}

server.on('connection', (conn) => {
    conn.setEncoding('utf-8');
    listOfClients.push(conn);
    console.log('client connected');
    conn.on('end', () => {
        console.log('client disconnected')
    })

    conn.on('data', (data) => {
        console.log('From client:', data);
        broadcast(`🔈: ${data}`);
    })
});

server.listen(8124, () => {
    console.log('Server listening on port 8124!');
});

