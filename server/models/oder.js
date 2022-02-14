'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Oder.init({
    theme: DataTypes.STRING,
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Oder',
  });
  return Oder;
};