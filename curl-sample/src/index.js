const express = require('express');

const app = express();

app.use(express.json());

let count = 1;
app.post('/echo', (req, res) => {
    console.log(`count: ${count++}`);
    console.log(JSON.stringify({ headers: req.headers }, null, 2));
    console.log(JSON.stringify({ body: req.body }, null, 2));
    res.send(req.body);
});

app.listen(3000, () => {
    console.log('server listen on 3000');
});
