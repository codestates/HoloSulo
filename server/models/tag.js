"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tag.belongsToMany(models.Playlist, {
        through: "Playlist_Tag",
        targetKey: "id",
        foreignKey: "tagId",
        onUpdate: "cascade",
        onDelete: "cascade",
      });
    }
  }
  Tag.init(
    {
      tag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};

/**
 * , {
        foreignKey: "tagId",
        targetKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      }
 */
