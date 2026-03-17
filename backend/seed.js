const mongoose = require('mongoose');
const Tutorial = require('./models/Tutorial');
const Question = require('./models/Question');
require('dotenv').config();

const questions = [
  {
    title: "What is the Virtual DOM in React?",
    description: "Explain the concept of Virtual DOM and how it improves performance.",
    tags: ["React", "Frontend", "Performance"],
    author: "Neelaksh Sharma",
    answers: [{ text: "The Virtual DOM is a lightweight copy of the real DOM. React uses it to calculate the minimum number of changes needed before updating the real browser DOM." }]
  },
  {
    title: "Explain Middleware in Express.js",
    description: "What are middleware functions and how are they used in an Express application?",
    tags: ["Express", "Backend", "Node.js"],
    author: "Neelaksh Sharma",
    answers: [{ text: "Middleware functions have access to the request and response objects. They can execute code, modify request/response, and end the cycle or call 'next()'." }]
  },
  {
    title: "What is the MERN Stack?",
    description: "List the components of the MERN stack and their roles.",
    tags: ["MERN", "Fullstack", "Web Dev"],
    author: "Neelaksh Sharma",
    answers: [{ text: "MERN stands for MongoDB (Database), Express (Backend Framework), React (Frontend Library), and Node.js (Runtime Environment)." }]
  },
  {
    title: "Node.js Event Loop explained",
    description: "How does the event loop allow Node.js to perform non-blocking I/O operations?",
    tags: ["Node.js", "Backend", "Event Loop"],
    author: "Neelaksh Sharma",
    answers: [{ text: "The Event Loop allows Node.js to offload operations to the system kernel whenever possible. It handles callbacks while the main thread remains free for other tasks." }]
  }
];

const tutorials = [
  {
    title: "Getting Started with React",
    description: "Learn the basics of React components and state.",
    content: "React is a JavaScript library for building user interfaces. It uses components to build complex UIs from small, isolated pieces of code...",
    category: "React",
    author: "Neelaksh Sharma"
  },
  {
    title: "Express API Development",
    description: "Build a RESTful API using Express and Node.js.",
    content: "Express is a minimal and flexible Node.js web application framework. Learn how to handle routes, parameters, and responses...",
    category: "Express",
    author: "Neelaksh Sharma"
  }
];

async function seed() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/elearning';
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    await Question.deleteMany({});
    await Tutorial.deleteMany({});

    await Question.insertMany(questions);
    await Tutorial.insertMany(tutorials);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();
