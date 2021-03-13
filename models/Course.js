const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, "no puede estar vacío"],
        match: [/\S+@\S+\.\S+/, "es inválido"],
        index: true,
    },
    description: {
        type: String,
        required: [true, "no puede estar vacío"],
        match: [/^[a-zA-Z0-9]+$/, "es inválido"],
        index: true,
    },
    temary: {
        type: String,
        required: [true, "no puede estar vacío"],
        match: [/^[a-zA-Z0-9]+$/, "es inválido"],
        index: true,
    },
    teacher: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }]
}, { timestamps: true });

CourseSchema.plugin(uniqueValidator, { message: "Ya existe" });

//Datos públicos
CourseSchema.methods.publicData = function() {
    return {
        id: this.id,
        title: this.title,
        description: this.description,
        temary: this.temary,
        teacher: this.teacher,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
};

mongoose.model("Course", CourseSchema);