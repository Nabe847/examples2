const express = require('express');
const { Storage } = require('@google-cloud/storage');

const app = express();
const storage = new Storage({ projectId, keyFilename });

app.get('/:id', async (req, res) => {
  res.writeHead(200, {
    'Content-Disposition': 'attachment;filename=test.jpg',
    'Content-Type': 'image/jpg;',
  });

  storage
    .bucket('my-bucket')
    .file(`Images/${req.params.id}/${filename}`)
    .createReadStream() // ストリーム作る
    .pipe(res);
});
