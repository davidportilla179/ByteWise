const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  Student.findOne({ email: email }).then(function (student) {
    if (!student || !student.validatePassword(password)) {
      return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
    }
    return done(null, user);
  }).catch(done);
}));