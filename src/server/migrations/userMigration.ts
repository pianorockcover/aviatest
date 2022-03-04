import { UserModel, userAttributes, userModelName } from "../models/UserModel";
import { Migration } from "./Migration";

/**
 * Миграция для создания таблицы "Пользователь"
 */
export class UserMigration extends Migration {
  public async up(): Promise<void> {
    UserModel.init(userAttributes, {
      sequelize: this.sequelize,
      modelName: userModelName,
    });

    await UserModel.sync();
  }

  public async down(): Promise<void> {
    await UserModel.drop();
  }
}
