const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const api = require('./routes/api');
let Todo = require('./models/todo')

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* API Routes */
app.use('/api', api);

/* Pretty user views */
app.get('/todo', (req, res) => {
  Todo.find().then((todos) => {
    res.render('todo', {todos: todos});
  })
});

app.post('/todo', (req, res) => {
  let todo = req.body.todo_task;
  let todo_complete = req.body.todo_complete;
  Todo.create({task: todo, complete: todo_complete}).then(() => {
    res.redirect('/todo');
  })
});

app.listen(port);
