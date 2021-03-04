const express = require('express');
const app = express();
const hbs = require("express-handlebars");
const path = require('path');

const getCountries = require('./lib/restcountries')


app.use(express.static(path.join(__dirname, 'public')));

app.engine(
  "hbs",
  hbs({
    defaultLayout: "layout",
    extname: ".hbs",
    /* layoutsDir: path.join(__dirname, 'layouts'); */
  })
);

app.set("view engine", ".hbs");

app.get("/", async(req, res) => {
  let data = await getCountries()
  res.render("index", {data, listExists: true});
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});