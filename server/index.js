const PORT = 5000;
const express = require("express");

const routes = require('./routes');

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(PORT, () =>
  console.log(`App is listening on http://localhost:${PORT} ...`)
);
