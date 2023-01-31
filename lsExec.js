const {exec} = require("child_process");
const express = require('express');
const app = express();

app.get('/finder', (req, res) => {
 
    exec("open .", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
    }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
    }
        console.log(`stdout: ${stdout}`);
        res.json('Opening Finder');
})    
}); 

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening on http://localhost:${3000}'));
