// import express from 'express';
// import morgan from 'morgan';

// const app = express();
// const port = 3000; // o puedes usar process.env.PORT con dotenv

// // Logger para ver las peticiones en consola
// app.use(morgan('dev'));

// // Ruta raíz
// app.get('/', (req, res) => {
//   res.send('¡Hola desde Express y Patron!');
// });

// // Levantar servidor
// app.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });

//--------------------------------------------------------------------------------------------------------


// import express from 'express';
// import morgan from 'morgan';
// import jwt from 'jsonwebtoken';

// const app = express();
// const port = 3000;
// const secret = 'mi_secreto_super_seguro'; // Puedes moverlo a .env si quieres

// app.use(morgan('dev'));

// // Ruta raíz
// app.get('/', (req, res) => {
//   res.send('¡Hola desde Express!');
// });

// // 🔐 Ruta que genera el token
// app.get('/token', (req, res) => {
//   const token = jwt.sign({ user: 'Patron' }, secret, { expiresIn: '1h' });
//   res.json({ token });
// });

// // 🔍 Ruta que verifica y decodifica el token
// app.get('/verify', (req, res) => {
//   const token = req.query.token;

//   if (!token) {
//     return res.status(400).send('Token es requerido');
//   }

//   try {
//     const decoded = jwt.verify(token, secret);
//     res.json({ valido: true, decoded });
//   } catch (err) {
//     res.status(401).send('Token inválido');
//   }
// });

// app.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });


// -------------------------------------------------------------------------------------------------------------

import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { ejemploJWT } from './controllers/jwt.controller.js';
import { ejemploLogger, ejemploLoggerError, ejemploLoggerRequest } from './controllers/logger.controller.js';
import { ejemploDB } from './controllers/db.controller.js';
import { ejemploSequelize } from './controllers/sequelize.controller.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a los ejemplos MVC</h1>');
});

app.get('/jwt', ejemploJWT);
app.get('/logger', ejemploLogger);
app.get('/logger-error', ejemploLoggerError);
app.get('/logger-request', ejemploLoggerRequest);
app.get('/pg', ejemploDB);
app.get('/sequelize', ejemploSequelize);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});