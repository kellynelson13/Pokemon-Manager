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

////Tell our app to listen////
app.listen(port, function (){
    console.log("Listening on port", port)
})