---
title: Aprende como consumir una API!
date: Agosto 11, 2022
category: Desarrollo frontend
---

## Consumo API REST con javaScript

<br>

En la actualidad el desarrollo basado en servicios como API REST se han convertido prácticamente en estándar necesario para dar un paso más en la integración de sistemas y con este, en el desarrollo de la humanidad.

<br>

### ¿Que es una API ?

 <br>
API:Application Program Interface -> Interfaz <br>
una interfaz es el medio por el cual la computadora se conecta con los humanos. Es lo visible para el usuario que interactúe con una app
<br>
<br>

### API REST

<br>
REST: Representational State Transfer <br>
Es el medio por el cual se comunican computadoras con otras computadoras. O también podemos pensarlo como robots con robots 🤖. Puede ser backend con frontend, backend con backend, etc.
<br>
_Nota_ A diferencia de una página web, que se muestra con imágenes, textos formateados, etc.; la llamada de una API REST se devuelve en un archivo JSON.
<br>

![Comunicación frontend y backend](https://i.ibb.co/ncYZTyj/qvaysugwhd9mge3pxr7j.webp)

#### Ejemplo de consumo de API con fetct, async y await

<Code language="javascript">
// api de thecatapi
const URL = "https:/\/api.thecatapi.com/v1/images/search";
const IMG = document.querySelector("img");
async function getAnimal() {
const response = await fetch(URL);
const data = await response.json();
IMG.src = data[0].url;
}
getAnimal()

</Code>

<br>

#### Endpoints y query parameters

<br>

Un _endpoint_ es una ubicación digital por la cual una API recibe peticiones para acceder a un recurso en servidor.Típicamente es una URL que provee la ubicación de un recurso especifica.
<br>
<br>

-- hennerdev.com/api/courses<br>
-- hennerdev.com/api/avatares<br>
-- hennerdev.com/api/students
<br><br>
Los **query parameters** son una extensión de las URLs que se utilizan en las peticiones a una API. son pares _key-value_ que contienen información útil para poder especificar el contenido al que queremos acceder o las acciones que queremos realizar nos sirven básicamente para hacer filtros.
<br>
-- hennerdev.com/api/students/category?search=best
-- hennerdev.com/api/students/limit=2&offset=0
<br>

### Que son los status code

<br>
El status code (código de estado) o códigos de error, como su propio nombre describe son una serie de códigos de tres cifras estandarizados y que están relacionados con una serie de determinados errores que pueden suceder al introducir en nuestro navegador una dirección web
<br>
Los códigos de estado HTTP se dividen en 5 «tipos». Se trata de agrupaciones de respuestas que tienen significados similares o relacionados. Saber qué son puede ayudarte a determinar rápidamente la sustancia general de un código de estado antes de que vayas a buscar su significado específico.
<br>
1XX Respuestas Afirmativas

2XX Respuestas satisfactorias

3XX Re-direcciones

4XX Error del cliente

5XX Error de servidor

<br>
 
 [Api puedes aprender los _status code_ de forma divertida](https://httpstatusdogs.com/)

<br>
<br>

#### ¿Que son las API keys?

<br>

Las **API keys** son un método de autentificación util para identificar quien esta haciendo la solicitud a los endpoints de una API.

Es importante hacer la distinción entre autenticación y autorización

<br>

#### Autentificación vs Autorización

<br>

_*Autentificación*_ quién sos <br>
_*autorización*_ qué puedes hacer

<br>

Existen muchas maneras autentificación una muy usada y preferida por su simplicidad son las _API keys_,sobre todo en las APIs de solo lectura.

<br>

#### ¿Como se crean estas llaves?

<br>
<br>

No existe ningún restricción para implementar esto. Cada sistema genera sus llaves a su manera, la mas utilizada es un hash i número al azar.

<br>
<br>

#### Otras formas de autorización

<br><br>

- Authorization: Basic
- Authorization: Bearer Token
- OAuth 2.0 (La mas complicada)
- Access key + Secret key

  <br>

#### ¿Qué es HTTP?

<br>
<br>

**HTTP(Hypertext Transfer Protocol)** es una protocolo o un conjunto de reglas definido para acceder a un recurso en la web.La manera en que las partes de una arquitectura cliente-servidor se comunican por medio de este protocolo.
<br>

Uno de los elementos de las peticiones es el método HTTP
<br>

_POST_ -> Create
_GET_ -> Read
_PUT/PATCH_ -> Update
_DELETE_ -> Delete
<br>

 <br>
 Estos verbos indican al servidor que acción buscamos hacer el endpoint al que estamos haciendo una solicitud

 <br>
 
#### ¿Qué son los Headers HTTP?
<br>

 <br>
Los headers HTTP son parámetros que se envían en una transacción HTTP, que contienen información del estado de la transacción en curso.

 <br>
Cuando un cliente solicita información a un servidor, este puede pasarle información adicional en el header de la solicitud. información del tipo de datos que se esperan recibir, del tipo de datos que envían, información de autenticación etc.

 <br>
 <br>

#### Ejemplos de Headers

 <br>
**Request Headers**

 <br>
Pasan información de la solicitud. Contienen información sobre el recurso solicitado e información del cliente que la solicita.

Estos pueden ser:
<br>

**Accept**: Informan al servidor el tipo de datos que el cliente puede entender

<Code language="javascript">

Accept: text/html
Accept: application/xhtml+xml
Accept: image/png

</Code>
<br>

**Authorization**: sirve para pasar credenciales que le servirán al servidor determinar si el cliente tiene acceso a ciertos recursos

<Code language="javascript">

Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
Authorization: Bearer eyYWxhZGRpbjpvcGVuc2VzYW1l

</Code>

<br>

**Cache-Control**: contiene información sobre el control de la cache por parte del cliente y del servidor.

<Code language="javascript">

Cache-Control: stale-while-revalidate=60
Cache-Control: no-cache
</Code>

<br>
<br>

#### Response Headers

<br>
Así como los request headers contienen información del cliente, los response headers contienen información del servidor al que se le hace la petición.

<br>
<br>

**Age**: Contienen información del tiempo que un objeto estuvo en caché. Se representa en segundos. Si es 0(cero) significa que la solicitud se obtuvo del servidor de origen. (Age: 24)
<br>

**Server**: Describen el software usado por el servidor que manejó la solicitud. Es decir el que generó la respuesta.(Server: Apache/2.4.1 (Unix)
)
<br>
<br>

#### Representation Headers

<br>

Contienen información acerca del body de la solicitud, enviado en una respuesta o (en un POST)

<br>

**Content-type** Indica el tipo de contenido (formato de archivo) es enviado en una solicitud. ejemplo (Content-Type: text/html; charset=UTF-8)

**Content-Enconding** Contienen la información necesaria para decodificar un archivo a su formato original.

Content-Encoding: compress
Content-Encoding: gzip
<br><br><br>
