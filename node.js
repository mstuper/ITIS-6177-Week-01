var express = require('express');
var app = express();


app.get('/', (req,res) => {
    res.json('Hello World')
    
});

var port = process.env.PORT || 8080;

app.listen(port, () => console.log('Listening on http://localhost:${port}'));