// functions/deletePerson.js
const mongoose = require("mongoose");
const Person = require("../models/person");

exports.handler = async function (event, context) {
  try {
    const { userId } = event.queryStringParameters;

    // Check if the person exists
    const person = await Person.findById(userId);
    if (!person) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Person not found" }),
      };
    }

    // Delete the person
    await Person.findByIdAndDelete(userId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Person deleted successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
