const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./models/person");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB (replace 'mongodb://localhost/your-database-name' with your MongoDB connection string)
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create simple id
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

// CREATE: Adding a new person
app.post("/api", async (req, res) => {
  try {
    const { name, age } = req.body;
    const nextId = await getNextId();
    const person = new Person({ _id: nextId, name, age });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

// READ: Fetching details of a person
app.get("/api/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const person = await Person.findById(userId);
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE: Modifying details of an existing person
app.put("/api/:userId", async (req, res) => {
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
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/api/delete-all", async (req, res) => {
  try {
    // Use Mongoose's deleteMany to delete all documents in the collection
    const result = await Person.deleteMany({});
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "No persons found" });
    }
    res.json({
      message: `${result.deletedCount} persons deleted successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

// DELETE: Removing a person
app.delete("/api/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const person = await Person.findByIdAndDelete(userId);
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json({ message: "Person deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  return "welcome to my rest api";
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
