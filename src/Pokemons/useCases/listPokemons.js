async function listPokemons(repository) {
  return await repository.getAll();
}

module.exports = listPokemons;
