const express = require('express');
const path = require('path');
const app = express();

let router = express.Router();

// app.use(express.static(__dirname + '/dist/dice-game'));
app.use('/*', router);
router.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/dice-game/app.component.html'));
    }
)
app.listen(process.env.PORT || 8080);