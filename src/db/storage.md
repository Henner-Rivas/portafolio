---
title: Entiende el  local Storage y sessión storage
date: april 11, 2022
category: Desarrollo frontend
---

## ¿Que es y Como funciona local Storage y sessión storage?

 <br>

Inicialmente, los navegadores web solo mostraban la información proporcionada por el servidor y en realidad no hacían mucho más que representar la página.La web ha evolucionado mucho a lo largo de los años y ha dado paso al navegador que conocemos hoy.

 <br>

Los navegadores actuales están en un punto, en el cual se pueden tener aplicaciones completamente independientes sin necesidad de una API, solo con cargar nuestro frontend y tener todos los datos de manera estática. Incluso podemos tener sitios web que sin estar conectados a internet funcionen,y los encargados de manerar esa información son el LocalStorage y SessionStorage.

<br>

A lo largo del artículo iremos viendo estos dos metodos de almacenar información en una aplicación web y por qué, utilizar en cada momento.
<br>

<br>

## ¿Que es el SessionStorage?

<br>

SessionStorage es probablemente (según mi experiencia) el método menos utilizado para almacenar información en una aplicación web. Básicamente, este enfoque le permite almacenar información clave-valor de forma dinámica, pero solo en la pestaña en la que se encuentra el usuario, lo que significa que si cierra esta pestaña, los datos se perderán.
<br>
<br>

### Guardar y obtener datos en sessionStorage

 <br>

 <Code language="javascript">

//Guardando valor en sessionStorage
sessionStorage.setItem("nombre", "Henner Rivas Berrio");

//Obteniendo datos de sessionStorage

let nombreCompleto = window.sessionStorage.getItem("nombre");

console.log(`Hola, mi nombre es ${nombreCompleto}`);
//Imprime: Hola, mi nombre es Henner Rivas Berrio

</Code>
 <br>
 <br>

## ¿Que es el localStorage?

 <br>

El localStorage es muy similar al sessionStorage, con la única diferencia que este puede ser compartido entre varias ventanas del navegador y perdura en el tiempo.
<br>
<br>

### Guardar y obtener datos en localStorage

 <br>

<Code language="javascript">

//Guardando valor en localStorage
localStorage.setItem("nombre", "Henner Rivas Berrio");

//Obteniendo datos de localStorage

let nombreCompleto = window.localStorage.getItem("nombre");

console.log(`Hola, mi nombre es ${nombreCompleto}`);
//Imprime: Hola, mi nombre es Henner Rivas Berrio

</Code> 
 <br>

## Eliminnar un datos del Storage

---

<br>

### localStorage

 <br>

<Code language="javascript">
localStorage.removeItem("nombre");
</Code>

 <br>

### SessionStorage

 <br>

<Code language="javascript">
sessionStorage.removeItem("nombre");
</Code>

<br>

## Limpiar todo el storage

---

<br>

### localStorage

<br>

<Code language="javascript">
localStorage.clear();
</Code>

<br>

### SessionStorage

 <br>

<Code language="javascript">
sessionStorage.clear();
</Code>
<br>
<br>
<br>
