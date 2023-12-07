const mongoose = require("mongoose");

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;
//connect to db
const db = mongoose.connect("mongodb://localhost:27017/carsdb");

const Cars = require("./models/cars.cjs");

//Add Customer
const addCar = async (car) => {
  try {
    const newCar = await Cars.create(car);
    console.info("New Car Added", newCar);
  } catch (error) {
    console.error("Error adding car:", error);
  } finally {
    mongoose.disconnect();
  }
};

// Assuming you've defined the Cars model and mongoose elsewhere in your code.

//Find Customer
const findCar = async (brand) => {
  try {
    const search = new RegExp(brand, "i");
    const cars = await Cars.find({ brand: search });
    console.info(cars);
    console.info(`${cars.length} matches`);
  } catch (error) {
    console.error("Error finding car:", error);
  } finally {
    mongoose.disconnect();
  }
};

const updateCar = async (_id, brand) => {
  try {
    const updatedCar = await Cars.updateOne({ _id }, { brand });
    console.info("Car updated successfully", updatedCar);
  } catch (error) {
    console.error("Error updating car:", error);
  } finally {
    mongoose.disconnect();
  }
};

const removeCar = async (_id) => {
  try {
    const result = await Cars.deleteOne({ _id });
    console.info("Car removed successfully", result);
  } catch (error) {
    console.error("Error removing car:", error);
  } finally {
    mongoose.disconnect();
  }
};

const listCar = async () => {
  try {
    const cars = await Cars.find();
    console.info(cars);
    console.info(`${cars.length} cars in total`);
  } catch (error) {
    console.error("Error listing cars:", error);
  } finally {
    mongoose.disconnect();
  }
};

module.exports = {
  addCar,
  findCar,
  updateCar,
  removeCar,
  listCar,
};
