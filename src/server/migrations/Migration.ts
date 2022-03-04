import { Sequelize } from "sequelize";

/**
 * Базовый класс для миграций
 */
export abstract class Migration {
  protected sequelize: Sequelize;

  public abstract up(): Promise<void>;
  public abstract down(): Promise<void>;

  constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;
  }
}
