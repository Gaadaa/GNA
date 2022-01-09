const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('election', 'postgres', 'Azerty', {
    host: 'localhost',
    dialect:  'postgres',
    define: {
        //prevent sequelize from pluralizing table names and adding timestamps(createdAt,updatedAt)
        freezeTableName: true,
        timestamps: false
    } 
  });
  module.exports = sequelize