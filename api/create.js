const mongoose = require("mongoose");
const Person = require("../models/person");

module.exports = async (req, res) => {
  // Connect to MongoDB
  mongoose.connect(
    "mongodb+srv://maria:0907@cluster0.t1gpwj2.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  // Create a function to get the next available _id
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
    const { name, age } = req.body;
    const highestPerson = await Person.findOne({}, {}, { sort: { _id: -1 } });
    const nextId = await getNextId();
    const person = new Person({ _id: nextId, name, age });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};
