const router = require('express').Router();
const {
  createCourse,
  getCourses,
  editCourse,
  deleteCourse
} = require('../controllers/course');

const { authTeacher } = require('./auth');

router.get('/', getCourses);
router.get('/:id', getCourses);
router.post('/', authTeacher.require, createCourse);
router.put('/:id', authTeacher.require, editCourse);
router.delete('/:id',authTeacher.require, deleteCourse);

module.exports = router;