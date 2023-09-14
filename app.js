const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./models/person");

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB (replace 'mongodb://localhost/your-database-name' with your MongoDB connection string)
mongoose.connect(
  "mongodb+srv://maria:0907@cluster0.t1gpwj2.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//create simple id
async function getNextId() {
  const highestPerson = await Person.findOne({}, {}, { sort: { _id: -1 } });
  const nextId = highestPerson ? highestPerson._id + 1 : 1;
  return nextId;
}

app.delete("/api/persons/delete-all", async (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
