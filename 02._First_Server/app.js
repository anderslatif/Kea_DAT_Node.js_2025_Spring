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

app.get("/redirecttofavoritethings", (req, res) => {
    res.redirect("/favoritethings/tulips/sea lions");
});


app.get("/proxy", (req, res) => {
    fetch("https://www.google.com")
    .then((response) => response.text())
    .then((result) => res.send(result));
    // fetch("https://google.com")
    // .then((response) => response.arrayBuffer())
    // .then((buffer) => {
    //     const decoder = new TextDecoder('iso-8859-1');
    //     const text = decoder.decode(buffer);
    //     res.send(text);
    // });
});


app.post("/favoritepoliticians", (req, res) => {

    console.log(req.body);

    res.send({ data: req.body });
});





/* assignment
create a /proxy endpoint that calls the google homepage and returns the page to the client
*/


app.listen(8080);
