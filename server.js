const path = require("path");
const express = require("express");
const app = express(),
  HTML_FILE = path.join(__dirname, "index.html");
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log(`Go to localhost:${PORT}  to view your site`);
  console.log("Press Ctrl+C to quit.");
});
