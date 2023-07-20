const pokemons = require("../../data/pokemons.json");

function getAll() {
  return pokemons;
}

function add({ name, image, type }) {
  const newPokemon = {
    id: Math.floor(Math.random() * 10000),
    name,
    image,
    type,
  };
  pokemons.push(newPokemon);

  return newPokemon;
}

module.exports = {
  getAll,
  add,
};
