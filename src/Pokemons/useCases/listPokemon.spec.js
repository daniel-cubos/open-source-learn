const listPokemons = require("./listPokemon");
const inMemoryRepository = require("../repositories/inMemoryRepository");
const insertPokemon = require("./insertPokemon");

describe("Test listPokemon useCase", () => {
  test("Should be have a 10 pokemons in this list", async () => {
    const pokemons = await listPokemons(inMemoryRepository);

    expect(pokemons.length).toBe(10);
  });

  test("Should be have pikachu pokemon in list", async () => {
    const pokemons = await listPokemons(inMemoryRepository);

    const pikachu = pokemons.find((pokemon) => pokemon.name === "Pikachu");

    expect(pikachu.name).toBe("Pikachu");
  });

  test("Should be have pikachu 2 in list", async () => {
    const insertedPokemon = await insertPokemon(inMemoryRepository, {
      name: "Pikachu 2",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      type: "Electric",
    });

    expect(insertedPokemon.name).toBe("Pikachu 2");
  });
});
