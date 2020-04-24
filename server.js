const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});


app.post('/api/cart', (req, res) => setTimeout(() => res.status(201).send(), 800));

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);
