const PORT = 5000;
const express = require("express");

const app = express();

app.use(express.static('public')); 
app.use(express.urlencoded({ extended: false}));


app.get("/", (req, res) => {
    res.send("Hello, world");
});

app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT} ...`));