const express = require('express');
const { graphqlApi } = require('./graphqlApi');

const app = express();
app.use('/graphql', graphqlApi());

app.listen(4000, () => {
    console.log('Server Listen On http://localhost:4000/graphql');
});
