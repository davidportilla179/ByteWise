const mongoose = require("mongoose");
const Student = mongoose.model("Student");
const passport = require('passport');

function createStudent(req, res, next) {
  const body = req.body,
    password = body.password;

  delete body.password;
  const student = new Student(body);
  student.createPassword(password);
  student.save().then(user => {
    return res.status(201).json(user.toAuthJSON());
  }).catch(next);
}

function getStudents(req, res, next) {
  Student.findById(req.student.id, (err, user) => {
    if (!user || err) {
      return res.sendStatus(401);
    }
    return res.json(user.publicData());
  }).catch(next);
}

function editStudent(req, res, next) {
  Student.findById(req.student.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    let newInfo = req.body;
    if (typeof newInfo.username !== 'undefined')
      user.username = newInfo.username;
    if (typeof newInfo.firstName !== 'undefined')
      user.firstName = newInfo.firstName;
    if (typeof newInfo.lastName !== 'undefined')
      user.lastName = newInfo.lastName;
    if (typeof newInfo.country !== 'undefined')
      user.country = newInfo.country;
    if (typeof newInfo.age !== 'undefined')
      user.age = newInfo.age;
    user.save().then(updatedUser => {
      res.status(201).json(updatedUser.publicData());
    }).catch(next);
  }).catch(next);
}

function deleteStudent(req, res) {
  Student.findOneAndDelete({ _id: req.student.id }).then(r => {
    res.status(200).send(`Estudiante ${req.params.id} eliminado: ${r}`);
  }).catch(next);
}

function logIn(req, res, next) {
  if (!req.body.email) {
    return res.status(422).json({ errors: { email: "no puede estar vacío" } });
  }

  if (!req.body.password) {
    return res.status(422).json({ errors: { password: "no puede estar vacío" } });
  }

  passport.authenticate('local-student', { session: false }, function (err, user, info) {
    if (err) { return next(err); }

    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

function enrolledCourse(req, res, next) {
  Student.findById(req.student.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    let newCourse = req.params.id;
    user.enrolledCourses.push(newCourse);
    user.save().then(updatedUser => {
      res.status(201).json(updatedUser.publicData());
    }).catch(next);
  }).catch(next);
}

module.exports = {
  createStudent,
  getStudents,
  editStudent,
  deleteStudent,
  logIn,
  enrolledCourse
};
