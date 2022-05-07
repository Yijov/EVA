const express = require("express");

const path = require("path");
const port = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
  });
}
app.listen(port, () => console.log(`Now runing on port ${port}`));
