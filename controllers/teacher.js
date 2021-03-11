const mongoose = require("mongoose")
const Teacher = mongoose.model("Teacher")
const passport = require('passport');

function createTeacher(req, res, next) {
  const body = req.body,
    password = body.password

  delete body.password
  const teacher = new Teacher(body)
  teacher.createPassword(password)
  teacher.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next)
}

// function getTeachers(req, res, next) {
//   Teacher.find().then(users=>{
//     res.send(users)
//   }).catch(next)
// }

function getTeachers(req, res, next) {
  Teacher.findById(req.teacher.id, (err, user) => {
    if (!user || err) {
      return res.sendStatus(401)
    }
    return res.json(user.publicData());
  }).catch(next);
}

function editTeacher(req, res, next) {
  console.log(req.teacher)
  Teacher.findById(req.teacher.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    let newInfo = req.body
    if (typeof newInfo.username !== 'undefined')
      user.username = newInfo.username
    if (typeof newInfo.firstName !== 'undefined')
      user.firstName = newInfo.firstName
    if (typeof newInfo.lastName !== 'undefined')
      user.lastName = newInfo.lastName
    if (typeof newInfo.country !== 'undefined')
      user.country = newInfo.country
    if (typeof newInfo.age !== 'undefined')
      user.age = newInfo.age
    user.save().then(updatedUser => {
      res.status(201).json(updatedUser.publicData())
    }).catch(next)
  }).catch(next)
}

function deleteTeacher(req, res) {
  Teacher.findOneAndDelete({ _id: req.teacher.id }).then(r => {
    res.status(200).send(`Profesor ${req.params.id} eliminado: ${r}`);
  })
}

function logIn(req, res, next) {
  if (!req.body.email) {
    return res.status(422).json({ errors: { email: "no puede estar vacío" } });
  }

  if (!req.body.password) {
    return res.status(422).json({ errors: { password: "no puede estar vacío" } });
  }

  passport.authenticate('local', { session: false }, function (err, user, info) {
    if (err) { return next(err); }

    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}


module.exports = {
  createTeacher,
  getTeachers,
  editTeacher,
  deleteTeacher,
  logIn
}