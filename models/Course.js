class Course {
  constructor(id, title, description, temary, teacher){
    this.id = id;
    this.title = title; // titulo del curso
    this.description = description //descripcion del curso
    this.temary = temary; //temario del curso
    this.teacher = teacher; // profesor del curso
  }
}

module.exports = Course;
