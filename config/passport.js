const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Student = mongoose.model('Student');
const Teacher = mongoose.model('Teacher');

passport.use('local-student', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  Student.findOne({ email: email })
    .then(function (student) {
      if (!student || !student.validatePassword(password)) {
        return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
      }
      return done(null, student);
    })
    .catch(done);
}));

passport.use('local-teacher', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  Teacher.findOne({ email: email }).then(function (teacher) {
    if (!teacher || !teacher.validatePassword(password)) {
      return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
    }
    return done(null, teacher);
  }).catch(done);
}));