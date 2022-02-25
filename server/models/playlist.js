"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Playlist_Tag);
      Playlist.hasMany(models.Song, {
        foreignKey: "playlistId",
        sourceKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Playlist.belongsToMany(models.Tag, {
        through: "Playlist_Tag",
        targetKey: "id",
        foreignKey: "playlistId",
        onUpdate: "cascade",
        onDelete: "cascade",
      });
    }
  }

  Playlist.init(
    {
      coverUrl: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Playlist",
    }
  );
  return Playlist;
};

/*
, {
        foreignKey: "playlistId",
        targetKey: "id",
        onDelete: "cascade",
        onDelete: "cascade",
      });
      this.hasMany(models.Song, {
        foreignKey: "playlistId",
        sourceKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      }
      */
