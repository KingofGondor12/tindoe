const { mongoose, db } = require('../database');

Todo = db.model('Todo', {task: String, complete: Boolean});

module.exports = Todo;
