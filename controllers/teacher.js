const Teacher = require('../models/Teacher')

function createTeacher(req, res) {
  var teacher = new Teacher(req.body)
  res.status(201).send(teacher)
}

function getTeachers(req, res) {
  var teacher1 = new Teacher(1, 'teacherdemo1@example.com', '123123', 'Maria')
  var teacher2 = new Teacher(2, 'teacherdemo2@example.com', '123123', 'Ricardo')
  res.send([teacher1, teacher2])
}

function editTeacher(req, res) {
  var teacher1 = new Teacher(req.params.id, 'teacherdemo1@example.com', '147147', 'Itzel')
  var modificaciones = req.body
  teacher1 = { ...teacher1, ...modificaciones }
  res.send(teacher1)
}

function deleteTeacher(req, res) {
  res.status(200).send(`Profesor ${req.params.id} eliminado`);
}

module.exports = {
  createTeacher,
  getTeachers,
  editTeacher,
  deleteTeacher
}