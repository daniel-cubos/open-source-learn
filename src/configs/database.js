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

module.exports = pool;
