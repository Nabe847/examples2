const express = require('express');

const app = express();

app.use((req, res, next) => {
    // 未認証ならBasic認証するよう要求する
    if (!req.headers['authorization']) {
        res.setHeader('WWW-Authenticate', ['Basic realm="hello", charset="UTF-8"']);
        return res.status(401).send();
    }
    next();
}).use((req, res, next) => {
    const authorization = req.headers['authorization'];
    const credentials = authorization.match(/Basic (.*)/)[1];
    const [user, password] = Buffer.from(credentials, 'base64').toString().split(':');

    // 本当はタイミング情報を漏らすような比較方法を使っちゃダメ
    // 参考 https://nodejs.org/api/crypto.html#crypto_crypto_timingsafeequal_a_b
    if (user !== 'user' || password !== 'password') {
        return res.status(401).send();
    }

    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('server listen at port 3000');
});
