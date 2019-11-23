import http from 'http';

const server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
    res.write('Hello HTTP!\n');
    setTimeout(() => {
        res.write('I can stream!\n');
        res.end();
    }, 3000);
});