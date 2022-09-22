class Student {
  // definimos nustrastras variables en el contructor
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

// creamos instacia de la clase Student
const henner = new Student({
  name: "Hennerdev",
  username: "Hennerdev",
  email: "Hennerdev@Hennerdev.com",
  twitter: "Hennerdev",
  learningPaths: [
    {
      name: "Desarrollo web",
      courses: ["Curso basico javaScript, Curso de CSS"],
    },
    {
      name: "Desarrollo vps",
      courses: ["Curso de Unity"],
    },
  ],
});
console.log(henner);

// Guardando valor en sessionStorage
sessionStorage.setItem("nombre", "Henner Rivas Berrio");

// Obteniendo datos de sessionStorage

let nombreCompleto = window.sessionStorage.getItem("nombre");

console.log(`Hola, mi nombre es ${nombreCompleto}`);
// Imprime: Hola, mi nombre es Henner Rivas Berrio
