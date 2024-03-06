const express = require("express");
const cron = require("node-cron");
const app = express();
const cors = require("cors");
const fs = require("fs");
const PORT = 8080;

const cronMessage = () => {
  console.log("Cron job executed at:", new Date().toLocaleString());
}

const getRandomWord = (filename, callback) => {
  fs.readFile("./words/" + filename, "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      const words = data.split("\n");
      const randomIndex = Math.floor(Math.random() * words.length);
      callback(words[randomIndex]);
    }
  });
}

app.use(cors());

app.get("/api/fr/word", (req, res) => {
  getRandomWord("fr.txt", (word) => {
    res.json({ "word": word });
  });
});

app.get("/api/en/word", (req, res) => {
  getRandomWord("en.txt", (word) => {
    res.json({ "word": word });
  });
})

cron.schedule("*/5 * * * *", () => {
  cronMessage();
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});