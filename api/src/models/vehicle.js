'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate({Employee,Visitor}) {
        this.belongsTo(Employee)
        this.belongsTo(Visitor) 
      }

   }
   Vehicle.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    licensePlateNumber: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },

    
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};