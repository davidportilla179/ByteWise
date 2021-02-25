class Student {
    constructor(email, password, username, firstName, lastName, country, age, enrolledCourses){
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
  
  class Teacher {
    constructor(email, password, username, firstName, lastName, country, age, enrolledCourses){
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

  class Course {
    constructor(title, description, temary, teacher){
      this.title = title; // titulo del curso
      this.description = description //descripcion del curso
      this.temary = temary; //temario del curso
      this.teacher = teacher; // profesor del curso
    }
  }