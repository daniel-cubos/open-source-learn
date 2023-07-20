const { Router } = require("express");
const listPokemon = require("./Pokemons/useCases/listPokemon");
const insertPokemon = require("./Pokemons/useCases/insertPokemon");
const routes = Router();

const databaseRepository = require("./Pokemons/repositories/databaseRepository");

routes.get("/pokemons", async (req, res) => {
  return res.status(200).json(await listPokemon(databaseRepository));
});

routes.post("/pokemons", async (req, res) => {
  return res
    .status(200)
    .json(await insertPokemon(databaseRepository, req.body));
});

module.exports = routes;
