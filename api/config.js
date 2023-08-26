require('dotenv').config()

const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "db4free.net",
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.database,
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  module.exports = config;