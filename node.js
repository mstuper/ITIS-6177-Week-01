var express = require('express');
var app = express();


app.get('/', (req,res) => {
    res.send('Hello World')
    
});

var port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening on http://localhost:${3000}'));