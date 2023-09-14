// functions/createPerson.js
const mongoose = require("mongoose");
const express = require("express");
const serverless = require("serverless-http");
const Person = require("../models/person");

const app = express();

exports.handler = async function (event, context) {
  //create simple id
  async function getNextId() {
    try {
      const highestPerson = await Person.findOne({}, {}, { sort: { _id: -1 } });
      const nextId = highestPerson ? highestPerson._id + 1 : 1;
      return nextId;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  try {
    const { name, age } = JSON.parse(event.body);
    const nextId = await getNextId(); // Implement this function
    const person = new Person({ _id: nextId, name, age });
    await person.save();
    return {
      statusCode: 201,
      body: JSON.stringify(person),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

app.use("/api", router);

module.exports.handler = serverless(app);
