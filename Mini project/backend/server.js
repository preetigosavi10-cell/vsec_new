const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());

const client = new MongoClient("mongodb://127.0.0.1:27017");

async function startServer() {
  await client.connect();
  console.log("MongoDB connected");

  const db = client.db("todoDB");
  const tasks = db.collection("tasks");

  app.get("/tasks", async (req, res) => {
    try {
      const data = await tasks.find().toArray();
      res.json(data);
    } catch (error) {
      res.status(500).send("Error getting tasks");
    }
  });

  app.post("/tasks", async (req, res) => {
    try {
      await tasks.insertOne({
        title: req.body.title,
        completed: false
      });
      res.send("Task added successfully");
    } catch (error) {
      res.status(500).send("Error adding task");
    }
  });

  app.delete("/tasks/:id", async (req, res) => {
    try {
      const { ObjectId } = require("mongodb");
      await tasks.deleteOne({
        _id: new ObjectId(req.params.id)
      });
      res.send("Task deleted successfully");
    } catch (error) {
      res.status(500).send("Error deleting task");
    }
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

startServer().catch(console.error);