/**
 * Ответ, возвращаемый сервером
 */
export interface IServerResponse<T> {
  /**
   * Признак ошибки
   */
  error: boolean;
  /**
   * Сообщение
   */
  message?: string;
  /**
   * Измененная модель
   */
  body?: T;
}
