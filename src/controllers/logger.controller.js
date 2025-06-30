import pino from 'pino';
import pretty from 'pino-pretty';

const stream = pretty({ colorize: true });
const logger = pino({}, stream);

const renderCard = (title, content) => `
  <html>
    <head>
      <style>
        body {
          font-family: Arial;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f4f4f4;
        }
        .card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          max-width: 400px;
          text-align: center;
        }
        .card h2 {
          margin-bottom: 1rem;
        }
        .card p {
          word-wrap: break-word;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h2>${title}</h2>
        <p>${content}</p>
      </div>
    </body>
  </html>
`;

export const ejemploLogger = (req, res) => {
  logger.info('Ejemplo de log con Pino (info)');
  res.send(renderCard('Log Info', 'Log info generado con Pino'));
};

export const ejemploLoggerError = (req, res) => {
  logger.error('Ejemplo de error con Pino');
  res.send(renderCard('Log Error', 'Log error generado con Pino'));
};

export const ejemploLoggerRequest = (req, res) => {
  const info = `Método: ${req.method} | URL: ${req.url} | Hora: ${new Date().toISOString()}`;
  logger.info({
    method: req.method,
    url: req.url,
    time: new Date().toISOString(),
  }, 'Información de la solicitud');
  res.send(renderCard('Log de Solicitud', info));
};