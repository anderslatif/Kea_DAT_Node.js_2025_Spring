// const express = require('express');
// const app = express();

const app = require('express')();


app.get("/", (req, res) => {
    res.send({ data: "This is the root route" });
});

app.get("/blablabla", (req, res) => {
    res.send({ data: "Bla bla bla is all I have to say" });
});


const functionReference = (req, res) => {
    res.send({ data: `Your favorite number is: ${req.params.favoriteNumber}` });
};

app.get("/yourfavoritenumber/:favoriteNumber", functionReference);

app.get("/favoritethings/:favoriteFlower/:favoriteAnimal", (req, res) => {
    res.send({ data: `Your favorite flower is ${req.params.favoriteFlower} and your favorite animal is ${req.params.favoriteAnimal}` });
});

app.listen(8080);
