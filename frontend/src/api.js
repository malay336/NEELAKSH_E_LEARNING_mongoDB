const API_URL = 'http://localhost:5001/api';

export const fetchTutorials = async () => {
  const res = await fetch(`${API_URL}/tutorials`);
  if (!res.ok) throw new Error('Failed to fetch tutorials');
  return res.json();
};

export const fetchQuestions = async () => {
  const res = await fetch(`${API_URL}/questions`);
  if (!res.ok) throw new Error('Failed to fetch questions');
  return res.json();
};

export const createQuestion = async (questionData) => {
  const res = await fetch(`${API_URL}/questions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(questionData),
  });
  return res.json();
};

export const postAnswer = async (questionId, answerData) => {
  const res = await fetch(`${API_URL}/questions/${questionId}/answers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(answerData),
  });
  return res.json();
};
