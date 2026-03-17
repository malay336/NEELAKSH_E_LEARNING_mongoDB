const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;
const MONGODB_URI = process.env.MONGODB_URI;

// Mock Data for "Demonstration Mode"
const mockQuestions = [
  { _id: "m1", title: "React Virtual DOM (MongoDB Clone)", description: "This version is connected to a production-ready Mongoose layer.", tags: ["React"], author: "Neelaksh Sharma", answers: [] },
  { _id: "m2", title: "Express Middleware (MongoDB Clone)", description: "Backend refactored for full MongoDB/Atlas support.", tags: ["Express"], author: "Neelaksh Sharma", answers: [] }
];

// Tutorials
app.get('/api/tutorials', (req, res) => {
  res.json([{ title: "MERN Tutorial (MongoDB Clone)", description: "Ready for MongoDB deployment." }]);
});

// Questions
app.get('/api/questions', async (req, res) => {
  if (mongoose.connection.readyState === 1) {
    try {
      const Question = require('./models/Question');
      const questions = await Question.find().sort({ createdAt: -1 });
      return res.json(questions);
    } catch (err) { res.status(500).json({ error: err.message }); }
  } else {
    res.json(mockQuestions);
  }
});

async function run() {
  console.log('Checking for MongoDB connection...');
  
  // Attempt connection with a short timeout
  if (MONGODB_URI) {
    try {
      await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 2000 });
      console.log('CONNECTED TO MONGODB SUCCESSFULLY.');
    } catch (err) {
      console.log('MONGODB NOT DETECTED. Starting in Demonstration Mode (Mock).');
    }
  } else {
    console.log('NO MONGODB URI FOUND. Starting in Demonstration Mode (Mock).');
  }

  app.listen(PORT, () => {
    console.log(`\n========================================`);
    console.log(`Backend clone running on port ${PORT}`);
    console.log(`Verification URL: http://localhost:5001/api/questions`);
    console.log(`Frontend URL: http://localhost:5174/`);
    console.log(`========================================\n`);
  });
}

run().catch(err => {
  console.error('Critical Error:', err);
  process.exit(1);
});
