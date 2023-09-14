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

  try {
    const { userId } = req.params;
    const { name, age } = req.body;
    const person = await Person.findByIdAndUpdate(
      userId,
      { name, age },
      { new: true }
    );
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json(person);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};
