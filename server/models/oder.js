"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  //    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade'});
  Order.init(
    {
      theme: DataTypes.STRING,
      time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Oder",
    }
  );
  return Order;
};
