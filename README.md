# ByteWise

El proyecto consta de una aplicación con objetivos educativos. Deberá permitirle a profesores la publicación y edición de cursos de su autoría, además de permitirle a estudiantes registrarse en la plataforma y poder ver e inscribirse en cualquiera de los cursos disponibles.

## ByteWise en **HEROKU**
Entra en el siguiente link para interactuar con la aplicación (API) de ByteWise

https://bytewise-backend-api.herokuapp.com/

## Usuarios de ByteWise 👱🏻‍♀️👱🏻‍♂️
En ByteWise existen dos tipos de usuarios:
1. Estudiantes
2. Profesores

**Los estudiantes pueden**: ver, guardar, inscribirse y calificar los cursos.

**Los profesores pueden**: subir, editar y eliminar sus cursos, crear y editar perfil.

### Historias de usuario 🙇🏻‍♀️🙇🏻‍♂️
1. Como estudiante de ByteWise, quiero ver todos los cursos disponibles en la página para poder inscribirme a la que más me interese.
2. Como estudiante de ByteWise, quiero ver las características de cada curso para saber sus temas y de que se trata.
3. Como profesor de ByteWise, quiero agregar nuevos cursos, para poder impartir mis conocimientos a más estudiantes.
4. Como profesor de ByteWise, quiero editar el contenido de mis cursos y eliminar los que ya no quiera.
5. Como estudiante de ByteWise, quiero comunicarme con el instructor de mi curso para resolver mis dudas.
6. Como estudiante de ByteWise, quiero guardar cursos de mi interés para revisarlos a profundidad más tarde.
7. Como profesor de ByteWise, quiero recibir reviews y comentarios de mis estudiantes para mejorar mi curso.
8. Como profesor de ByteWise, quiero tener un perfil que muestre mis credenciales/habilidades y cursos disponibles.

## Entidades de ByteWise 💻

El proyecto tiene 3 entidades y estas son sus características:
* Estudiante: Email, Contraseña, Apodo, Nombre, Apellido, País, Edad, Cursos inscritos.
* Profesor:  Email, Contraseña, Apodo, Nombre, Apellido, País, Edad, Cursos subidos.
* Cursos: Título, Descripción, Temario, Profesor y Rating.

### Funcionalidades de las entidades

**Las funciones de los estudiantes son**: Registrar una nueva cuenta, iniciar sesión, inscribirse a un curso, dejar un comentario sobre el curso, buscar cursos disponibles/profesores en la plataforma, guardar cursos para registrarse más tarde, enviar dudas y preguntas al profesor de mi curso.

**Las funciones de los profesores son**: Registrar una nueva cuenta, iniciar sesión, editar la información en el perfil, crear un curso, editar contenidos del curso, borrar curso.

**Las funciones de los cursos son**: Revisar que la cantidad de estudiantes registrados no sobrepase el límite (LIMITE: 20).

## Comenzando 🚀

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋
```
1. Tener instalado un navegador como Google Chrome o Firefox
2. Tener una aplicación para hacer solicitudes HTTP como Insomnia o Postman
```
### Swagger 👽
Consulta los Swagger del proyecto para observar los servicios de la aplicación.

