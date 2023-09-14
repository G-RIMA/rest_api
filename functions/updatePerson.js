// functions/updatePerson.js
const mongoose = require("mongoose");
const Person = require("../models/person");

exports.handler = async function (event, context) {
  try {
    const { userId } = event.queryStringParameters;
    const { name, age } = JSON.parse(event.body);

    // Check if the person exists
    const person = await Person.findById(userId);
    if (!person) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Person not found" }),
      };
    }

    // Update the person's information
    person.name = name;
    person.age = age;
    await person.save();

    return {
      statusCode: 200,
      body: JSON.stringify(person),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
