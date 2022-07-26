import http from 'http';
import { fibonacci } from '../fibonacci.mjs';

http.createServer((req, res) => {
    const n = Number(req.url.substring(1));
    if(Number(isNaN(n))){
        return res.end();
    }

    const result = fibonacci(n);
    res.end(result.toString());
}).listen(3000);