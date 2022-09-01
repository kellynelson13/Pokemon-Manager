const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon.js")
const methodOverride = require("method-override")

///Middleware////
app.use(express.urlencoded({ extended: false })); 
app.use(methodOverride("_method"))

///ROUTES////

//INDEX//
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        allPokemon: pokemon,
    })
})

//NEW///

//DELETE///
app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect("/pokemon")
})

///UPDATE///

///CREATE///

///EDIT////

///SHOW///
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
        onePokemon: pokemon[req.params.id]
    })
        //res.send(pokemon[req.params.id].name)
})

////Tell our app to listen////
app.listen(port, function (){
    console.log("Listening on port", port)
})