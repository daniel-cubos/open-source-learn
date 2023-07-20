async function insertPokemon(repository, pokemon) {
  return await repository.add(pokemon);
}

module.exports = insertPokemon;
