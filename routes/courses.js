const router = require('express').Router();
const {
  createCourse,
  getCourses,
  editCourse,
  deleteCourse
} = require('../controllers/course');

router.get('/', getCourses)
router.post('/', createCourse)
router.put('/:id', editCourse)
router.delete('/:id', deleteCourse)

module.exports = router;