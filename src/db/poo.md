---
title: ¿Quieres aprender POO en javaScript?
date: octubre 11, 2022
category: Desarrollo backend
---

## ¿Qué es la Programación Orientada a Objetos en JS?

<br>

La Programación Orientada a Objetos (POO) no es mas que un modelo o un estilo de programación que nos da unas guías sobre cómo trabajar con él. Se basa en el concepto de clases y objetos. Este tipo de programación se utiliza para estructurar un programa de software en piezas simples y reutilizables de planos de código (clases) para crear instancias individuales de objetos.

<br>

### Como funciona la POO en javaScript

<br>

Primero recordemos que en javaScript casi todo son objetos, normalmente en todos los lenguajes de programación que aplica POO son basado en clases, pero javaScript es orientado a objecto pero basado en prototipos (un prototipo es una estructura de código a partir de la cual se crean objetos,podemos pensarlo como un “molde” de objetos.) es un un poco raro pero, no nos preocupemos porque ya crearon en ECMAScript 2015 la sintaxis con class que funciona casi igual que en los otros lenguajes.

<br>

<!-- #### Sintaxis de class
 -->

### Ventajas

<br>

- Reusabilidad. Cuando hemos diseñado adecuadamente las clases, se pueden usar en distintas partes del programa y en numerosos proyectos.

* Mantenibilidad. Debido a la sencillez para abstraer el problema, los programas orientados a objetos son más sencillos de leer y comprender, pues nos permiten ocultar detalles de implementación dejando visibles sólo aquellos detalles más relevantes.

* Modificabilidad. La facilidad de añadir, suprimir o modificar nuevos objetos nos permite hacer modificaciones de una forma muy sencilla.

<br>

<br>

### Desventaja

El cambio en la forma de pensar de la programación tradicional a la orientada a objetos al principio en poco confuso.

<br>

## Pilares de la POO

<br>

### La abstracción

<br>
  Las abstracciones son un proceso u operación mental que tiene como objetivo aislar las propiedades y funciones esenciales en una clase que sirve de molde para crear otros objetos(instancias) que comparten las mismas propiedades y funciones y se pueden personalizar.
<br>

<br>

### Encapsulamiento

<br>

_¿Qué es encapsulamiento?_ <br>

<br>

- Es guardar, proteger, guardar o limitar el acceso de cierto atributos y/o propiedades en nuestros prototipos y objetos.

  <br>

- Cuando hablamos de encapsulamiento nos referimos de no permitir la alteración de métodos y atributos.

<br>

**Formas de aplicar encapsulamiento en JavaScript**

_Getters y setters_

_Namespaces_

_Object.defineProperties_

_Módulo de ES6_

<br>

### La herencia

<br>

Es un mecanismo que permite derivar una clase a otra clase. <br>
En otras palabras, tendremos unas clases que serán hijos, y otras clases que serán padres. Las clases hijas pueden utilizar tanto sus métodos y propiedades como de la clase padre, siempre que su modificador de acceso lo permita (mas delante hablaremos de esto).

<br>

### El polimorfismo

 <br>
 
Es como ‘La Herencia 2.0’. Es un pilar de la POO. Lo que es importante es lo que se puede hacer con este: Permite a nuestras subclases cambiar o anular los comportamientos de los métodos y atributos del prototipo madre, de la clase madre. Aunque herede las propiedades, el polimorfismo permite cambiar su comportamiento.

<br>

**Por ejemplo**

<br>

Podemos crear dos clases distintas: Gato y Perro, que heredan de la superclase Animal. La clase Animal tiene el método abstracto hacerSonido() que se implementa de forma distinta en cada una de las subclases (ya que los gatos y perros suenan de forma distinta)

<br>

## Ahora creemos una de una calculadora usando POO

<br>

<Code language="javascript">
// creamos la clase con class
class Calculadora {
  // definimos un constructor para recibir parámetros
  constructor(numero1, numero2) {
    this.set_numero1(numero1);
    this.set_numero2(numero2);
  }
  // creamos métodos de sumar
  sumar() {
  return this.numero2 + this.numero1;
  }

// creamos métodos de multiplicar
multiplicar() {
return this.numero2 \* this.numero1;
}
// creamos métodos de restar

restar() {
return this.numero2 - this.numero1;
}

}

