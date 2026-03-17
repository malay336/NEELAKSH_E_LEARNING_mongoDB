const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, 'db.json');

const initDB = () => {
  if (!fs.existsSync(dbPath)) {
    const initialData = {
      tutorials: [
        {
          _id: '1',
          title: 'Introduction to React',
          description: 'Learn the basics of React components and state.',
          content: 'React is a library for building user interfaces. It uses components...',
          category: 'Frontend',
          author: 'Admin',
          createdAt: new Date().toISOString()
        }
      ],
      questions: [
        {
          _id: '101',
          title: 'Explain the Virtual DOM in React.',
          description: 'How does React Virtual DOM improve performance compared to manipulating the real DOM directly?',
          tags: ['React', 'Theory', 'Frontend'],
          author: 'Admin',
          answers: [],
          createdAt: new Date().toISOString()
        },
        {
          _id: '102',
          title: 'What is the purpose of the Event Loop in Node.js?',
          description: 'Can someone provide a clear explanation of how the Event Loop handles asynchronous operations in a single-threaded environment?',
          tags: ['Node.js', 'Architecture', 'Backend'],
          author: 'Admin',
          answers: [],
          createdAt: new Date().toISOString()
        },
        {
          _id: '103',
          title: 'Describe Middleware in Express.js',
          description: 'What exactly is middleware, and what are some common use cases for it in an Express application?',
          tags: ['Express', 'Backend', 'API'],
          author: 'Admin',
          answers: [],
          createdAt: new Date().toISOString()
        },
        {
          _id: '104',
          title: 'What are the main differences between SQL and MongoDB (NoSQL)?',
          description: 'When should someone choose MongoDB over a traditional relational database like PostgreSQL?',
          tags: ['MongoDB', 'Database', 'Architecture'],
          author: 'Admin',
          answers: [],
          createdAt: new Date().toISOString()
        }
      ]
    };
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
  }
};

initDB();

const readDB = () => JSON.parse(fs.readFileSync(dbPath));
const writeDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

const Question = {
  find: () => {
    const db = readDB();
    const chain = {
      sort: () => [...db.questions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      then: function(resolve) {
        resolve([...db.questions]);
      }
    };
    return chain;
  },
  findById: async (id) => {
    const db = readDB();
    const q = db.questions.find(q => q._id === id);
    if (!q) return null;
    return {
      ...q,
      save: async function() {
        const db = readDB();
        const index = db.questions.findIndex(item => item._id === id);
        db.questions[index] = { ...this };
        delete db.questions[index].save;
        writeDB(db);
        return db.questions[index];
      }
    };
  },
  create: async (data) => {
    const db = readDB();
    const newItem = {
      ...data,
      _id: Date.now().toString(),
      answers: [],
      createdAt: new Date().toISOString()
    };
    db.questions.push(newItem);
    writeDB(db);
    return newItem;
  }
};

const Tutorial = {
  find: () => {
    const db = readDB();
    const chain = {
      sort: () => [...db.tutorials].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      then: function(resolve) {
        resolve([...db.tutorials]);
      }
    };
    return chain;
  },
  findById: async (id) => {
    const db = readDB();
    return db.tutorials.find(t => t._id === id);
  }
};

module.exports = { Question, Tutorial };
