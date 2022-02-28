"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.Order);
      User.hasMany(models.Order, {
        foreignKey: "userId",
        as: "userId_order",
        sourceKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      User.hasMany(models.Playlist, {
        foreignKey: "userId",
        as: "userId_playlist",
        sourceKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }

  User.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      visitCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

/**
 * , {
        foreignKey: "userId",
        sourceKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      }
 */
