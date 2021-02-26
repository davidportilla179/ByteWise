class Student {
  constructor(id, email, password, username, firstName, lastName, country, age, enrolledCourses){
    this.id = id;
    this.email = email; // email del usuario
    this.password = password //contraseña del usuario
    this.username = username; //apodo del usuario
    this.firstName = firstName; // nombre del usuario
    this.lastName = lastName; // apellido del usuario
    this.country = country; //pais de residencia
    this.age = age; // edad del usuario
    this.enrolledCourses = enrolledCourses; // cursos inscritos del usuario
  }
  register(){
    // Crea una cuenta
  }
  login(){
    // Iniciar sesión
  }
  enrollCourse(){
    // Inscribirse a un curso
  }
  reviewCourse() {
    // Dejar un comentario sobre el curso
  }

  search() {
    // Buscar cursos disponibles/profesores en la plataforma
  }

  saveCourse() {
    // Guardar cursos para registrarse más tarde
  }
}

module.exports = Student;