const express = require('express');
const router = express.Router();
const Tutorial = require('../models/Tutorial');
const Question = require('../models/Question');

// Tutorials
router.get('/tutorials', async (req, res) => {
  try {
    const tutorials = await Tutorial.find().sort({ createdAt: -1 });
    res.json(tutorials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/tutorials', async (req, res) => {
  try {
    const tutorial = new Tutorial(req.body);
    await tutorial.save();
    res.status(201).json(tutorial);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/tutorials/:id', async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) return res.status(404).json({ error: 'Not found' });
    res.json(tutorial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Questions
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/questions', async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ error: 'Not found' });
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/questions/:id/answers', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ error: 'Not found' });
    question.answers.push(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
