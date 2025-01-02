const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/helm", (req, res) => {
  res.send("<h1>Helm Chart is fantastic!!!</h1>");
});

app.get("/error", (req, res) => {
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
