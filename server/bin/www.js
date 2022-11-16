#!/usr/bin/env node

/**
 * Module dependencies.
 */
// ES6 👇
import http from 'http';
import debug from '../services/debugLogger';
import app from '../app';
import configKeys from '../config/configKeys';
/**
 * Todos los var han sido remplazados por const y los parentesis
 * han desaparecido para dar paso a las comillas simples
 */
const port = normalizePort(configKeys.port);
const server = http.createServer(app);
/**
 * Obtenemos el puerto del entorno y almacénamos en Express.
 * las funciones en ES6 se tiene que hacer con flechas, nota importante
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Cuando exportamos algo en un módulo podemos definir que sea la exportación
 *  por defecto. No es necesario que se exporte nada por defecto en un 
 * módulo, pero en caso de hacerlo, debes tener en cuenta que sólo se 
 * puede exportar una cosa "default" por módulo.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind =
    typeof port === 'string'
      ? // ? 'Pipe ' + port
      `Pipe ${port}`
      : `Port ${port}`;

  // manejamos los errores de escucha específicos con mensajes amigables
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Escucha de eventos para el eventos del servidor HTTP.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  // Desestrecuturando port de addr
  const { port } = addr;
  debug(`🐱‍🐉🐱‍🐉🐱‍🐉 Listening on http://localhost:${port}`);
}

app.set('port', port);

/**
 *Escuche en el puerto provisto, en todas las interfaces de red.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
