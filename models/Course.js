const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

//const secret = require('../config').secret;

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  syllabus: [String],
  rating: Number,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'}
}, { timestamps: true });

CourseSchema.plugin(uniqueValidator, { message: "Falta información" });

//Datos públicos
CourseSchema.methods.publicData = function(){
  return {
    id: this.id,
    title: this.title,
    description: this.description,
    syllabus: this.syllabus,
    rating: this.rating,
    teacher: this.teacher,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model("Course", CourseSchema);
