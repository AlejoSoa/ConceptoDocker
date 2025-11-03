# 🐋 Conceptos de Docker 

### Este repositorio contiene un informe tecnico y un ejemplo practico sobre Docker

---

## 📘 Resumen de los conceptos aprendidos en cada video

### 📽️ Video #1 - Aprende Docker ahora! 

    https://www.youtube.com/watch?v=4Dko5W96WHg

- Comenzamos con una introduccion sobre la virtualizacion ligera con contenedores.

- Nos empezo a explicar sobre las diferencias entre imagenes, contenedores y repositorios.

- Empezo a explicarnos algunos comandos como:

---
| Comando | Descripcion |
|----------|--------------|
| `docker run` | Crea y ejecuta un nuevo contenedor |
| `docker ps` | Muestra contenedores activos |
| `docker stop .` | Detiene un contenedor en ejecución |
| `docker images"` | Lista las imágenes almacenadas localmente |
| `docker rm` | Elimina un contenedor detenido |

- Tambien sobre como crear un contenedor a partir de una imagen y exponer puertos.

- Sobre los conceptos de 
---
| Concepto | Descripcion |
|----------|--------------|
|`Dockerfile`| Es un archivo de texto que contiene instrucciones para crear una imagen de Docker, la cual empaqueta una aplicación y sus dependencias.  |
|`docker-compose`| Es una herramienta que define y ejecuta aplicaciones multi-contenedor a través de un archivo docker-compose.yml, el cual usa imágenes Docker, para definir los servicios, redes y volúmenes que componen la aplicación.  |

### 📽️ Video #2 - Docker de Novato a Pro

    https://www.youtube.com/watch?v=CV_Uf3Dq-EU

- Empezamos a conocer sobre como crear imagenes personalizadas con `Dockerfile`.

- Tambien sobre el uso de redes, volumenes y variables de entorno.

- Sobre como `docker-compose.yml` sirve para levantar múltiples servicios. Por ejemplo, una app y base de datos.

- Como se utiliza en una gestion de entornos de desarrollo, pruebas y producción con contenedores.

- Algunos ejemplo para una mejor optimizacion y buenas prácticas (capas, .dockerignore, etc.).

---

## 📘 Reflexiones personales sobre los puntos clave

### ✅ Ventajas

- Permite una mejor portabilidad en todo el entorno con una misma imagen y un mismo comportamiento.

- Logra facilitar la integracion y despliegue continuo (CI/CD) .

- Es muy bueno para aprender y probar tecnologias sin instalar nada en el host.

- Permite aislar las dependencias, es decir cada contenedor tiene su propio entorno.

### ❗Desafios

- Es importante entender conceptos nuevos (redes, volumenes, imagenes).

- Si las imagenes son grandes, pueden tardar en construirse.

- El mantenimiento de los datos y la seguridad deben configurarse correctamente.

### ✏️ Uso practico

Docker es ideal para proyectos web que necesitan una base de datos como MySQL y una aplicacion backend (Node.js, Python, etc.), ya que asi permite que ambos corran en contenedores separados pero conectados, simulando un entorno real en el servidor.

---

## 📘 Recursos Adicionales

- Documentacion Oficial https://docs.docker.com/
- Docker con MySQL https://hub.docker.com/_/mysql
- Docker con NodeJS https://hub.docker.com/_/node

---
## 📘 Ejercicio Practico

Formulario que al registra nombre y correo logre redireccionarlo a una lista 

### 🖊️ Pasos para Ejecutarlo 

- Tener Instalado Docker
  https://docs.docker.com/

- Instalar node.js
  https://nodejs.org/es/download

- En el proyecto instalar en la terminal express
  npm install express

- ✅ Ejecutarlo
  docker compose up

- 🔎 Buscar en el navegador
   http://localhost:3306/formulario
  
- ❌ Apagarlo
  docker compose down


