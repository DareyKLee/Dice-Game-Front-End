const express = require('express');
const path = require('path');
const app = express();

app.use(express(__dirname + '/dist/dice-game'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/dice-game/app.component.html'));
    }
);

app.listen(process.env.PORT || 8080);        