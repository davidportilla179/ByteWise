const mongoose = require("mongoose")
const Course = mongoose.model("Course")
const passport = require('passport');

function createCourse(req, res, next) {
    var new_course = new Course(req.body);
    new_course.save().then(user => {
        res.status(201).send(new_course)
    }).catch(next)
}

function getCourses(req, res, next) {
    Course.findById(req.course.id, (err, user) => {
        if (!user || err) {
            return res.sendStatus(401)
        }
        return res.json(user.publicData());
    }).catch(next);
}

function editCourse(req, res, next) {
    Course.findById(req.course.id).then(user => {
        if (!user) { return res.sendStatus(401); }
        let newInfo = req.body
        if (typeof newInfo.title !== 'undefined')
            user.title = newInfo.title
        if (typeof newInfo.description !== 'undefined')
            user.description = newInfo.description
        if (typeof newInfo.temary !== 'undefined')
            user.temary = newInfo.temary
        if (typeof newInfo.teacher !== 'undefined')
            user.teacher = newInfo.teacher
        user.save().then(updatedUser => {
            res.status(201).json(updatedUser.publicData())
        }).catch(next)
    }).catch(next)
}

function deleteCourse(req, res) {
    Course.findOneAndDelete({ _id: req.course.id }).then(r => {
        res.status(200).send(`Curso ${req.params.id} eliminado: ${r}`);
    })
}

module.exports = {
    createCourse,
    getCourses,
    editCourse,
    deleteCourse
}
