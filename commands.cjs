#!/usr/bin/env node

const program = require("commander");
const { prompt } = require("inquirer");
const {
  addCar,
  findCar,
  updateCar,
  removeCar,
  listCar,
} = require("./functions.cjs");

//customer questions
const questions = [
  {
    type: "input",
    name: "model",
    message: "Car model",
  },
  {
    type: "input",
    name: "type",
    message: "Car type",
  },
  {
    type: "input",
    name: "color",
    message: "Car Color",
  },
  {
    type: "input",
    name: "brand",
    message: "Car Brand",
  },
  {
    type: "input",
    name: "price",
    message: "Car Price",
  },
  {
    type: "input",
    name: "image",
    message: "Car image link",
  },
];

program.version(`1.0.0`).description("Cars Management System");

program
  .command("add")
  .alias("a")
  .description("add a car")
  .action(() => {
    prompt(questions).then((answers) => addCar(answers));
  });

program
  .command("find <brand>")
  .alias("f")
  .description("find a car")
  .action((brand) => findCar(brand));

program
  .command("update <_id>")
  .alias("u")
  .description("update a car")
  .action((_id) => {
    prompt(questions).then((answers) => updateCar(_id, answers));
  });

program
  .command("remove <_id>")
  .alias("r")
  .description("remove a car")
  .action((_id) => removeCar(_id));

program
  .command("list")
  .alias("l")
  .description("list all car")
  .action(() => listCar());

program.parse(process.argv);
