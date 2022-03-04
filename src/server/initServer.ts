import env from "../../env.json";
import { Sequelize } from "sequelize";
import { migrations } from "./migrations";

/**
 * Создает коннект к базе данных, поднимает миграции
 */
export const initServer = async () => {
  const sequelize = new Sequelize(env.dbConnectionURI);
  await sequelize.authenticate();

  for (const MigrationClass of migrations) {
    const migration = new MigrationClass(sequelize);
    await migration.up();
  }
};
