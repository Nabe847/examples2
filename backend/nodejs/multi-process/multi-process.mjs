import {fork, setupMaster} from 'cluster';
import os from 'os';
import path from 'path';
import url from 'url';

console.log('Main: ' + process.pid);

// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

setupMaster({exec: `${__dirname}/web-app.mjs`});

const cpuCount = os.cpus().length;
for(let i=0; i<cpuCount; i++){
    const child = fork();
    console.log('Child: ' + child.process.pid);
}