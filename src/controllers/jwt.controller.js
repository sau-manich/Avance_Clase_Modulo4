import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secreto123';

export const ejemploJWT = (req, res) => {
  const payload = {
    user: 'admin@gmail.com',
    name: 'admin',
    role: 'Administrador'
  };
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  const html = `
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
          max-width: 600px;
          word-break: break-word;
        }
        .card h2 {
          margin-bottom: 1rem;
        }
        .card p {
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h2>Token JWT</h2>
        <p>${token}</p>
      </div>
    </body>
  </html>
  `;
  res.send(html);
};
