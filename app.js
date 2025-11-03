// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3306;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://mongo:27017/formularioDB')
  .then(() => console.log('✅ Se conecto a la base de datos'))
  .catch(err => console.error('❌ Error al conectar a la base de datos', err));

const Usuario = mongoose.model('Usuario', {
  nombre: String,
  correo: String
});

app.get('/formulario', (req, res) => {
  res.send(`
    <h1>Registrar usuarios</h1>

    <form method="POST" action="/guardar">

      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" placeholder="Ingresa el nombre" required>

      <br>

      <label for="email">Correo electrónico:</label>
      <input type="email" name="correo" placeholder="Ingresa el correo " required>

       <br>

      <button type="submit">Guardar</button>
    </form>
    <hr>
    <button><a href="/usuarios">Ver usuarios</a></button>
  `);
});

app.post('/guardar', async (req, res) => {
  const { nombre, correo } = req.body;
  const nuevoUsuario = new Usuario({ nombre, correo });
  await nuevoUsuario.save();
  res.redirect('/usuarios');
});

app.get('/usuarios', async (req, res) => {
  const usuarios = await Usuario.find();
  const lista = usuarios.map(u => `<li>${u.nombre} - ${u.correo}</li>`).join('');
  res.send(`
    <h1>Usuarios registrados</h1>
    <ul>${lista}</ul>
    <button><a href="/formulario">Volver</a></button>
  `);
});

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
