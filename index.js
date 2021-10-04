const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const pokedex = [];

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  setTimeout(() => {
  }, 1000);

  res.render("index", {
    pokedex,
  });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/new", (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex[id];
  res.render("detalhes", {
    pokemon,
  });
});

app.listen(port, () =>
  console.log(`Servidor: http://localhost:${port}`)
);
