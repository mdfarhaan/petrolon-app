require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/vh", require("./routes/Vehicles"));
app.use("/fl", require("./routes/Fuel"));

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
