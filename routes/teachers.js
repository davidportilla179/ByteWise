const router = require('express').Router();
const {
  createTeacher,
  getTeachers,
  editTeacher,
  deleteTeacher
} = require('../controllers/teacher');

router.get('/', getTeachers)
router.post('/', createTeacher)
router.put('/:id', editTeacher)
router.delete('/:id', deleteTeacher)

module.exports = router;