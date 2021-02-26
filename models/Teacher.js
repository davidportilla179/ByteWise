class Teacher {
  constructor(id, email, password, username, firstName, lastName, country, age, uploadedCourses){
    this.id = id; // email del usuario
    this.email = email; // email del usuario
    this.password = password //contraseña del usuario
    this.username = username; //apodo del usuario
    this.firstName = firstName; // nombre del usuario
    this.lastName = lastName; // apellido del usuario
    this.country = country; //pais de residencia
    this.age = age; // edad del usuario
    this.uploadedCourses = uploadedCourses; // cursos subidos del usuario
  }
  register(){
    // Crea una cuenta
  }

  editProfile() {
    // Editar la información en el perfil
  }

  login(){
    // Iniciar sesión
  }
  uploadCourse(){
    // Crear un curso
  }
  editCourse(){
    // Editar contenidos del curso
  }
  deleteCourse(){
    // Borrar curso
  }
}

module.exports = Teacher;