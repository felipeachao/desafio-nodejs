import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database";

class SchedulingModel extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
}

SchedulingModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Scheduling",
    tableName: "Scheduling",
    createdAt: false,
    updatedAt: false,
  }
);

export { SchedulingModel };
