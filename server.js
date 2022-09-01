const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon.js")

///Middleware////
app.use(express.urlencoded({ extended: false })); 

///ROUTES////

//INDEX//
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        allPokemon: pokemon,
    })
})

//NEW///

//DELETE///

///UPDATE///

///CREATE///

///EDIT////

///SHOW///
app.get("/pokemon/:id", (req, res) => {
    console.log(req.params.id)
    console.log(pokemon[req.params.id])
    res.render("show.ejs", {
        onePokemon: pokemon[req.params.id]
    })
        //res.send(pokemon[req.params.id].name)
})

////Tell our app to listen////
app.listen(port, function (){
    console.log("Listening on port", port)
})