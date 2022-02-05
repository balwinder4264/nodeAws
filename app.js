const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to the hpme page Baby 123");
})

app.listen(3000, () => {
    console.log("Server is listning")
});

