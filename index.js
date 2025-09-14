const { readFile } = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files in this directory
app.use(express.static(__dirname));

// Main route
app.get("/", (req, res) => {
  readFile(path.join(__dirname, "index.html"), "utf8", (err, html) => {
    if (err) {
      return res.status(500).send("sorry");
    }
    res.send(html);
  });
});

app.listen(PORT, () =>
  console.log(`App available on http://localhost:${PORT}`)
);
