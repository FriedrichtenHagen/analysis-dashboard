require('dotenv').config()

const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "db4free.net",
      user: process.env.MYSQLUSER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      connectTimeout: 60000
    }
  };


  console.log(config.db)

  module.exports = config;