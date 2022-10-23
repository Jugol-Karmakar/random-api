const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const usersRoutes = require("./routes/v1/user.route");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/user", usersRoutes);

app.all("*", (req, res) => {
  res.send("NO route found.");
});

app.listen(port, () => {
  console.log(`Random User Data listening on port ${port}`);
});
