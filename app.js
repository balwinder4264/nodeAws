const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to the hpme page Baby 123");
})
const port = process.env.port || 3000
app.listen(port, () => {
    console.log("Server is listning")
});

