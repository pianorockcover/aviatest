import { Sequelize } from "sequelize";
import { DB_CONNECTION_URI } from "../common/constants";
import { migrations } from "./migrations";

/**
 * Создает коннект к базе данных, поднимает миграции
 */
export const initServer = async () => {
  const sequelize = new Sequelize(DB_CONNECTION_URI);
  await sequelize.authenticate();

  for (const MigrationClass of migrations) {
    const migration = new MigrationClass(sequelize);
    await migration.up();
  }
};
