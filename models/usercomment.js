const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserComment extends Model {}

UserComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "blogData",
                key: "id",
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            unique: false,
            references: {
                model: "user",
                key: "id",
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "usercomment",
      }
);

module.exports = UserComment;