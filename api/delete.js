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
    if (req.params.userId) {
      // Delete a specific person
      const { userId } = req.params;
      const person = await Person.findByIdAndDelete(userId);
      if (!person) {
        return res.status(404).json({ error: "Person not found" });
      }
      res.json({ message: "Person deleted successfully" });
    } else {
      // Delete all persons
      const result = await Person.deleteMany({});
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "No persons found" });
      }
      res.json({
        message: `${result.deletedCount} persons deleted successfully`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};
