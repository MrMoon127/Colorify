const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080; // default port 8080

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  let templateVars = {}
  res.render("index", templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});