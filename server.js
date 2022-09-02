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
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})

//DELETE///
app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect("/pokemon")
})

///UPDATE///

///CREATE///
app.post("/pokemon", (req, res) => {
    //console.log(req.body)
    const pokeDude = req.body
    const newPoke = {}
    const stats = {}
    const type = []
    newPoke.name = pokeDude.name
    newPoke.img = pokeDude.img
    type.push(pokeDude.type)
    stats.hp = pokeDude.hp
    stats.attack = pokeDude.attack
    stats.defense = pokeDude.defense
    stats.speed = pokeDude.speed
    newPoke.stats = stats
    newPoke.type = type
    console.log(newPoke)
    pokemon.unshift(newPoke)
    res.redirect("/pokemon")
})

///EDIT////
app.get("/pokemon/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        onePokemon: pokemon[req.params.id],
        index: req.params.id
    })
})

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