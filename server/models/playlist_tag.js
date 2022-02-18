"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Playlist_Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.Tag);
      // this.hasMany(models.Playlist);
    }
  }
  Playlist_Tag.init(
    {
      playlistID: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Playlist_Tag",
    }
  );
  return Playlist_Tag;
};
/**
 * , {
        foreignKey: "playlistId",
        sourceKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      }
 */

/**, {
        foreignKey: "tagId",
        sourceKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      } */
