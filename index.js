// node server file
/*
  localhost:8080 should take users to index.html
  localhost:8080/about should take users to about.html
  localhost:8080/contact-me should take users to contact-me.html
  404.html should display any time the user tries to go to a page not listed above.
*/

import http from 'http';
import * as fs from 'fs/promises';

const server = http.createServer( async (req, res) => {

  switch (req.url) {
    case '/index.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(await read('./index.html'));
      break;
    case '/about.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(await read('./about.html'));
      break;
    case '/contact-me.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(await read('./contact-me.html'));
      break;
    case '/style.css':
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(await read('./style.css'));
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(await read('./404.html'));
      break;
  }
  res.end();
 
});

server.listen(8000)

async function read(path) {
  try {
    return await fs.readFile(path, { encoding: 'utf-8'});
  } catch (err) {
    console.log('reading error' + err);
  }
}