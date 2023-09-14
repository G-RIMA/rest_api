// functions/readPerson.js
const mongoose = require("mongoose");
const Person = require("../models/person");

exports.handler = async function (event, context) {
  try {
    const { userId } = event.queryStringParameters;
    const person = await Person.findById(userId);
    if (!person) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Person not found" }),
      };
    }
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
