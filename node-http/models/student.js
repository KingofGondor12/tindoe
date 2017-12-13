const { mongoose, db } = require('../database');

Student = db.model('Student', {name: String, age: Number, year: Number});

module.exports = Student;
