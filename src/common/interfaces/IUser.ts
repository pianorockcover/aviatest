/**
 * Интерфейс "Пользователь"
 */
export interface IUser {
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
