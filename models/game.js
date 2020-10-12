'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'usernameId',
      })
    }
  };
  Game.init({
    usernameId: DataTypes.STRING,
    rooms: DataTypes.INTEGER,
    rounds: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    is_finished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};