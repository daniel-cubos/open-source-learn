async function listPokemons(repository) {
  await repository.getAll();
}

module.exports = listPokemons;
