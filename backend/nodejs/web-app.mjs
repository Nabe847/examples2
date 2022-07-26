import http from 'http';

http.createServer((req, res) => {
    const n = Number(req.url.substring(1));
    if(Number(isNaN(n))){
        return res.end();
    }

    const result = fibonacci(n);
    res.end(result.toString());
}).listen(3000);

function fibonacci(n){
    return n <= 1 ? n: fibonacci(n-1) + fibonacci(n-2);
}