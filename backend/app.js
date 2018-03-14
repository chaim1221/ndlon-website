const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ type: 'application/json' }));
app.use('/', express.static(path.join(__dirname, '../pub/')));
app.get('/*', function (req, res) { res.redirect('/index.html'); });

// todo; add error handling

module.exports = app;
