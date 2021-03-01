const Course = require('../models/Course');

function createCourse(req, res) {
  var course = new Course(req.body)
  res.status(201).send(course)
}

function getCourses(req, res) {
  var course1 = new Course(1, 'Curso de HTML', 'HTML desde cero', ['Intro','Que es HTML'])
  var course2 = new Course(2, 'Curso de CSS', 'CSS desde cero', ['Intro','Que es CSS'])
  res.send([course1, course2])
}

function editCourse(req, res) {
  var course1 = new Course(req.params.id, 'Curso de HTML', 'HTML para principiantes', ['Intro','Que es HTML'])
  var modificaciones = req.body
  course1 = { ...course1, ...modificaciones }
  res.send(course1)
}

function deleteCourse(req, res) {
  res.status(200).send(`Curso ${req.params.id} eliminado`);
}

module.exports = {
  createCourse,
  getCourses,
  editCourse,
  deleteCourse
}