* [Swagger de Teachers](https://app.swaggerhub.com/apis/davidportilla179/ByteWiseAPI-Teachers/0.1)
* [Swagger de Students](https://app.swaggerhub.com/apis/davidportilla179/ByteWiseAPI-Students/0.1)
* [Swagger de Courses](https://app.swaggerhub.com/apis/davidportilla179/ByteWiseAPI-Courses/0.1)

## Instalación 🔧

Sigue los siguiente pasos para obtener una copia del proyecto y ejecutarla en entorno de desarrollo

* Clona el repositorio desde la linea de comandos o descargando el ZIP
```
$ git clone https://github.com/davidportilla179/ByteWise.git
```
* Instala los paquetes que necesita el proyecto
```
$ npm install
```
* Crea una base de datos en MongoDB, crea las 3 colecciones:
```
courses, students, teachers
```
* Llenala con los datos almacenados en los archivos .json dentro de la carpeta ./mongodb
```
courses.json
students.json
teachers.json
```
* Genera el archivo ./env.sh para las variables de entorno dentro de la carpeta ./config
```bash
$ cd config
$ touch env.sh
```
* Llena los campos del archivo ./env.sh con el URI de tu base de datos en MongoDB y el puerto donde se ejecutara en local
```bash
export NODE_ENV=''
export PORT=
export SECRET=''      //secret por default
export MONGODB_URI=''
```
* Guarda los cambios y ejecuta:
```
$ npm run dev
```
* Si salió todo bien podrás ver en la terminal el console.log del app.listen() y lineas de mongoose
```bash
Escuchando en el puerto <puerto-que-definiste-en-env.sh>
Mongoose: students.createIndex({ email: 1 }, { unique: true, background: true })
Mongoose: teachers.createIndex({ email: 1 }, { unique: true, background: true })
Mongoose: students.createIndex({ username: 1 }, { unique: true, background: true })
Mongoose: teachers.createIndex({ username: 1 }, { unique: true, background: true })
```
### Poblar Base de datos 🧾
En este [LINK](https://drive.google.com/drive/folders/1ekPzUcSur_0lZLr4vkBpO1_XMXP6MgNj?usp=sharing) puedes obtener los datos de las colecciones del proyecto en formatos .csv o .json.
## Ejecutando servicios ⚙️

Para iniciar con las pruebas de todos los servicios será necesario crear un usuario de tipo **STUDENT** y de **TEACHER**.

### Crear un usuario de tipo STUDENT o TEACHER
1. Abre tu aplicación para hacer solicitudes HTTP (Insomnia o Postman) y crea una nueva request de tipo **POST**
2. En el body, llena y coloca un JSON con la siguiente información:
```jsx
{
	"email": "",
	"password": "",
	"username": "",
	"firstName": "",
	"lastName": "",
	"country": "",
	"age": ""
}
```
3. Coloca la siguiente URL en la petición (cambia el puerto y la entidad):
```
http://localhost:<puerto-que-definiste-en-env.sh>/v1/teachers
http://localhost:<puerto-que-definiste-en-env.sh>/v1/students
```

4. Te regresará un JSON con tu username, email y tu token de autenticación
```jsx
{
  "username": "",
  "email": "",
  "token": ""
}
```
Con el token podrás probar los demás servicios que puede hacer un usuario de tipo **STUDENT** y **TEACHER**.

Consulta el [Swagger](https://) del proyecto para observar los servicios CRUD para los estudiantes y maestros.

### CRUD de la entidad **COURSE**
No es necesario ingresar con una cuenta de **profesor** o **estudiante** para ver todos los cursos, haciendo la siguiente petición podrás ver el contenido:
```
http://localhost:<puerto-que-definiste-en-env.sh>/v1/courses
```
* Para obtener la información de un solo curso:
```
http://localhost:<puerto-que-definiste-en-env.sh>/v1/courses/<id-del-curso>

//EJEMPLO:
http://localhost:3000/v1/courses/604bee462c627e076cd5f04e
```
* Para filtrar los cursos por un titulo, descripción o profesor es necesario añadir una **query** en la url:
```
http://localhost:<puerto-que-definiste-en-env.sh>/v1/courses?<campo>=<info>

//EJEMPLO:
http://localhost:3000/v1/courses?description=curso-2
```
_La información que contenga espacios, replaza los espacios por guiones medios- EJEMPLO: title: curso de js, query: curso-de-js._

Los métodos **POST, PUT y DELETE** solo pueden ser ejecutados si estás autenticado con un usuario de tipo **TEACHER**.

Al momento de **CREAR o ELIMINAR** el ID del curso se almacenará o eliminará en el campo "uploadedCourses" de la entidad **TEACHER**.

Para que un estudiante se inscriba a un curso, es necesario que envié la siguiente petición **PUT**:
```
http://localhost:<puerto-que-definiste-en-env.sh>/v1/students/enrolled/<id-del-curso>

//EJEMPLO:
http://localhost:3000/v1/students/enrolled/6041bbe8876f6338e05c1048
```
Y se almacenará el ID del curso en el campo "enrolledCourses" de la entidad **STUDENT**
* _Recuerda estar autenticado como **STUDENT**_

## Despliegue 📦

El deploy de la aplicación está en Heroku, en caso de hacer deploy de tu copia deberás seguir estos pasos:

1. Crea y accede a Heroku con tu cuenta
2. Pulsa en el botón "Create new app"
3. Ponle un nombre a la app y selecciona tu región
4. Sube tu código a un repositorio de GitHub
5. En la sección "Deployment method", selecciona "Connect to Github" y conectala con tu cuenta.
6. Busca tu repositorio por su nombre y selecciona la rama donde tienes tu código final.
7. Pulsa el botón "Deploy Branch" para desplegar tu aplicación
8. Dirígete a "Setting" y en la sección "Config Vars" agrega las siguientes variables de entorno:
```bash
export NODE_ENV='production'
export PORT= '80'
export SECRET='supersecret'
export MONGODB_URI=''
```
En MONGODB_URI pon la URI que tienes en tu archivo ./env.sh
9. Abre la app con el botón "Open app" situado en la parte superior derecha de la pantalla.

Ya podrás hacer las mismas peticiones que hacias con tu aplicación de peticiones HTTP usando la url que te proporciona Heroku.

## Construido con 🛠️

* [Node.js](https://nodejs.org/es/) - Entorno de ejecución para Javascript
* [Express.js](https://expressjs.com/es/) - Infraestructura web
* [JWT](https://www.npmjs.com/package/jsonwebtoken) - Implementación de tokens
* [Passport.js](http://www.passportjs.org/) - Autenticación de usuarios
* [mongoose](https://mongoosejs.com/) - ODM
* [MongoDB](https://www.mongodb.com/es) - Base de datos NoSQL
* [Visual Studio Code 2019](https://visualstudio.microsoft.com/es/) - Editor de Texto

## Autores ✒️

* **David Cruz Portilla** - [davidportilla179](https://github.com/davidportilla179)
* **Miguel Angel Reyes Cruz** - [frusgasmic](https://github.com/frusgasmic)
* **Ana Maria Ruiz Fernandez** - [amrf7](https://github.com/amrf7)
## Versionado 📌

* [Git Bash](https://gitforwindows.org/) - Controlador de versiones
* [Repositorio](https://github.com/davidportilla179/ByteWise) - Repositorio del Proyecto
## Expresiones de Gratitud 🎁

* Agradecemos al equipo de BEDU en general por su gran trabajo y apoyo en este proyecto. 📢🤓.
---
⌨️ con ❤️ por el EQUIPO 21