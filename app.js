const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");

const app = express();

app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 500);
  res.json({ message: err.message || "An unknown error occurred!" });
});

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
