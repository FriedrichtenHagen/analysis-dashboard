require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')

const port = 3000;
const daily_transactions_Router = require("./routes/daily_transactions");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors())



app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/daily-transactions", daily_transactions_Router);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});