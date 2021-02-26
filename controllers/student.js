const Student = require('../models/Student')

function createStudent(req, res) {
  var student = new Student(req.body)
  res.status(201).send(student)
}

function getStudents(req, res) {
  var student1 = new Student(1, 'studentdemo1@example.com', '123123', 'Pablo')
  var student2 = new Student(2, 'studentdemo2@example.com', '123123', 'Lucia')
  res.send([student1, student2])
}

function editStudent(req, res) {
  var student1 = new Student(req.params.id, 'studentdemo1@example.com', '147147', 'Pedro')
  var modificaciones = req.body
  student1 = { ...student1, ...modificaciones }
  res.send(student1)
}

function deleteStudent(req, res) {
  res.status(200).send(`Estudiante ${req.params.id} eliminado`);
}

module.exports = {
  createStudent,
  getStudents,
  editStudent,
  deleteStudent
}