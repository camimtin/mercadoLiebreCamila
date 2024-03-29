const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

// app.get('/', (req, res) => res.send("Hola mundo!"));
app.get('/', (req, res) => res.sendFile(path.resolve("views/home.html")));

app.listen(process.env.PORT || 3000, function () {
    console.log('App listening on port http://localhost:3000/');
});