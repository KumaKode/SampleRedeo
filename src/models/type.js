"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, { through: "UserTypes" });
    }
  }
  Type.init(
    {
      name: {
        type: DataTypes.ENUM({
          values: ["admin", "jobSeeker", "employer"],
        }),
        allowNull: false,
        defaultValue: "jobSeeker",
      },
    },
    {
      sequelize,
      modelName: "Type",
    }
  );
  return Type;
};
