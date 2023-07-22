// Create web server that returns a JSON object with the following structure:
// {
//     "name": "John Doe",
//     "age": 30,
//     "skills": ["Javascript", "HTML", "CSS"]
// }
// Hint: use the JSON.stringify() method to convert the object to a string.

const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const member = {
    name: "John Doe",
    age: 30,
    skills: ["Javascript", "HTML", "CSS"],
    calculateNumbers: function(var1, var2) {
        return var1 + var2;
    }
};

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    if (path === '/api/member') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(member));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});