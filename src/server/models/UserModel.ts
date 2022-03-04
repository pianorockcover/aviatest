import { DataTypes, Model, ModelAttributes } from "sequelize";
import { IUser } from "../../common/interfaces/IUser";

/**
 * Модель "Пользователь"
 */
export class UserModel extends Model implements IUser {
  /**
   * ID пользователя
   */
  id: number;
  /**
   * Признак того, что пользователь поделился в соц. сетях
   */
  shared: boolean;
  /**
   * Email
   */
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
  },
};

export const userModelName = "User";
