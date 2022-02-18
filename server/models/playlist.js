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
      this.belongsTo(models.Playlist_Tag, {
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
      });
    }
  }
  //User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id', onDelete: 'cascade', onUpdate: 'cascade' });
  Playlist.init(
    {
      coverUrl: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Playlist",
    }
  );
  return Playlist;
};
