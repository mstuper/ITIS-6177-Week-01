const { exec } = require("child_process");
var express = require('express');
var app = express();

exec("open ~/Documents/git6177", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});    

var port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening on http://localhost:${3000}'));

