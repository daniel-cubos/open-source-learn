const pool = require("../../configs/database");

async function getAll() {
  const res = await pool.query("SELECT * from pokemons");

  return res.rows;
}

async function add({ name, image, type }) {
  try {
    const query = {
      text: "INSERT INTO pokemons(name, image, type) VALUES($1, $2, $3) RETURNING *",
      values: [name, image, type],
    };

    const res = await pool.query(query);

    return res.rows[0];
  } catch (error) {
    return "Failed";
  }
}

module.exports = {
  getAll,
  add,
};
