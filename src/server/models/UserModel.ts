import { DataTypes, Model, ModelAttributes } from "sequelize";
import { IUser } from "../../common/interfaces/IUser";
import { emailRegexp } from "../../common/utils/validateEmail";

/**
 * Модель "Пользователь"
 */
export class UserModel extends Model implements IUser {
  id: number;
  shared: boolean;
  email: string;
}

/**
 * Описание полей модели "Пользователь"
 */
export const userAttributes: ModelAttributes<UserModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  shared: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: emailRegexp,
    },
  },
};

export const userModelName = "User";
