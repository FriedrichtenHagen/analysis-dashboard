const express = require("express");
require('dotenv').config()
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "Friedrich werkelt fröhlich" });

  
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});