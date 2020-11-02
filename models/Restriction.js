const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Restriction extends Model {}

Restriction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    restriction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "event",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "restriction",
  }
);

module.exports = Restriction;