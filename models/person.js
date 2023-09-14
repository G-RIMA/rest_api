const mongoose = require("mongoose");

// Define the schema for the "Person" model
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

// Create the "Person" model from the schema
const Person = mongoose.model("Person", personSchema);

module.exports = Person;
