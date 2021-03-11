const router = require('express').Router();
const {
  createTeacher,
  getTeachers,
  editTeacher,
  deleteTeacher,
  logIn
} = require('../controllers/teacher');

const { authTeacher } = require('./auth');

router.get('/', authTeacher.require, getTeachers);
router.get('/:id', authTeacher.require, getTeachers);
router.post('/', createTeacher);
router.post('/login', logIn);
router.put('/:id', authTeacher.require, editTeacher)
router.delete('/:id', authTeacher.require, deleteTeacher)

module.exports = router;