// functions/createPerson.js
const mongoose = require("mongoose");
const Person = require("../models/person");

exports.handler = async function (event, context) {
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
