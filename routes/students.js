const router = require('express').Router();
const {
  createStudent,
  getStudents,
  editStudent,
  deleteStudent,
  logIn,
  enrolledCourse
} = require('../controllers/student');
const { auth } = require('./auth');

router.get('/', auth.require, getStudents);
router.get('/:id', auth.require, getStudents);
router.post('/', createStudent);
router.post('/login', logIn);
router.put('/:id', auth.require, editStudent);
router.delete('/:id', auth.require, deleteStudent);
router.put('/enrolled/:id', auth.require, enrolledCourse);

module.exports = router;
