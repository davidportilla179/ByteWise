const mongoose = require("mongoose");
const Course = mongoose.model("Course");
const Teacher = mongoose.model("Teacher");

// function createCourse(req, res, next) {
//   console.log(req.teacher)
//   if(req.teacher){
//     const body = req.body;
//     const course = new Course(body);
//     course.teacher = req.teacher.id;
//     course.save().then(course => {
//       return res.status(201).send(course);
//     }).catch(next);
//     const teacher = new Teacher(body);
//   } else{
//     res.status(401).send(next);
//   }
// }

function createCourse(req, res, next) {
  console.log(req.teacher)
  Teacher.findById(req.teacher.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    //create new course
    const body = req.body;
    const course = new Course(body);
    course.teacher = req.teacher.id;
    //add course id in uploadedCourses teachers
    user.uploadedCourses.push(course.id);
    user.save().catch(next);

    course.save().then(course => {
      return res.status(201).send(course);
    }).catch(next);
  }).catch(next);
}

function getCourses(req, res, next) {
  if(req.params.id){
    Course.findById(req.params.id).then(courses => {
	    res.send(courses);
	  }).catch(next);
  } else {
    Course.find().then(courses=>{
      res.send(courses);
    }).catch(next);
  }
}

function editCourse(req, res, next) {
  Course.findById(req.params.id).then(course => {
    if (!course) { return res.sendStatus(401); }
    let newInfo = req.body;
    if (typeof newInfo.title !== 'undefined')
      course.title = newInfo.title;
    if (typeof newInfo.description !== 'undefined')
      course.description = newInfo.description;
    if (typeof newInfo.syllabus !== 'undefined')
      course.syllabus = newInfo.syllabus;
    if (typeof newInfo.rating !== 'undefined')
      course.rating = newInfo.rating;
    course.save().then(updatedCourse => {
      res.status(201).json(updatedCourse.publicData());
    }).catch(next);
  }).catch(next);
}

function deleteCourse(req, res, next) {
  Course.findOneAndDelete({ _id: req.params.id }).then(r => {
    res.status(200).send(`Curso ${req.params.id} eliminado: ${r}`);
  }).catch(next);
  Teacher.findById(req.teacher.id).then(user => {
    //delete objectid in uploadedCourses teachers
    user.uploadedCourses.pop();
    user.save().catch(next);

  }).catch(next);
}

module.exports = {
  createCourse,
  getCourses,
  editCourse,
  deleteCourse,
};
