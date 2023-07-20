const inMemoryRepository = require("../repositories/inMemoryRepository");
const insertPokemon = require("./insertPokemon");

describe("Test insertPokemon useCase", () => {
  test("Should be have pikachu 2 in list", async () => {
    const insertedPokemon = await insertPokemon(inMemoryRepository, {
      name: "Pikachu 2",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      type: "Electric",
    });

    expect(insertedPokemon.name).toBe("Pikachu 2");
  });

  test("Should be have pikachu 3 in list", async () => {
    const insertedPokemon = await insertPokemon(inMemoryRepository, {
      name: "Pikachu 3",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      type: "Electric",
    });

    expect(insertedPokemon.name).toBe("Pikachu 3");
  });
});
