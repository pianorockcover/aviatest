import { Body, JsonController, Get, Param, Post } from "routing-controllers";
import { IServerResponse } from "../../common/interfaces/IServerResponse";
import { IUser } from "../../common/interfaces/IUser";
import { UserModel } from "../models/UserModel";

/**
 * Контроллер для CRUD операций над пользователями
 */
@JsonController("/user")
export class UserController {
  /**
   * Обновить информацию о пользователе
   *
   * @param {IUser} body - поля для обновления
   * @param {number} id - id пользователя
   * @returns {Promise<IServerResponse<IUser>>}
   */
  @Post("/update/:id")
  async updateUser(
    @Body() body: IUser,
    @Param("id") id: number
  ): Promise<IServerResponse<IUser>> {
    try {
      const userData = {
        id,
        email: body.email,
        shared: body.shared,
      };

      let user = await UserModel.findByPk(id);

      if (!user) {
        user = await UserModel.create(userData);
      } else {
        await user.update(userData);
      }

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
  @Get("/get/:id")
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

  /**
   * Удалить пользователя по id
   *
   * @param {number} id - id пользователя
   * @returns {Promise<IServerResponse<IUser>>}
   */
  @Get("/remove/:id")
  async removeUser(@Param("id") id: number): Promise<IServerResponse<IUser>> {
    try {
      const user = await UserModel.findByPk(id);

      if (!user) {
        throw new Error(`Can't find a User with id ${id}`);
      }

      await user.destroy();

      return {
        error: false,
        message: `User ${id} was removed`,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }
}
