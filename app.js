const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/json');
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/login', (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).send("INVALID");
    } else if (req.body.password === 'a' + req.body.username) {
        res.send("OK");
    } else {
        res.status(401).send("FAILED");
    }
});

app.listen(3001, '0.0.0.0', () => console.log('Listening on port 3001!'));
