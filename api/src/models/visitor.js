'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Visitor extends Model {
    static associate({Vehicle}) {
        this.hasOne(Vehicle)
      }
   }
  Visitor.init({
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
    QrCode: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    }

    
  }, {
    sequelize,
    modelName: 'Visitor',
  });
  return Visitor;
};