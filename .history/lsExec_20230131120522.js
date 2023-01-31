const { exec } = require("child_process");
const express = require('express');
const app = express();


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

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening on http://localhost:${3000}'));

