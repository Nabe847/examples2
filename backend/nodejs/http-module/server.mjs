import http from 'http';

const todos = [
    {id: 1, title: 'ネーム', completed: false},
    {id: 2, title: '下書き', completed: true},
]

const server = http.createServer((req, res) => {
    if(req.url !== '/api/todos'){
        res.statusCode = 404;
        res.end();
    }

    if(req.method !== 'GET'){
        res.statusCode = 405;
        res.end();
    }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(todos));
}).listen(8080);


