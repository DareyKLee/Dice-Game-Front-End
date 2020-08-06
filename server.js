const express = require('express');
const path = require('path');
const app = express();
const STATIC = path.resolve(__dirname, 'dist');
const APP = path.resolve(STATIC, '/*');

app.use(express.static(STATIC));

app.get('*', function(req, res) {
    res.sendFile(APP);
});

// app.use(express.static(__dirname + '/dist/dice-game'));
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname +
//         '/dist/dice-game/app.component.html'));})

app.listen(process.env.PORT || 8080);        