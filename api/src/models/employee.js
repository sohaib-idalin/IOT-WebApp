'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model { 
    static associate({Vehicle}) {
        this.hasMany(Vehicle)
      }
  }
  Employee.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    badgeCode: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    facepicture: {
        type: DataTypes.BLOB,
        unique: true
    },

    
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};