import pkg from 'pg';
const { Client } = pkg;

export const ejemploDB = async (req, res) => {
  const client = new Client({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'test',
    password: process.env.DB_PASSWORD || 'admin123',
    port: process.env.DB_PORT || 5432,
  });

  await client.connect();
  const result = await client.query('SELECT NOW()');
  await client.end();

  res.json({ hora: result.rows[0] });
};