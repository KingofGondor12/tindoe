const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const api = require('./routes/api');
let Student = require('./models/student')

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* API Routes */
app.use('/api', api);

/* Pretty user views */
app.get('/students', (req, res) => {
  Student.find().then((students) => {
    res.render('students', {students: students});
  })
});

app.post('/students', (req, res) => {
  let student_name = req.body.student_name;
  Student.create({name: student_name}).then(() => {
    res.redirect('/students');
  })
});

app.listen(port);
