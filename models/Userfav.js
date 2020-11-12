const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserFav extends Model {}

UserFav.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    favorite_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "favorite",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "userfav",
  }
);

module.exports = UserFav;
