const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost:27017/carsdb");
// const landingRoute = require("./routes/landing.cjs");
// const cardatabase = require("./routes/getDatabase.cjs");
// const getrandom = require("./routes/getRandom.cjs");

const Cars = require("./models/cars.cjs");

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());

app.get("/allCars", async (req, res) => {
  try {
    // Fetch all items from the database
    const items = await Cars.find();

    // Send the items as a JSON response
    res.send(items);
  } catch (error) {
    // Handle any errors
    console.error("Error fetching items:", error);
    res.status(500).send("Internal Server Error");
  }
});

// app.use("/getrandom", getrandom);
// app.use("/cardatabase", cardatabase);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log(` http://localhost:${PORT}/`);
});