const calculadora = new Calculadora(4, 6);

console.log(calculadora.sumar()); // 10

const calculadora2 = new Calculadora(4, 6);

console.log(calculadora.multiplicar()); // 24

</Code>

<br>

## Ahora un ejemplo donde vamos aplicar los pilares de la POO

---

<br>

- Hagamos un ejemplo como si estuviéramos creando un escuela online en este caso sera como un pequeño Platzi

  <br>

<Code language="javascript">

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

</Code>
<br>
<br>

#### Aplicando la abstracción

<br>

- abstraemos learningPath para no tener que crear las escuelas a cada rato

<br>

<Code language="javascript">

class LearningPath {
constructor({ name, courses = [] }) {
this.name = name;
this.courses = courses;
}
}

// creamos escuelaweb
const escuelaWeb = new LearningPath({
name: "Escuela de Desarrollo Web",
courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaVgs = new LearningPath({
name: "Escuela de Vidweojuegos",
courses: [cursoProgBasica, "Curso de Unity", "Curso de Unreal"],
});

// ahora abstraemos Course para no tener que crear los mismo cursos en cada escuela
class Course {
constructor({ name, classes = [] }) {
this.name = name;
this.classes = classes;
}
}

const cursoProgBasica = new Course({
name: "Curso Gratis de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
name: "Curso Practico de HTML y CSS",
});

</Code>

<br>

#### Aplicando la encapsulamiento

<br>

##### ¿Que son los getter y setter?

<br>

Una función que obtiene un valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.
<br>
En ES2020 se introdujo la sintaxis campos privados en las clases. Se hace uso de un numeral como prefijo del nombre de la variable.
<br>

_¿Cúal sería la ventaja de usar esto?_
<br>
Que no existe la posibilidad de que alguien modifique la variable privada desde la instancia a menos de que use el setter que le dimos

<br>
<br>
<Code language="javascript">

class Course {
#name;

constructor({
name,
classes = []
}) {
this.#name = name;
this.classes = classes;
}

get name() {
return this.#name;
}

set name(nuevoNombrecito) {
if (nuevoNombrecito === 'Curso Malito de Programación Básica') {
console.error('Web... no');
} else {
this.#name = nuevoNombrecito;
}
}
}
</Code>

<br>

### Aplicando herencia

<br>

Recordemos que las herencia nos permite crear clases madres que nos van servir como mode para crear clases hijas,que compartirán sus métodos y atributos.
<br>
En este ejemplo crearemos una clase student que va ha servir como clase hija para los tipo de estudiantes que hay en Platzi.

<br>

Para aplicar herencia usamos la palabra reservada _extends_ para aplicar herencia

<Code language="javascript">

class Course {
constructor({
name,
classes = [],
isFree = false,
lang = "spanish",
}) {
this.\_name = name;
this.classes = classes;
this.isFree = isFree;
this.lang = lang;
}

get name() {
return this.\_name;
}

set name(nuevoNombrecito) {
if (nuevoNombrecito === "Curso Malito de Programación Básica") {
console.error("Web... no");
} else {
this.\_name = nuevoNombrecito;
}
}
}

const cursoProgBasica = new Course({
name: "Curso Gratis de Programación Básica",
isFree: true,
});
const cursoDefinitivoHTML = new Course({
name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
name: "Curso Practico de HTML y CSS",
lang: "english",
});

class LearningPath {
constructor({
name,
courses = [],
}) {
this.name = name;
this.courses = courses;
}
}

const escuelaWeb = new LearningPath({
name: "Escuela de Desarrollo Web",
courses: [
cursoProgBasica,
cursoDefinitivoHTML,
cursoPracticoHTML,
],
});

const escuelaData = new LearningPath({
name: "Escuela de Data Science",
courses: [
cursoProgBasica,
"Curso DataBusiness",
"Curso Dataviz",
],
});

const escuelaVgs = new LearningPath({
name: "Escuela de Vidweojuegos",
courses: [
cursoProgBasica,
"Curso de Unity",
"Curso de Unreal",
],
})

class Student {
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

class FreeStudent extends Student {
constructor(props) {
super(props);
}

approveCourse(newCourse) {
if (newCourse.isFree) {
this.approvedCourses.push(newCourse);
} else {
console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
}
}
}

class BasicStudent extends Student {
constructor(props) {
super(props);
}

approveCourse(newCourse) {
if (newCourse.lang !== "english") {
this.approvedCourses.push(newCourse);
} else {
console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
}
}
}

class ExpertStudent extends Student {
constructor(props) {
super(props);
}

approveCourse(newCourse) {
this.approvedCourses.push(newCourse);
}
}

const juan = new FreeStudent({
name: "JuanDC",
username: "juandc",
email: "juanito@juanito.com",
twitter: "fjuandc",
learningPaths: [
escuelaWeb,
escuelaVgs,
],
});

const miguelito = new BasicStudent({
name: "Miguelito",
username: "migelitofeliz",
email: "miguelito@juanito.com",
instagram: "migelito_feliz",
learningPaths: [
escuelaWeb,
escuelaData,
],
});
</Code>

<br>

### Aplicando poliforfismo

<br>

- En este ejemplo crearemos un metodo publicar comentario que se comportara demanera diferente dependiendo que tipo de estudiante va ha publicar dicho comentario

<br>
<Code language="javascript">

class Comment {
constructor({ content, studentName, studentRole = "estudiante" }) {
this.content = content;
this.studentName = studentName;
this.studentRole = studentRole;
this.likes = 0;
}

publicar() {
console.log(this.studentName + " (" + this.studentRole + ")");
console.log(this.likes + " likes");
console.log(this.content);
}
}
class Course {
constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
this.\_name = name;
this.classes = classes;
this.isFree = isFree;
this.lang = lang;
}

get name() {
return this.\_name;
}

set name(nuevoNombrecito) {
if (nuevoNombrecito === "Curso Malito de Programación Básica") {
console.error("Web... no");
} else {
this.\_name = nuevoNombrecito;
}
}
}

const cursoProgBasica = new Course({
name: "Curso Gratis de Programación Básica",
isFree: true,
});
const cursoDefinitivoHTML = new Course({
name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
name: "Curso Practico de HTML y CSS",
lang: "english",
});

class LearningPath {
constructor({ name, courses = [] }) {
this.name = name;
this.courses = courses;
}
}

const escuelaWeb = new LearningPath({
name: "Escuela de Desarrollo Web",
courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearningPath({
name: "Escuela de Data Science",
courses: [cursoProgBasica, "Curso DataBusiness", "Curso Dataviz"],
});

const escuelaVgs = new LearningPath({
name: "Escuela de Vidweojuegos",
courses: [cursoProgBasica, "Curso de Unity", "Curso de Unreal"],
});

class Student {
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

publicarComentario(commentContent) {
const comment = new Comment({
content: commentContent,
studentName: this.name,
});
comment.publicar();
}
}

class FreeStudent extends Student {
constructor(props) {
super(props);
}

approveCourse(newCourse) {
if (newCourse.isFree) {
this.approvedCourses.push(newCourse);
} else {
console.warn(
"Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos"
);
}
}
}

class BasicStudent extends Student {
constructor(props) {
super(props);
}

approveCourse(newCourse) {
if (newCourse.lang !== "english") {
this.approvedCourses.push(newCourse);
} else {
console.warn(
"Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés"
);
}
}
}

class ExpertStudent extends Student {
constructor(props) {
super(props);
}

approveCourse(newCourse) {
this.approvedCourses.push(newCourse);
}
}

class TeacherStudent extends Student {
constructor(props) {
super(props);
}

approveCourse(newCourse) {
this.approvedCourses.push(newCourse);
}

publicarComentario(commentContent) {
const comment = new Comment({
content: commentContent,
studentName: this.name,
studentRole: "profesor",
});
comment.publicar();
}
}

const juan = new FreeStudent({
name: "JuanDC",
username: "juandc",
email: "juanito@juanito.com",
twitter: "fjuandc",
learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito = new BasicStudent({
name: "Miguelito",
username: "migelitofeliz",
email: "miguelito@juanito.com",
instagram: "migelito_feliz",
learningPaths: [escuelaWeb, escuelaData],
});

const freddy = new TeacherStudent({
name: "Freddy Vega",
username: "freddier",
email: "f@gep.com",
instagram: "freddiervega",
});

</Code>
