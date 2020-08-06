const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/dice-game'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/dice-game/app.component.html'));
    }
)
app.get('/rules', function(req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/dice-game/app.component.html'));
    }
)
app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/dice-game/app.component.html'));
    }
)
app.listen(process.env.PORT || 8080);