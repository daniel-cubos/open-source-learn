const { Pool } = require("pg");

const pool = new Pool({
  host: "isilo.db.elephantsql.com",
  port: 5432,
  database: "unpxcmny",
  user: "unpxcmny",
  password: "P7KEdEKJY350JhgZcEBqSzYo9cSQsyKG",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

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
