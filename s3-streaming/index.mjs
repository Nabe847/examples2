import { fileURLToPath } from 'url';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

const client = new S3Client({
  credentials: {
    accessKeyId: '',
    secretAccessKey: '',
  },
});

export const main = async () => {
  const command = new GetObjectCommand({
    Bucket: 'test-bucket-src',
    Key: 'hello-s3.txt',
  });

  try {
    const response = await client.send(command);
    const upload = new Upload({
      client,
      params: {
        Bucket: 'test-bucket-dest',
        Key: 'hello-s3-copy.txt',
        Body: response.Body,
      },
    });
    upload.on('httpUploadProgress', (progress) => {
      console.log(progress);
    });
    await upload.done();
  } catch (err) {
    console.error(err);
  }
};
// snippet-end:[s3.JavaScript.buckets.getobjectV3]

// Invoke main function if this file was run directly.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log({ 'import.meta.url': import.meta.url });
  main();
}
