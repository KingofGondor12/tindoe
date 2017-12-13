const express = require('express');
let router = express.Router();
let todo = [];

router.get('/todo', (req, res) => {
  res.send(todo);
});

router.post('/todo', (req, res) => {
  let todo_task = req.body.todo_task
  let todo_complete = req.body.todo_complete
  Todo.push(todo_task, todo_complete);
  res.send(todo);
});

module.exports = router;
