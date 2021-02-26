const router = require('express').Router();
const {
  createStudent,
  getStudents,
  editStudent,
  deleteStudent
} = require('../controllers/student');

router.get('/', getStudents)
router.post('/', createStudent)
router.put('/:id', editStudent)
router.delete('/:id', deleteStudent)

module.exports = router;
