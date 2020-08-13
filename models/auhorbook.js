'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuhorBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AuhorBook.init({
    bookId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    sellCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AuhorBook',
  });
  return AuhorBook;
};