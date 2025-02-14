const express = require('express');
const app = express();

app.use(express.json());

// const app = require('express')();

        // endpoint
// route / get handler
app.get("/", (req, res) => {
    res.send(`
            <h1>This is the root route</h1>
            <h3>Welcome</h3>
        `);
});


app.get("/welcomepage", (req, res) => {
    res.sendFile(__dirname + '/index.html');
}); 

app.get("/blablabla", (req, res) => {
    res.send({ data: "Bla bla bla is all I have to say" });
});

// assignment create a route for /search that returns an empty JSON
// task create a search where the query parameter is q that contains the search
app.get("/search", (req, res) => {
    res.send({ data: `You searched for: ${req.query.q}`});
});


const functionReference = (req, res) => {
    res.send({ data: `Your favorite number is: ${req.params.favoriteNumber}` });
};

app.get("/yourfavoritenumber/:favoriteNumber", functionReference);

app.get("/favoritethings/:favoriteFlower/:favoriteAnimal", (req, res) => {
    res.send({ data: `Your favorite flower is ${req.params.favoriteFlower} and your favorite animal is ${req.params.favoriteAnimal}` });
});


app.post("/favoritepoliticians", (req, res) => {

    console.log(req.body);

    res.send({ data: req.body });
});

// assignment create a new route and send some data to it through the body


app.listen(8080);
