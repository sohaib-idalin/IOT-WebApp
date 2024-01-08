'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Site extends Model { 
    static associate({Permission}) {
        this.belongsToMany(Permission)
      }
  }
  Site.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
      },
    address: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
      },

    
  }, {
    sequelize,
    modelName: 'Site',
  });
  return Site;
};