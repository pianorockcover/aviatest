import { Body, Controller, Get, Param, Post } from "routing-controllers";
import { IServerResponse } from "../../common/interfaces/IServerResponse";
import { IUser } from "../../common/interfaces/IUser";
import { UserModel } from "../models/UserModel";

/**
 * Контроллер для CRUD операций над пользователями
 */
@Controller()
export class UserController {
  /**
   * Обновить информацию о пользователе
   *
   * @param {IUser} body - поля для обновления
   * @returns {Promise<IServerResponse<IUser>>}
   */
  @Post("/update")
  async save(@Body() body: IUser): Promise<IServerResponse<IUser>> {
    try {
      const user = UserModel.build({
        id: body.id,
        email: body.email,
        shared: body.shared,
      });

      await user.save();

      return {
        error: false,
        body: user.toJSON(),
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  /**
   * Получить информацию о пользователе по id
   *
   * @param {number} id - id пользователя
   * @returns {Promise<IServerResponse<IUser>>}
   */
  @Get("/user/:id")
  async getUser(@Param("id") id: number): Promise<IServerResponse<IUser>> {
    try {
      const user = await UserModel.findByPk(id);

      if (!user) {
        throw new Error(`Can't find a User with id ${id}`);
      }

      return {
        error: false,
        body: user.toJSON(),
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }
}
