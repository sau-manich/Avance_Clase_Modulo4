import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'test',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || '12345',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }
);

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const ejemploSequelize = async (req, res) => {
  await sequelize.sync();
  const nuevo = await Usuario.create({ nombre: 'Patron' });
  res.json(nuevo);
};
