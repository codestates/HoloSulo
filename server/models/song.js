"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Song.belongsTo(models.Playlist, {
        foreignKey: "playlistId",
        targetKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Song.init(
    {
      songUrl: DataTypes.STRING,
      songTitle: DataTypes.STRING,
      playlistId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Song",
    }
  );
  return Song;
};

/**
 * , {
        foreignKey: "playlistId",
        targetKey: "id",
        onDelete: "cascade",
        onDelete: "cascade",
      }
 */
